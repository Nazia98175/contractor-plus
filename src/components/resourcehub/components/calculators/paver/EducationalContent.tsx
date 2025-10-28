import { Card, CardContent } from "../../ui/card";

export function EducationalContent() {
  return (
    <div className="space-y-8">
      <div className="prose prose-gray max-w-none">
        <h2 className="text-2xl font-semibold">
          How to Use the Paver Calculator
        </h2>
        <p>
          Our paver calculator helps contractors and DIY enthusiasts estimate
          the number of pavers needed for a project and calculate the total
          material cost. Follow these steps for an accurate estimate:
        </p>

        <ol className="list-decimal space-y-3 pl-5">
          <li>Measure the total area to be paved in square feet</li>
          <li>Measure the length and width of your chosen paver in inches</li>
          <li>Determine an appropriate waste factor (typically 5-10%)</li>
          <li>Enter the cost per individual paver</li>
          <li>
            Click calculate to see how many pavers you'll need and the total
            material cost
          </li>
        </ol>

        <h2 className="mt-8 text-2xl font-semibold">
          Tips for Paver Installation Projects
        </h2>
        <p>
          Planning a paver project requires careful consideration of materials
          and design. Here are some professional tips:
        </p>

        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Choose the right paver:</strong> Consider the intended use -
            walkways and patios can use decorative pavers, while driveways need
            more durable options.
          </li>
          <li>
            <strong>Pattern matters:</strong> Different laying patterns
            (herringbone, basket weave, running bond) affect the number of cuts
            needed and your waste factor.
          </li>
          <li>
            <strong>Consider extra materials:</strong> Don't forget to budget
            for edge restraints, geotextile fabric, base materials
            (gravel/sand), and joint sand or polymeric sand.
          </li>
          <li>
            <strong>Calculate base materials:</strong> You'll typically need 4-6
            inches of compacted gravel base for patios and walkways, and 8-12
            inches for driveways, plus 1 inch of bedding sand.
          </li>
          <li>
            <strong>Order extra:</strong> Always order 5-10% extra pavers for
            cuts, breakage, and future repairs. This is especially important for
            custom colors that may be discontinued.
          </li>
        </ul>
      </div>

      <Card className="border-stiletto border">
        <CardContent className="py-6">
          <h3 className="mb-3 text-xl font-medium">
            Don't get caught a few pavers short
          </h3>
          <p className="text-decemberSky mb-4">
            Use Contractor+ to plan your paver projects accurately – calculate
            materials, costs, and even schedule your crew. From patios to
            driveways, Contractor+ helps hardscaping pros save time and money by
            getting estimates right from the start.
          </p>
          <p className="text-dancingJewel font-medium">
            Try it on your next project!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
