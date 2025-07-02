import Link from "next/link";
import { ReactNode } from "react";
import Button from "../common/Button";
import { Card, CardFooter, CardHeader } from "./Card";

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
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#dc2626]/10">
            {icon}
          </div>
          <h3 className="text-center text-xl font-semibold">{title}</h3>
          <p className="text-center text-[#71717a]">{description}</p>
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
