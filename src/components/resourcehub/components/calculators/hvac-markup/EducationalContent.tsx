
export function EducationalContent() {
  return (
    <div className="mt-16 prose max-w-none">
      <h2 className="text-2xl font-bold mb-4">HVAC Parts Pricing Guide</h2>
      <p className="text-muted-foreground mb-8">Understanding how to price HVAC parts correctly is essential for maintaining a profitable business while remaining competitive.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Markup vs. Margin</h3>
          <p>It's important to understand the difference between markup and margin. Markup is calculated based on your cost, while margin is calculated on the selling price.</p>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <p className="font-medium mb-1">Markup Formula</p>
            <p className="text-sm text-muted-foreground">Markup = (Selling Price - Cost) / Cost × 100%</p>
            <p className="font-medium mb-1 mt-3">Margin Formula</p>
            <p className="text-sm text-muted-foreground">Margin = (Selling Price - Cost) / Selling Price × 100%</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Typical Industry Markups</h3>
          <p>HVAC contractors typically use markups between 25% and 45% on parts and equipment, depending on several factors:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Part availability and exclusivity</li>
            <li>Local competition and market conditions</li>
            <li>Warranty offered on parts</li>
            <li>Storage and inventory costs</li>
            <li>Emergency vs. planned service</li>
          </ul>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-4">Pricing Strategy Tips</h3>
      <div className="space-y-6">
        <div>
          <h4 className="font-medium text-lg mb-2">Use tiered markup structures</h4>
          <p className="text-muted-foreground">Consider using different markup percentages based on the cost of parts. Higher markups (35-45%) for lower-cost items, and lower markups (20-30%) for expensive equipment.</p>
        </div>
        
        <div>
          <h4 className="font-medium text-lg mb-2">Include acquisition costs</h4>
          <p className="text-muted-foreground">When calculating your part cost, remember to include acquisition costs like shipping, handling, and storage. These are real costs that should be factored into your pricing.</p>
        </div>
        
        <div>
          <h4 className="font-medium text-lg mb-2">Be transparent with customers</h4>
          <p className="text-muted-foreground">While you shouldn't reveal your exact markup, being able to explain your pricing with confidence is important. Customers value transparency and understanding what they're paying for.</p>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mt-8 mb-4">Frequently Asked Questions</h3>
      <div className="space-y-6">
        <div>
          <h4 className="font-medium text-lg mb-2">Should I use the same markup for all parts?</h4>
          <p className="text-muted-foreground">Using a tiered approach is generally more effective than applying the same markup across all parts. Consider using higher markups for common, inexpensive parts and lower markups for expensive equipment.</p>
        </div>
        
        <div>
          <h4 className="font-medium text-lg mb-2">What if my competitors have lower prices?</h4>
          <p className="text-muted-foreground">Don't compete solely on price. Emphasize value, warranty, expertise, and service quality. If you have to match prices, look for ways to reduce your costs or consider package pricing that bundles parts with labor.</p>
        </div>
        
        <div>
          <h4 className="font-medium text-lg mb-2">How should I handle warranty parts?</h4>
          <p className="text-muted-foreground">For manufacturer-covered warranty parts, you typically can't charge for the part itself, but you can charge for labor. Make sure your labor rates are properly calculated to maintain profitability.</p>
        </div>
      </div>
    </div>
  );
}
