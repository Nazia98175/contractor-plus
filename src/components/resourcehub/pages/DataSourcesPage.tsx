import React from "react";

import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";

const DataSourcesPage = () => {
  return (
    <div className="main-container py-12 md:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <Link href="/compare">
            <Button
              variant="ghost"
              className="text-primary hover:text-primary/80 flex items-center pl-0"
            >
              <ArrowLeft size={16} className="mr-2" />
              {/* {t("back_to_search")} */}
              Back to Price Comparison
            </Button>
          </Link>
        </div>

        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          {/* {t("data_sources")} */}
          Data Sources
        </h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Information about how we collect and use product data.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>How We Collect Price Data</CardTitle>
            <CardDescription>
              Our methodology for gathering accurate construction material
              pricing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>
              We pull product info and prices from various public websites—like
              Home Depot, Lowe's, Menards, and many more—using third-party tools
              such as Unwrangle. We only collect information that's already
              publicly visible (no hacking or bypassing paywalls). When we grab
              the data, we link right back to the original product page so you
              can double-check the details and confirm their accuracy.
            </p>

            <Separator className="my-4" />

            <p>
              In addition to scraping publicly available info, some retailers
              give us their data directly. We even invite all vendors to
              integrate with our search engine so users can compare prices
              across the board. If you're a vendor and want to be included in
              our index, you can learn more at{" "}
              <a
                href="https://contractorplus.app/vendor-partners/"
                className="text-primary font-medium underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://contractorplus.app/vendor-partners/
              </a>
              .
            </p>

            <Separator className="my-4" />

            <p>
              We're aware some sites say you can't scrape or crawl their pages
              in their terms of service. But U.S. courts have recognized the
              right to gather data from publicly accessible websites, especially
              when security measures aren't being bypassed. hiQ Labs, Inc. v.
              LinkedIn Corporation, 986 F.3d 1080 (9th Cir. 2021) supports this
              stance, emphasizing that publicly posted information is generally
              fair game. We believe giving attribution and linking back respects
              both the law and the spirit of open information.
            </p>

            <Separator className="my-4" />

            <p>
              We strive to keep everything current, but prices can change at any
              time. Verify the latest pricing and availability directly with the
              retailer or at their physical store. We're not affiliated with any
              of these retailers and we don't claim ownership of their content.
              If any retailer or brand believes we're misusing their publicly
              available data, we're happy to address concerns right away.
            </p>

            <Separator className="my-4" />

            <p>
              By using our service, you acknowledge that we're simply relaying
              information and won't be held liable for any inaccuracies. We're
              here to provide transparency, help you compare options, and invite
              retailers to collaborate in making price comparisons more
              convenient for everyone.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataSourcesPage;
