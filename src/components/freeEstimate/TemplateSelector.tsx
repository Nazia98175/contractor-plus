import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/Tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import Button from "../common/Button";
import { Zap } from "lucide-react";
import { estimateTemplates } from "../common/Helper";
import { Badge } from "../ui/Badge";

interface TemplateSelectorProps {
  onLoadTemplate: (templateId: string) => void;
  onTemplateSelected: () => void;
}

export function TemplateSelector({
  onLoadTemplate,
  onTemplateSelected,
}: TemplateSelectorProps) {
  const [category, setCategory] = useState("all");

  const categories = Array.from(
    new Set(estimateTemplates.map((template) => template.category)),
  );

  const filteredTemplates =
    category === "all"
      ? estimateTemplates
      : estimateTemplates.filter((template) => template.category === category);

  const handleLoadTemplate = (templateId: string) => {
    onLoadTemplate(templateId);
    onTemplateSelected(); // This will trigger the tab switch in the parent component
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Estimate Templates</h2>
        <Tabs value={category} onValueChange={setCategory}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat}>
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTemplates.map((template) => (
          <Card key={template.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{template.title}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </div>
                <Badge variant="secondary">{template.category}</Badge>
              </div>
            </CardHeader>

            <CardContent className="text-sm">
              <p>{template.items.length} line items included</p>
            </CardContent>

            <CardFooter className="bg-muted/20 pt-2">
              <Button
                className="w-full"
                onClick={() => handleLoadTemplate(template.id)}
              >
                Load Template
              </Button>
            </CardFooter>
          </Card>
        ))}

        <Card className="overflow-hidden border-dashed">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Premium Templates
            </CardTitle>
            <CardDescription>
              Access more professional estimate templates
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-sm">
              Get access to our complete library of industry-specific estimate
              templates. Professional templates designed for every trade and
              project type.
            </p>
          </CardContent>

          <CardFooter className="bg-muted/20 pt-2">
            <Button className="w-full">
              <a href="https://my.contractorplus.app/register">
                Create Account
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
