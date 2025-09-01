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
    <Card className="flex h-full flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
      <CardHeader className="flex-grow">
        <div className="flex flex-col gap-4">
          <div className="bg-coldGrey/10 mx-auto flex h-20 w-20 items-center justify-center rounded-full">
            {icon}
          </div>
          <h3 className="text-center text-xl font-semibold">{title}</h3>
          <p className="text-aliceBlue text-center">{description}</p>
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
