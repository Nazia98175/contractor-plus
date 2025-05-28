"use client";
import MainLoader from "@/components/common/MainLoader";
import SmoothScroll from "@/components/common/SmoothScroll";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4500);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {isLoading && <MainLoader />}
      <SmoothScroll />
      {children}
    </>
  );
}
