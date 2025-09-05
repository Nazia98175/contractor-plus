import Link from "next/link";
import { Button } from "../ui/button";

export function SEOContent() {
  return (
    <div className="mx-auto mt-24 mb-12 max-w-5xl">
      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">
            Free Estimate Templates for Contractors
          </h2>
          <p className="text-aliceBlue">
            Access professional, customizable estimate templates for your
            construction and home improvement projects with our free estimate
            template library. No signup required - simply choose a template,
            customize it, and generate a PDF.
          </p>
        </section>

        <section className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">How It Works</h3>
            <ul className="text-aliceBlue list-disc space-y-3 pl-5">
              <li>
                Browse our library of pre-built estimate templates for various
                project types
              </li>
              <li>Select a template that matches your project needs</li>
              <li>
                Customize line items, quantities, and costs to fit your specific
                requirements
              </li>
              <li>Add your company information and client details</li>
              <li>Apply markup and sales tax calculations automatically</li>
              <li>Save as PDF to share with your clients</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Available Templates</h3>
            <ul className="text-aliceBlue list-disc space-y-3 pl-5">
              <li>
                Residential remodeling projects (kitchen, bathroom, basement)
              </li>
              <li>Commercial renovations and office spaces</li>
              <li>Outdoor projects (decks, fences, landscaping)</li>
              <li>
                Trade-specific estimates (HVAC, painting, plumbing, electrical)
              </li>
              <li>Maintenance and service contracts</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold">
            Benefits of Using Our Free Estimate Templates
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-shutter space-y-3 rounded-lg p-6">
              <h4 className="font-medium">Save Time</h4>
              <p className="text-aliceBlue text-sm">
                Start with pre-built templates rather than creating estimates
                from scratch. Simply customize to your needs.
              </p>
            </div>
            <div className="bg-shutter space-y-3 rounded-lg p-6">
              <h4 className="font-medium">Look Professional</h4>
              <p className="text-aliceBlue text-sm">
                Create polished, detailed estimates that instill confidence in
                your clients and win more business.
              </p>
            </div>
            <div className="bg-shutter space-y-3 rounded-lg p-6">
              <h4 className="font-medium">Accurate Pricing</h4>
              <p className="text-aliceBlue text-sm">
                Calculate totals, markups, and taxes automatically to ensure
                your pricing is accurate and profitable.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-shutter rounded-lg p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold">
            Over 50,000 Professionals Use Contractor+ for Estimates
          </h3>
          <p className="text-aliceBlue mx-auto mb-6 max-w-2xl">
            Join thousands of contractors, builders, and service professionals
            who use Contractor+ to create professional estimates, manage
            projects, and grow their businesses.
          </p>
          <Button size="lg" asChild>
            <Link href="/ai-estimating-software" className="no-underline">
              Learn More
            </Link>
          </Button>
        </section>

        <section className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Perfect For</h3>
            <ul className="text-aliceBlue list-disc space-y-3 pl-5">
              <li>General contractors and builders</li>
              <li>Remodeling companies</li>
              <li>HVAC contractors and technicians</li>
              <li>Painters and decorators</li>
              <li>Landscapers and outdoor service providers</li>
              <li>Plumbers and electricians</li>
              <li>Flooring and installation professionals</li>
              <li>Independent contractors and small businesses</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Why Choose Our Estimate Templates
            </h3>
            <ul className="text-aliceBlue list-disc space-y-3 pl-5">
              <li>Completely free to use with no limits</li>
              <li>No account creation or signup required</li>
              <li>Easy-to-use interface with no learning curve</li>
              <li>Professional-looking output with customizable details</li>
              <li>Templates designed by industry professionals</li>
              <li>Works on any device - desktop, tablet, or mobile</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
