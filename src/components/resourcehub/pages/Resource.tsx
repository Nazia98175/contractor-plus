"use client";
import {
  ArrowRight,
  BarChart3,
  Calculator,
  FileText,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { BlogPostScroller } from "../components/resource-hub/BlogPostScroller";
import { ResourceCard } from "../components/resource-hub/ResourceCard";
import { useEffect } from "react";
import gsap from "gsap";

const Resource = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen-podcast", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-header-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-footer-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
    }, 700);
  }, []);
  return (
    <div className="flex flex-col gap-12 py-10">
      {/* Hero Section */}
      <section className="main-main-container md:px-6">
        <div className="space-y-4 text-center">
          <h1 className="animate-fade-in grey-gradient text-4xl font-bold tracking-tighter md:text-5xl">
            Contractor+ Resource Hub
          </h1>
          <p className="text-aliceBlue animate-slide-in mx-auto max-w-[800px] text-lg md:text-xl">
            Access our collection of free tools, templates, blog posts, and
            podcasts designed to help contractors build better businesses.
          </p>
        </div>
      </section>

      {/* Free Tools & Templates Section - Moved to the top */}
      <section className="main-container">
        <div className="resource-bg flex flex-col gap-8 px-4 py-10 md:px-6">
          <div className="text-center">
            <h2 className="text-alice mb-3 text-3xl font-bold tracking-tight">
              Free Tools & Templates
            </h2>
            <p className="text-aliceBlue mx-auto max-w-[800px] text-lg">
              Everything you need to streamline your construction business—no
              strings attached.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ResourceCard
              title="Free Estimate Templates"
              description="Generate quick professional estimates on the fly and save them as PDF to share with clients."
              icon={<FileText className="text-coralRed h-10 w-10" />}
              link="/resources/free-estimate-templates"
              buttonText="Create Estimates"
            />

            <ResourceCard
              title="Construction Calculators"
              description="Quick access calculators for common construction measurements, material needs, and cost estimation."
              icon={<Calculator className="text-primary h-10 w-10" />}
              link="resources/cost-calculator"
              buttonText="Open Calculators"
            />

            <ResourceCard
              title="Material Price Comparison"
              description="Find the best prices on construction materials from multiple suppliers and create segmented shopping lists."
              icon={<BarChart3 className="text-primary h-10 w-10" />}
              link="/resources/material-price-comparison"
              buttonText="Compare Prices Now"
            />

            <ResourceCard
              title="US Construction Labor Rates"
              description="Track and predict trends in construction labor rates across the United States based on proprietary data."
              icon={<BarChart3 className="text-primary h-10 w-10" />}
              link="/resources/USA-labor-rates"
              buttonText="View Labor Rates"
            />

            <ResourceCard
              title="Construction Cost Estimator"
              description="Get detailed cost estimates for various construction projects with regional pricing data and material breakdowns."
              icon={<Calculator className="text-primary h-10 w-10" />}
              link="/resources/construction-costs"
              buttonText="Estimate Costs"
            />

            <ResourceCard
              title="Contract Templates"
              description="Professionally drafted contract templates for various construction projects and services."
              icon={<FileText className="text-primary h-10 w-10" />}
              link="/resources/contract-templates"
              buttonText="Download Templates"
            />

            <ResourceCard
              title="Project Planning Tools"
              description="Interactive tools to help plan, schedule, and manage your construction projects efficiently."
              icon={<Wrench className="text-primary h-10 w-10" />}
              link="/resources/project-planning-tools"
              buttonText="Start Planning"
            />
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="main-container">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">
              Latest from Contractor+ HQ
            </h2>
            <Link
              href="/blog"
              className="text-primary flex items-center gap-1 hover:underline"
            >
              Go to Contractor+ HQ <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <BlogPostScroller />
        </div>
      </section>

      {/* Podcasts Section */}
      {/* <section className="bg-muted main-container py-10 md:px-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">
              Latest Podcasts
            </h2>
            <Link
              to="/podcasts"
              className="text-primary flex items-center gap-1 hover:underline"
            >
              View All Podcast Episodes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <PodcastScroller />
        </div>
      </section> */}
    </div>
  );
};

export default Resource;
