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
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import { blogList } from "@/components/common/Helper";

export const blogHeadingData = {
  id: 1,
  title: "Latest from Contractor+ HQ",
  btnText: "Contractor+ HQ",
  btnUrl: "/",
};
const Resource = () => {
  return (
    <section className="flex flex-col gap-12 px-2 py-10">
      {/* Hero Section */}
      <section className="main-container md:px-6">
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
        <div className="Free-Tools flex flex-col gap-8 rounded-lg px-4 py-10 md:px-6">
          <div className="text-center">
            <h2 className="text-alice mb-3 text-2xl font-bold sm:text-3xl">
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
              icon={
                <FileText className="group-hover:text-coralRed h-10 w-10 duration-300" />
              }
              link="/resources/free-estimate-templates"
              buttonText="Create Estimates"
            />

            <ResourceCard
              title="Construction Calculators"
              description="Quick access calculators for common construction measurements, material needs, and cost estimation."
              icon={
                <Calculator className="group-hover:text-coralRed h-10 w-10 duration-300" />
              }
              link="/resources/cost-calculator"
              buttonText="Open Calculators"
            />

            <ResourceCard
              title="Material Price Comparison"
              description="Find the best prices on construction materials from multiple suppliers and create segmented shopping lists."
              icon={
                <BarChart3 className="group-hover:text-coralRed h-10 w-10 duration-300" />
              }
              link="/resources/material-price-comparison"
              buttonText="Compare Prices Now"
            />

            <ResourceCard
              title="US Construction Labor Rates"
              description="Track and predict trends in construction labor rates across the United States based on proprietary data."
              icon={
                <BarChart3 className="group-hover:text-coralRed h-10 w-10 duration-300" />
              }
              link="/resources/usa-labour-rate"
              buttonText="View Labor Rates"
            />

            <ResourceCard
              title="Construction Cost Estimator"
              description="Get detailed cost estimates for various construction projects with regional pricing data and material breakdowns."
              icon={
                <Calculator className="group-hover:text-coralRed h-10 w-10 duration-300" />
              }
              link="/resources/construction-costs"
              buttonText="Estimate Costs"
            />

            <ResourceCard
              title="Contract Templates"
              description="Professionally drafted contract templates for various construction projects and services."
              icon={
                <FileText className="group-hover:text-coralRed h-10 w-10 duration-300" />
              }
              link="/resources/contract-templates"
              buttonText="Download Templates"
            />

            <ResourceCard
              title="Project Planning Tools"
              description="Interactive tools to help plan, schedule, and manage your construction projects efficiently."
              icon={
                <Wrench className="group-hover:text-coralRed h-10 w-10 duration-300" />
              }
              link="/resources/project-planning-tools"
              buttonText="Start Planning"
            />
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      {/* <section className="main-container">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-5">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Latest from Contractor+ HQ
            </h2>
            <Link
              href="/blog"
              className="text-glowing flex items-center gap-1 hover:text-red-500"
            >
              Go to Contractor+ HQ <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <BlogPostScroller />
        </div>
      </section> */}
      <BlogPosts
        data={blogList}
        blogs={blogHeadingData}
        className="pb-8 sm:pb-12 md:mt-9 md:pb-16 lg:pb-20 xl:pb-[99px]"
      />

      {/* Podcasts Section */}
      {/* <section className="bg-muted main-container py-10 md:px-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold sm:text-3xl">
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
    </section>
  );
};

export default Resource;
