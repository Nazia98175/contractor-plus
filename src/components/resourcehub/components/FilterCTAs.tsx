import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "../../ui/card";
import { Input } from "@/components/ui/input";
import { Bell, Mail, Rss, Slack, Copy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";

const FilterCTAs = () => {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("email");

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Subscription Successful!",
      description: "You'll receive pricing updates at your email address.",
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast({
          title: "Copied to clipboard",
          description: "The text has been copied to your clipboard.",
        });
      },
      () => {
        toast({
          title: "Copy failed",
          description: "Please try copying manually.",
          variant: "destructive",
        });
      },
    );
  };

  return (
    <div className="mt-6 space-y-4">
      {/* Pricing Index Updates CTA */}
      <Card className="border-blue-100 bg-blue-50/60 p-4">
        <h3 className="mb-1 text-sm font-medium">Pricing Index Updates</h3>
        <p className="text-muted-foreground mb-3 text-xs">
          Want updated weekly?
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" className="w-full">
              <Bell className="mr-1 h-3.5 w-3.5" />
              Subscribe
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md overflow-hidden p-0">
            <DialogHeader className="p-4 pb-0">
              <DialogTitle className="text-xl font-semibold">
                Subscribe to updates
              </DialogTitle>
            </DialogHeader>

            <Tabs
              defaultValue="email"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="border-b">
                <TabsList className="flex h-auto w-full rounded-none bg-transparent p-0">
                  <TabsTrigger
                    value="email"
                    className="data-[state=active]:border-primary flex-1 rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:shadow-none"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </TabsTrigger>
                  <TabsTrigger
                    value="rss"
                    className="data-[state=active]:border-primary flex-1 rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:shadow-none"
                  >
                    <Rss className="mr-2 h-4 w-4" />
                    RSS
                  </TabsTrigger>
                  <TabsTrigger
                    value="slack"
                    className="data-[state=active]:border-primary flex-1 rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:shadow-none"
                  >
                    <Slack className="mr-2 h-4 w-4" />
                    Slack
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="email" className="p-4">
                <form onSubmit={handleSubmitEmail}>
                  <div className="mb-4">
                    <label className="mb-2 block text-sm">
                      Enter your email address
                    </label>
                    <Input
                      type="email"
                      placeholder="e.g. hello@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div className="bg-muted/50 mb-4 rounded-md p-4">
                    <p className="flex items-start text-sm">
                      <span className="mt-0.5 mr-2 inline-block">ℹ️</span>
                      You'll receive emails for new pricing updates, as well as
                      updates to existing data.
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit" size="sm">
                      Subscribe
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="rss" className="p-4">
                <div className="space-y-6">
                  <div>
                    <p className="mb-2 text-sm">Get the RSS feed</p>
                    <div className="flex">
                      <Input
                        readOnly
                        value="https://contractor-plus.com/index/feed.rss"
                        className="rounded-r-none"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-l-none border-l-0"
                        onClick={() =>
                          copyToClipboard(
                            "https://contractor-plus.com/index/feed.rss",
                          )
                        }
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-sm">Get the Atom feed</p>
                    <div className="flex">
                      <Input
                        readOnly
                        value="https://contractor-plus.com/index/feed.atom"
                        className="rounded-r-none"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-l-none border-l-0"
                        onClick={() =>
                          copyToClipboard(
                            "https://contractor-plus.com/index/feed.atom",
                          )
                        }
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <DialogClose asChild>
                      <Button variant="outline" size="sm">
                        Close
                      </Button>
                    </DialogClose>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="slack" className="p-4">
                <div className="space-y-4">
                  <p className="text-sm">
                    To receive live pricing updates in Slack, copy and paste the
                    text below into the Slack channel of your choice.
                  </p>

                  <div className="flex">
                    <Input
                      readOnly
                      value="/feed subscribe https://contractor-plus.com/index/slack.rss"
                      className="rounded-r-none"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-l-none border-l-0"
                      onClick={() =>
                        copyToClipboard(
                          "/feed subscribe https://contractor-plus.com/index/slack.rss",
                        )
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex justify-end">
                    <DialogClose asChild>
                      <Button variant="outline" size="sm">
                        Close
                      </Button>
                    </DialogClose>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </Card>
    </div>
  );
};

export default FilterCTAs;
