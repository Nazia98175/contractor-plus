import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";

export function EducationalContent() {
  return (
    <div className="mt-16">
      <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          HVAC CFM Calculation Guide
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="mb-8 leading-relaxed text-gray-600">
            Cubic Feet per Minute (CFM) is a crucial measurement in HVAC systems
            that determines how much air flows through your ventilation system.
            Proper CFM calculations ensure optimal indoor air quality, efficient
            temperature control, and appropriate ventilation for any room or
            building.
          </p>

          <div className="mb-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-100 bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Understanding CFM
              </h3>
              <p className="leading-relaxed text-gray-600">
                CFM represents the volume of air that moves through your HVAC
                system in one minute. It's calculated based on room volume and
                required air changes per hour (ACH). Different room types
                require different ACH rates to maintain proper ventilation and
                air quality.
              </p>
            </div>

            <div className="rounded-lg border border-gray-100 bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Why CFM Matters
              </h3>
              <p className="leading-relaxed text-gray-600">
                The right CFM ensures that your HVAC system can effectively
                heat, cool, and ventilate spaces. Undersized systems won't
                provide adequate comfort or air quality, while oversized systems
                waste energy and may cause humidity issues. Proper sizing is
                essential for system efficiency and comfort.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Air Changes Per Hour (ACH) Guidelines
            </h3>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <ul className="grid gap-3 text-gray-600">
                <li className="flex items-start">
                  <div className="bg-primary/10 mt-1 mr-3 rounded-full p-1">
                    <div className="bg-primary h-2 w-2 rounded-full"></div>
                  </div>
                  <span>
                    <strong>Residential Living Spaces:</strong> 4-6 ACH -
                    Typical for living rooms, bedrooms, and general spaces
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 mt-1 mr-3 rounded-full p-1">
                    <div className="bg-primary h-2 w-2 rounded-full"></div>
                  </div>
                  <span>
                    <strong>Kitchens:</strong> 7-8 ACH - Higher rates needed to
                    remove cooking odors and humidity
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 mt-1 mr-3 rounded-full p-1">
                    <div className="bg-primary h-2 w-2 rounded-full"></div>
                  </div>
                  <span>
                    <strong>Bathrooms:</strong> 8-12 ACH - High ventilation
                    needed to control humidity and odors
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 mt-1 mr-3 rounded-full p-1">
                    <div className="bg-primary h-2 w-2 rounded-full"></div>
                  </div>
                  <span>
                    <strong>Offices:</strong> 6-8 ACH - Sufficient fresh air for
                    occupant comfort and productivity
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 mt-1 mr-3 rounded-full p-1">
                    <div className="bg-primary h-2 w-2 rounded-full"></div>
                  </div>
                  <span>
                    <strong>Workshops/Industrial:</strong> 10-15+ ACH - Higher
                    rates for areas with fumes or particulates
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <Accordion type="single" collapsible className="space-y-4">
            <Card>
              <AccordionItem value="formula">
                <CardHeader className="p-0">
                  <AccordionTrigger className="px-6 py-4">
                    <CardTitle className="text-base">
                      The CFM Calculation Formula Explained
                    </CardTitle>
                  </AccordionTrigger>
                </CardHeader>
                <AccordionContent>
                  <CardContent className="pt-0">
                    <p className="text-aliceBlue mb-4">
                      The formula used by this calculator is:
                    </p>
                    <div className="bg-muted mb-4 rounded-md p-4 text-center font-mono">
                      CFM = (Room Volume × Air Changes per Hour) ÷ 60
                    </div>
                    <p className="text-aliceBlue">
                      First, we calculate the room volume by multiplying length
                      × width × height. Then, we multiply by how many air
                      changes per hour are desired. Finally, we divide by 60
                      (minutes per hour) to convert from cubic feet per hour to
                      cubic feet per minute (CFM).
                    </p>
                  </CardContent>
                </AccordionContent>
              </AccordionItem>
            </Card>

            <Card>
              <AccordionItem value="sizing">
                <CardHeader className="p-0">
                  <AccordionTrigger className="px-6 py-4">
                    <CardTitle className="text-base">
                      HVAC System Sizing and CFM
                    </CardTitle>
                  </AccordionTrigger>
                </CardHeader>
                <AccordionContent>
                  <CardContent className="pt-0">
                    <p className="text-aliceBlue mb-4">
                      When sizing HVAC systems, a common rule of thumb is that
                      you need approximately 400 CFM per 12,000 BTU (1 ton) of
                      air conditioning capacity. This means that a 3-ton system
                      would need to move about 1,200 CFM.
                    </p>
                    <p className="text-aliceBlue">
                      However, this is just a starting point - specific
                      conditions like climate, insulation quality, ceiling
                      height, and other factors can all affect the final
                      requirements. Professional HVAC load calculations are
                      recommended for new installations.
                    </p>
                  </CardContent>
                </AccordionContent>
              </AccordionItem>
            </Card>

            <Card>
              <AccordionItem value="common-issues">
                <CardHeader className="p-0">
                  <AccordionTrigger className="px-6 py-4">
                    <CardTitle className="text-base">
                      Common HVAC Airflow Issues
                    </CardTitle>
                  </AccordionTrigger>
                </CardHeader>
                <AccordionContent>
                  <CardContent className="pt-0">
                    <p className="text-aliceBlue mb-4">
                      Improper CFM can lead to several issues in your HVAC
                      system:
                    </p>
                    <ul className="text-aliceBlue list-disc space-y-2 pl-6 text-sm">
                      <li>
                        <strong>Insufficient CFM:</strong> Poor temperature
                        control, inadequate ventilation, air quality problems,
                        and increased humidity
                      </li>
                      <li>
                        <strong>Excessive CFM:</strong> Energy waste, noise
                        issues, and uncomfortable drafts
                      </li>
                      <li>
                        <strong>Unbalanced Airflow:</strong> Temperature
                        inconsistencies between rooms and pressure imbalances
                      </li>
                    </ul>
                    <p className="text-aliceBlue mt-4">
                      Regular maintenance of filters, ductwork, and vents helps
                      maintain proper CFM throughout your system.
                    </p>
                  </CardContent>
                </AccordionContent>
              </AccordionItem>
            </Card>

            <Card>
              <AccordionItem value="professional-help">
                <CardHeader className="p-0">
                  <AccordionTrigger className="px-6 py-4">
                    <CardTitle className="text-base">
                      When to Consult a Professional
                    </CardTitle>
                  </AccordionTrigger>
                </CardHeader>
                <AccordionContent>
                  <CardContent className="pt-0">
                    <p className="text-aliceBlue">
                      While this calculator provides a good estimate for basic
                      ventilation requirements, professional HVAC contractors
                      should be consulted for:
                    </p>
                    <ul className="text-aliceBlue mt-4 list-disc space-y-2 pl-6 text-sm">
                      <li>New HVAC system installations or replacements</li>
                      <li>Complex multi-zone systems</li>
                      <li>Commercial or industrial applications</li>
                      <li>
                        Buildings with special requirements (healthcare,
                        laboratories, etc.)
                      </li>
                      <li>
                        Addressing persistent comfort or air quality issues
                      </li>
                    </ul>
                  </CardContent>
                </AccordionContent>
              </AccordionItem>
            </Card>
          </Accordion>

          <div className="mt-8 rounded-lg border border-gray-100 bg-gray-50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Frequently Asked Questions
            </h3>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <p className="mb-2 font-semibold text-gray-800">
                  How accurate is the CFM calculator?
                </p>
                <p className="leading-relaxed text-gray-600">
                  This calculator provides a good starting point based on
                  industry standards for air changes per hour. For precise
                  calculations considering all variables like climate,
                  insulation, and occupancy, consult with an HVAC professional.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="mb-2 font-semibold text-gray-800">
                  How do I convert CFM to tons of AC capacity?
                </p>
                <p className="leading-relaxed text-gray-600">
                  As a rule of thumb, 1 ton of air conditioning (12,000 BTU)
                  requires approximately 400 CFM. To convert CFM to tons, divide
                  the CFM by 400. For example, 1,200 CFM would be equivalent to
                  about 3 tons of cooling capacity.
                </p>
              </div>

              <div>
                <p className="mb-2 font-semibold text-gray-800">
                  Can I use the same CFM calculation for heating and cooling?
                </p>
                <p className="leading-relaxed text-gray-600">
                  Yes, the basic CFM calculation for ventilation requirements
                  remains the same whether you're heating or cooling a space.
                  However, specific heating or cooling equipment might have
                  manufacturer recommendations for optimal CFM per BTU that
                  should be followed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <Card className="bg-primary/5 border-primary/20 mt-8 border">
        <CardContent className="p-6">
          <h3 className="mb-2 text-xl font-semibold">
            Ensure Every Room is Comfortable and Well-Ventilated
          </h3>
          <p className="text-aliceBlue mb-4">
            Explore Contractor+ – the platform that helps HVAC pros calculate
            loads/CFM, schedule maintenance, and manage client jobs with ease.
          </p>
          <div className="flex justify-center">
            <a
              href="https://contractorplus.app/signup"
              target="_blank"
              rel="noopener"
            >
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Try Contractor+ Free
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
