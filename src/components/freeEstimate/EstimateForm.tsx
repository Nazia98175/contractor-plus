"use client";
import { useRef, useState } from "react";

import {
  Building,
  FileEdit,
  FileText,
  Image,
  Plus,
  Trash2,
  User,
  X,
} from "lucide-react";
import { LineItemRow } from "./LineItemRow";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Button from "../common/Button";
import { EstimateInfo, EstimateItem } from "../hooks/use-estimate";
import { useFileUpload } from "../hooks/useFileUpload";
import { useIsMobile } from "../hooks/useIsMobile";
import { useToast } from "../hooks/useToast";
import { AspectRatio } from "../ui/Aspectratio";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";
import { Textarea } from "../ui/Textarea";

interface EstimateFormProps {
  items: EstimateItem[];
  estimateInfo: EstimateInfo;
  onAddItem: () => void;
  onRemoveItem: (id: string) => void;
  onUpdateItem: (id: string, updates: Partial<EstimateItem>) => void;
  onMoveItem: (id: string, direction: "up" | "down") => void;
  onUpdateEstimateInfo: (updates: Partial<EstimateInfo>) => void;
  onClearItems: () => void;
  onExport: () => void;
  calculatedTotals: {
    subtotal: number;
    markupAmount: number;
    totalBeforeTax: number;
    taxAmount: number;
    total: number;
  };
}

export function EstimateForm({
  items,
  estimateInfo,
  onAddItem,
  onRemoveItem,
  onUpdateItem,
  onMoveItem,
  onUpdateEstimateInfo,
  onClearItems,
  onExport,
  calculatedTotals,
}: EstimateFormProps) {
  const [activeTab, setActiveTab] = useState("items");
  const { imageUrl, isUploading, handleFileUpload, clearImage } =
    useFileUpload();
  const previewRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  // Set company logo in estimateInfo when imageUrl changes
  if (imageUrl && imageUrl !== estimateInfo.companyLogo) {
    onUpdateEstimateInfo({ companyLogo: imageUrl });
  }

  const handleClearLogo = () => {
    clearImage();
    onUpdateEstimateInfo({ companyLogo: null });
  };

  const exportToPdf = async () => {
    if (!previewRef.current) return;

    toast({
      title: "Generating PDF",
      description: "Your estimate is being prepared for download.",
    });

    try {
      const content = previewRef.current;
      const canvas = await html2canvas(content, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const ratio = canvas.width / canvas.height;
      const imgWidth = pdfWidth;
      const imgHeight = imgWidth / ratio;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      // If content is longer than a single page, handle multiple pages
      if (imgHeight > pdfHeight) {
        let heightLeft = imgHeight;
        let position = -pdfHeight; // starting position
        heightLeft -= pdfHeight;

        while (heightLeft > 0) {
          position = position - pdfHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pdfHeight;
        }
      }

      // Generate PDF filename from estimate title and number
      const fileName = `${estimateInfo.title.replace(/\s+/g, "_")}_${estimateInfo.estimateNumber}.pdf`;
      pdf.save(fileName);

      toast({
        title: "PDF Downloaded",
        description: `Your estimate has been saved as ${fileName}`,
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      {/* Hidden preview content for PDF generation */}
      <div
        ref={previewRef}
        className="absolute -left-[9999px] bg-white p-6"
        style={{ width: "210mm" }} // A4 width
      >
        <div className="mb-6 text-center">
          {estimateInfo.companyLogo && (
            <div className="mb-4 flex justify-center">
              <img
                src={estimateInfo.companyLogo}
                alt="Company Logo"
                className="max-h-20 object-contain"
              />
            </div>
          )}
          <h1 className="text-2xl font-bold">{estimateInfo.title}</h1>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-4">
          <div>
            <h3 className="mb-1 font-semibold">From:</h3>
            <p className="text-sm">{estimateInfo.companyName}</p>
            <p className="text-sm">{estimateInfo.companyAddress}</p>
            <p className="text-sm">{estimateInfo.companyPhone}</p>
            <p className="text-sm">{estimateInfo.companyEmail}</p>
          </div>

          <div>
            <h3 className="mb-1 font-semibold">To:</h3>
            <p className="text-sm">{estimateInfo.clientName}</p>
            <p className="text-sm">{estimateInfo.clientAddress}</p>
            <p className="text-sm">{estimateInfo.clientPhone}</p>
            <p className="text-sm">{estimateInfo.clientEmail}</p>
          </div>
        </div>

        <div className="mb-6 flex justify-between">
          <div>
            <h3 className="mb-1 font-semibold">Estimate #:</h3>
            <p className="text-sm">{estimateInfo.estimateNumber}</p>
          </div>

          <div>
            <h3 className="mb-1 font-semibold">Date:</h3>
            <p className="text-sm">{estimateInfo.estimateDate}</p>
          </div>

          <div>
            <h3 className="mb-1 font-semibold">Valid until:</h3>
            <p className="text-sm">{estimateInfo.expiryDate}</p>
          </div>
        </div>

        <div className="mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-4 py-2">Description</th>
                <th className="border px-4 py-2 text-right">Qty</th>
                <th className="border px-4 py-2 text-right">Unit</th>
                <th className="border px-4 py-2 text-right">Rate</th>
                <th className="border px-4 py-2 text-right">Amount</th>
              </tr>
            </thead>

            <tbody>
              {items.length > 0 ? (
                items.map((item, index) => (
                  <tr
                    key={item.id}
                    className={index % 2 === 0 ? "" : "bg-gray-50"}
                  >
                    <td className="border px-4 py-2">
                      {item.description || "—"}
                    </td>
                    <td className="border px-4 py-2 text-right">
                      {item.quantity}
                    </td>
                    <td className="border px-4 py-2 text-right">{item.unit}</td>
                    <td className="border px-4 py-2 text-right">
                      ${item.rate.toFixed(2)}
                    </td>
                    <td className="border px-4 py-2 text-right">
                      ${(item.quantity * item.rate).toFixed(2)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="border py-4 text-center text-gray-500"
                  >
                    No items added yet
                  </td>
                </tr>
              )}
            </tbody>

            <tfoot>
              <tr className="border-t-2">
                <td
                  colSpan={4}
                  className="border px-4 py-2 text-right font-semibold"
                >
                  Subtotal
                </td>
                <td className="border px-4 py-2 text-right font-semibold">
                  ${calculatedTotals.subtotal.toFixed(2)}
                </td>
              </tr>
              {estimateInfo.markup > 0 && (
                <tr>
                  <td colSpan={4} className="border px-4 py-2 text-right">
                    Markup ({estimateInfo.markup}%)
                  </td>
                  <td className="border px-4 py-2 text-right">
                    ${calculatedTotals.markupAmount.toFixed(2)}
                  </td>
                </tr>
              )}
              <tr>
                <td colSpan={4} className="border px-4 py-2 text-right">
                  Total before tax
                </td>
                <td className="border px-4 py-2 text-right">
                  ${calculatedTotals.totalBeforeTax.toFixed(2)}
                </td>
              </tr>
              {estimateInfo.salesTax > 0 && (
                <tr>
                  <td colSpan={4} className="border px-4 py-2 text-right">
                    Sales Tax ({estimateInfo.salesTax}%)
                  </td>
                  <td className="border px-4 py-2 text-right">
                    ${calculatedTotals.taxAmount.toFixed(2)}
                  </td>
                </tr>
              )}
              <tr className="border-t-2">
                <td
                  colSpan={4}
                  className="border px-4 py-2 text-right font-bold"
                >
                  Total
                </td>
                <td className="border px-4 py-2 text-right font-bold">
                  ${calculatedTotals.total.toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {estimateInfo.notes && (
          <div className="mt-6">
            <h3 className="mb-2 font-semibold">Notes:</h3>
            <p className="text-sm whitespace-pre-wrap">{estimateInfo.notes}</p>
          </div>
        )}

        <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
          This estimate was created with Contractor+ Free Estimate Maker
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Create Estimate</span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={exportToPdf}
                className="hidden items-center gap-1 bg-red-600 font-medium text-white hover:bg-red-700 hover:text-white sm:flex"
              >
                <FileText className="h-4 w-4" />
                <span>Save as PDF</span>
              </Button>
              <Button
                variant="outline"
                // size="icon"
                onClick={exportToPdf}
                className="bg-red-600 text-white hover:bg-red-700 hover:text-white sm:hidden"
              >
                <FileText className="h-4 w-4" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6 grid w-full grid-cols-2">
              <TabsTrigger value="items">Line Items</TabsTrigger>
              <TabsTrigger value="details">Estimate Details</TabsTrigger>
            </TabsList>

            <TabsContent value="items" className="space-y-4">
              <div className="space-y-2">
                <div className="text-muted-foreground grid grid-cols-12 gap-2 px-2 text-sm font-medium">
                  <div className="col-span-6 sm:col-span-5">Description</div>
                  <div className="col-span-2 sm:col-span-2">Qty</div>
                  <div className="hidden sm:col-span-1 sm:block">Unit</div>
                  <div className="col-span-2 sm:col-span-2">Rate</div>
                  <div className="col-span-2 sm:col-span-2">Amount</div>
                </div>

                {items.length > 0 ? (
                  <div className="space-y-2">
                    {items.map((item, index) => (
                      <LineItemRow
                        key={item.id}
                        item={item}
                        isFirst={index === 0}
                        isLast={index === items.length - 1}
                        onUpdate={(updates) => onUpdateItem(item.id, updates)}
                        onRemove={() => onRemoveItem(item.id)}
                        onMoveUp={() => onMoveItem(item.id, "up")}
                        onMoveDown={() => onMoveItem(item.id, "down")}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-muted-foreground py-8 text-center">
                    No line items yet. Click "Add Item" to get started.
                  </div>
                )}

                <div className="flex justify-between border-t pt-4">
                  <Button onClick={onAddItem} className="gap-1">
                    <Plus className="h-4 w-4" />
                    Add Item
                  </Button>

                  {items.length > 0 && (
                    <Button
                      variant="outline"
                      onClick={onClearItems}
                      className="gap-1"
                    >
                      <Trash2 className="h-4 w-4" />
                      Clear All
                    </Button>
                  )}
                </div>
              </div>

              {/* Totals Section */}
              <div className="mt-6 space-y-2 border-t pt-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>${calculatedTotals.subtotal.toFixed(2)}</span>
                </div>

                {/* Markup Input */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Markup:</span>
                    <div className="relative w-20">
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={estimateInfo.markup}
                        onChange={(e) =>
                          onUpdateEstimateInfo({
                            markup: parseFloat(e.target.value) || 0,
                          })
                        }
                        className="h-7 pr-6 text-right text-sm"
                      />
                      <span className="text-muted-foreground absolute top-1/2 right-2 -translate-y-1/2 transform text-xs">
                        %
                      </span>
                    </div>
                  </div>
                  <span className="text-sm">
                    ${calculatedTotals.markupAmount.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span>Total before tax:</span>
                  <span>${calculatedTotals.totalBeforeTax.toFixed(2)}</span>
                </div>

                {/* Sales Tax Input */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Sales Tax:</span>
                    <div className="relative w-20">
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={estimateInfo.salesTax}
                        onChange={(e) =>
                          onUpdateEstimateInfo({
                            salesTax: parseFloat(e.target.value) || 0,
                          })
                        }
                        className="h-7 pr-6 text-right text-sm"
                      />
                      <span className="text-muted-foreground absolute top-1/2 right-2 -translate-y-1/2 transform text-xs">
                        %
                      </span>
                    </div>
                  </div>
                  <span className="text-sm">
                    ${calculatedTotals.taxAmount.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between border-t pt-2 text-lg font-medium">
                  <span>Total:</span>
                  <span>${calculatedTotals.total.toFixed(2)}</span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="details">
              <div className="space-y-6">
                {/* Estimate Information Section with 3 fields */}
                <Card className="overflow-hidden border shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="bg-primary/10 text-primary rounded-full p-2">
                        <FileEdit className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium">
                        Estimate Information
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title" className="text-sm">
                          Estimate Title
                        </Label>
                        <Input
                          id="title"
                          value={estimateInfo.title}
                          onChange={(e) =>
                            onUpdateEstimateInfo({ title: e.target.value })
                          }
                          className="mt-1"
                          placeholder="Project Estimate"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div>
                          <Label htmlFor="estimateNumber" className="text-sm">
                            Estimate #
                          </Label>
                          <Input
                            id="estimateNumber"
                            value={estimateInfo.estimateNumber}
                            onChange={(e) =>
                              onUpdateEstimateInfo({
                                estimateNumber: e.target.value,
                              })
                            }
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="estimateDate" className="text-sm">
                            Date
                          </Label>
                          <Input
                            id="estimateDate"
                            type="date"
                            value={estimateInfo.estimateDate}
                            onChange={(e) =>
                              onUpdateEstimateInfo({
                                estimateDate: e.target.value,
                              })
                            }
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="expiryDate" className="text-sm">
                            Expiry Date
                          </Label>
                          <Input
                            id="expiryDate"
                            type="date"
                            value={estimateInfo.expiryDate}
                            onChange={(e) =>
                              onUpdateEstimateInfo({
                                expiryDate: e.target.value,
                              })
                            }
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Your Information Section */}
                  <Card className="overflow-hidden border shadow-sm">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="bg-primary/10 text-primary rounded-full p-2">
                          <Building className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-medium">
                          Your Information
                        </h3>
                      </div>

                      <div className="space-y-6">
                        {/* Company Logo Upload */}
                        <div>
                          <Label className="mb-1 block text-sm">
                            Company Logo
                          </Label>
                          <div className="flex flex-col gap-2">
                            {estimateInfo.companyLogo ? (
                              <div className="relative w-full max-w-[180px] overflow-hidden rounded-md border">
                                <AspectRatio
                                  ratio={3 / 2}
                                  className="bg-muted/30"
                                >
                                  <img
                                    src={estimateInfo.companyLogo}
                                    alt="Company Logo"
                                    className="h-full w-full object-contain"
                                  />
                                </AspectRatio>
                                <Button
                                  // size="icon"
                                  // variant="ghost"
                                  className="bg-background/80 absolute top-1 right-1 h-6 w-6 rounded-full"
                                  onClick={handleClearLogo}
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              </div>
                            ) : (
                              <label className="hover:bg-muted/50 flex h-28 w-full max-w-[180px] cursor-pointer flex-col items-center justify-center rounded-md border border-dashed transition-colors">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  <Image className="text-muted-foreground mb-1 h-8 w-8" />
                                  <p className="text-muted-foreground text-xs">
                                    Upload logo
                                  </p>
                                </div>
                                <input
                                  type="file"
                                  className="hidden"
                                  accept="image/*"
                                  onChange={handleFileUpload}
                                  disabled={isUploading}
                                />
                              </label>
                            )}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="companyName" className="text-sm">
                              Company Name
                            </Label>
                            <Input
                              id="companyName"
                              value={estimateInfo.companyName}
                              onChange={(e) =>
                                onUpdateEstimateInfo({
                                  companyName: e.target.value,
                                })
                              }
                              className="mt-1"
                              placeholder="Your Company LLC"
                            />
                          </div>

                          <div>
                            <Label htmlFor="companyAddress" className="text-sm">
                              Address
                            </Label>
                            <Input
                              id="companyAddress"
                              value={estimateInfo.companyAddress}
                              onChange={(e) =>
                                onUpdateEstimateInfo({
                                  companyAddress: e.target.value,
                                })
                              }
                              className="mt-1"
                              placeholder="123 Your Street, City, State, ZIP"
                            />
                          </div>

                          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <div>
                              <Label htmlFor="companyPhone" className="text-sm">
                                Phone
                              </Label>
                              <Input
                                id="companyPhone"
                                value={estimateInfo.companyPhone}
                                onChange={(e) =>
                                  onUpdateEstimateInfo({
                                    companyPhone: e.target.value,
                                  })
                                }
                                className="mt-1"
                                placeholder="(555) 123-4567"
                              />
                            </div>

                            <div>
                              <Label htmlFor="companyEmail" className="text-sm">
                                Email
                              </Label>
                              <Input
                                id="companyEmail"
                                value={estimateInfo.companyEmail}
                                onChange={(e) =>
                                  onUpdateEstimateInfo({
                                    companyEmail: e.target.value,
                                  })
                                }
                                className="mt-1"
                                placeholder="you@example.com"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Client Information Section */}
                  <Card className="overflow-hidden border shadow-sm">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="bg-primary/10 text-primary rounded-full p-2">
                          <User className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-medium">
                          Client Information
                        </h3>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="clientName" className="text-sm">
                            Client Name
                          </Label>
                          <Input
                            id="clientName"
                            value={estimateInfo.clientName}
                            onChange={(e) =>
                              onUpdateEstimateInfo({
                                clientName: e.target.value,
                              })
                            }
                            className="mt-1"
                            placeholder="Client Name"
                          />
                        </div>

                        <div>
                          <Label htmlFor="clientAddress" className="text-sm">
                            Address
                          </Label>
                          <Input
                            id="clientAddress"
                            value={estimateInfo.clientAddress}
                            onChange={(e) =>
                              onUpdateEstimateInfo({
                                clientAddress: e.target.value,
                              })
                            }
                            className="mt-1"
                            placeholder="123 Client Street, City, State, ZIP"
                          />
                        </div>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          <div>
                            <Label htmlFor="clientPhone" className="text-sm">
                              Phone
                            </Label>
                            <Input
                              id="clientPhone"
                              value={estimateInfo.clientPhone}
                              onChange={(e) =>
                                onUpdateEstimateInfo({
                                  clientPhone: e.target.value,
                                })
                              }
                              className="mt-1"
                              placeholder="(555) 987-6543"
                            />
                          </div>

                          <div>
                            <Label htmlFor="clientEmail" className="text-sm">
                              Email
                            </Label>
                            <Input
                              id="clientEmail"
                              value={estimateInfo.clientEmail}
                              onChange={(e) =>
                                onUpdateEstimateInfo({
                                  clientEmail: e.target.value,
                                })
                              }
                              className="mt-1"
                              placeholder="client@example.com"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Notes Section */}
                <Card className="overflow-hidden border shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="bg-primary/10 text-primary rounded-full p-2">
                        <FileText className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium">
                        Additional Information
                      </h3>
                    </div>

                    <div>
                      <Label htmlFor="notes" className="text-sm">
                        Notes
                      </Label>
                      <Textarea
                        id="notes"
                        value={estimateInfo.notes}
                        onChange={(e) =>
                          onUpdateEstimateInfo({ notes: e.target.value })
                        }
                        className="mt-1"
                        placeholder="Terms, conditions, or additional information..."
                        rows={4}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
