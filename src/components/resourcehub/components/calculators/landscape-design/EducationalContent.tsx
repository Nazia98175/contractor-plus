export function EducationalContent() {
  return (
    <div className="mt-8 space-y-6">
      <div>
        <h2 className="mb-2 text-xl font-semibold">
          Understanding Landscape Design Costs
        </h2>
        <p className="text-aliceBlue">
          Landscape design costs vary widely depending on the scope of the
          project, materials selected, and the complexity of the design.
          Professional landscaping typically includes costs for design services,
          materials, labor, and sometimes ongoing maintenance.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Cost Factors to Consider</h3>
          <ul className="text-aliceBlue list-disc space-y-1 pl-5">
            <li>Size of the area to be landscaped</li>
            <li>Types of plants and materials used</li>
            <li>Hard features like patios, walkways, or retaining walls</li>
            <li>Water features or irrigation systems</li>
            <li>Lighting and electrical work</li>
            <li>Soil preparation and grading needs</li>
            <li>Local labor rates and permit requirements</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">Average Cost Ranges</h3>
          <ul className="text-aliceBlue list-disc space-y-1 pl-5">
            <li>
              <strong>Basic landscaping:</strong> $4-6 per square foot
            </li>
            <li>
              <strong>Mid-range landscaping:</strong> $8-12 per square foot
            </li>
            <li>
              <strong>High-end landscaping:</strong> $15-30+ per square foot
            </li>
            <li>
              <strong>Design fees:</strong> $300-2,500+ depending on project
              size
            </li>
            <li>
              <strong>Special features:</strong> Small water feature:
              $500-1,500, Pergola: $2,000-5,000, Outdoor lighting system:
              $1,000-5,000
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-medium">
          Tips for Managing Landscape Project Costs
        </h3>
        <ol className="text-aliceBlue list-decimal space-y-1 pl-5">
          <li>Phase the project over multiple seasons to spread out costs</li>
          <li>Prioritize structural elements (hardscape) before plants</li>
          <li>Consider lower-cost alternatives for some materials</li>
          <li>
            Focus on low-maintenance, drought-resistant plants to reduce
            long-term costs
          </li>
          <li>
            Get multiple bids from contractors and compare scope carefully
          </li>
          <li>
            Check if your design fee can be credited toward installation if you
            use the same company
          </li>
        </ol>
      </div>
    </div>
  );
}
