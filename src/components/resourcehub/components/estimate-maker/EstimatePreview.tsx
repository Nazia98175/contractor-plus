import { useRef } from "react";
import { EstimateItem, EstimateInfo } from "@/hooks/use-estimate";
import { FileText, Lock } from "lucide-react";
import { useToast } from "../ui/use-toast";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

interface EstimatePreviewProps {
  items: EstimateItem[];
  estimateInfo: EstimateInfo;
}

export function EstimatePreview({ items, estimateInfo }: EstimatePreviewProps) {
  const previewRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + item.quantity * item.rate, 0);
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
      });
    }
  };

  return (
    <div>
      <Card className="overflow-hidden">
        <CardHeader className="bg-muted/50 border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <CardTitle>Preview</CardTitle>
            <Button
              variant="default"
              size="sm"
              className="flex items-center gap-1 bg-red-600 font-medium text-white hover:bg-red-700"
              onClick={exportToPdf}
            >
              <FileText className="h-4 w-4" />
              {isMobile ? "Save PDF" : "Save as PDF"}
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div
            ref={previewRef}
            className="overflow-y-auto bg-white p-6"
            style={{ maxHeight: "60vh" }}
          >
            <div className="text-center">
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
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/30 text-left">
                    <th className="px-4 py-2">Description</th>
                    <th className="px-4 py-2 text-right">Qty</th>
                    <th className="px-4 py-2 text-right">Unit</th>
                    <th className="px-4 py-2 text-right">Rate</th>
                    <th className="px-4 py-2 text-right">Amount</th>
                  </tr>
                </thead>

                <tbody>
                  {items.length > 0 ? (
                    items.map((item, index) => (
                      <tr
                        key={item.id}
                        className={index % 2 === 0 ? "" : "bg-muted/10"}
                      >
                        <td className="px-4 py-2">{item.description || "—"}</td>
                        <td className="px-4 py-2 text-right">
                          {item.quantity}
                        </td>
                        <td className="px-4 py-2 text-right">{item.unit}</td>
                        <td className="px-4 py-2 text-right">
                          ${item.rate.toFixed(2)}
                        </td>
                        <td className="px-4 py-2 text-right">
                          ${(item.quantity * item.rate).toFixed(2)}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={5}
                        className="text-aliceBlue py-4 text-center"
                      >
                        No items added yet
                      </td>
                    </tr>
                  )}
                </tbody>

                <tfoot>
                  <tr className="border-t">
                    <td
                      colSpan={4}
                      className="px-4 py-2 text-right font-semibold"
                    >
                      Subtotal
                    </td>
                    <td className="px-4 py-2 text-right font-semibold">
                      ${calculateSubtotal().toFixed(2)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {estimateInfo.notes && (
              <div className="mt-6">
                <h3 className="mb-2 font-semibold">Notes:</h3>
                <p className="text-sm whitespace-pre-wrap">
                  {estimateInfo.notes}
                </p>
              </div>
            )}

            <div className="text-aliceBlue mt-8 border-t pt-4 text-center text-sm">
              This estimate was created with Contractor+ Free Estimate Maker
            </div>

            {/* Add "Save as PDF" button at the bottom of the estimate as well */}
            <div className="mt-6 text-center">
              <Button
                variant="default"
                onClick={exportToPdf}
                className="bg-red-600 text-white hover:bg-red-700"
              >
                <FileText className="mr-2 h-4 w-4" />
                Save {isMobile ? "PDF" : "as PDF"}
              </Button>
            </div>
          </div>
        </CardContent>

        <CardFooter className="bg-muted/30 border-t p-4">
          <div className="grid w-full grid-cols-2 gap-2">
            <Button
              variant="secondary"
              className="flex w-full items-center justify-center gap-1 opacity-70"
              disabled
            >
              <Lock className="h-4 w-4" />
              Save to Account
            </Button>
            <Button
              variant="secondary"
              className="flex w-full items-center justify-center gap-1 opacity-70"
              disabled
            >
              <Lock className="h-4 w-4" />
              Create Contract
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
