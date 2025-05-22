"use client";
import { ReactNode, useEffect, useState } from "react";
import SmoothScroll from "@/components/common/SmoothScroll";
type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  const [Loading, setLoading] = useState(true);
  console.log(Loading, "loading");

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
      {Loading && (
        <div className="h-screen w-full bg-red-400 text-green-400 z-[10000]">
          <h2>loading...</h2>
        </div>
      )}
      <SmoothScroll />
      {children}
    </>
  );
}
