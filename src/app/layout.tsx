"use client";
import MainLoader from "@/components/common/MainLoader";
import SmoothScroll from "@/components/common/SmoothScroll";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      {Loading && <MainLoader />}
      <SmoothScroll />
      {children}
    </>
  );
}
