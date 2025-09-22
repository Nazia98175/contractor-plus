import { useState } from "react";
import { Share2, Mail, Smartphone, Copy, Check, X } from "lucide-react";
import { ShareDialogProps } from "./types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";

export const ShareDialog = ({ disabled }: ShareDialogProps) => {
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async (platform: string) => {
    if (navigator.share && platform === "native") {
      try {
        await navigator.share({
          title: "Construction Material Price Comparison",
          text: "Check out this material price comparison I created!",
          url: shareUrl,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else if (platform === "email") {
      window.location.href = `mailto:?subject=Construction Material Price Comparison&body=Check out this material price comparison I created: ${shareUrl}`;
    } else if (platform === "sms") {
      window.location.href = `sms:?body=Check out this material price comparison I created: ${shareUrl}`;
    }

    setShareDialogOpen(false);
  };

  return (
    <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" disabled={disabled}>
          <Share2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share this material list</DialogTitle>
          <DialogDescription>
            Share your material comparison list with others
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="link" className="mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="link">Share Link</TabsTrigger>
            <TabsTrigger value="platforms">Platforms</TabsTrigger>
          </TabsList>

          <TabsContent value="link" className="mt-2">
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Input
                  value={shareUrl}
                  readOnly
                  className="w-full"
                  onClick={(e) => e.currentTarget.select()}
                />
              </div>
              <Button
                type="button"
                size="icon"
                className="px-3"
                onClick={handleCopy}
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                <span className="sr-only">Copy</span>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="platforms" className="mt-2">
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => handleShare("email")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => handleShare("sms")}
              >
                <Smartphone className="mr-2 h-4 w-4" />
                SMS
              </Button>
              {typeof navigator.share === "function" && (
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => handleShare("native")}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share...
                </Button>
              )}
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="sm:justify-start">
          <DialogTrigger asChild>
            <Button type="button" variant="secondary">
              <X className="mr-2 h-4 w-4" />
              Close
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
