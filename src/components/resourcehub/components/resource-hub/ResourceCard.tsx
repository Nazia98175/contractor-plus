import { ReactNode } from "react";
import { Card, CardFooter, CardHeader } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

interface ResourceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  buttonText: string;
}

export function ResourceCard({
  title,
  description,
  icon,
  link,
  buttonText,
}: ResourceCardProps) {
  return (
    <Card className="hover-lift flex h-full flex-col">
      <CardHeader className="flex-grow">
        <div className="flex flex-col gap-4">
          <div className="bg-primary/10 mx-auto flex h-20 w-20 items-center justify-center rounded-full">
            {icon}
          </div>
          <h3 className="text-center text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground text-center">{description}</p>
        </div>
      </CardHeader>
      <CardFooter>
        <Link href={link} className="w-full">
          <Button className="w-full">{buttonText}</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
