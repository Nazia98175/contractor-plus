import { ReactNode } from "react";
import SmoothScroll from "@/components/common/SmoothScroll";
type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <div className="bg-black">
      <SmoothScroll />
      {children}
    </div>
  );
}
