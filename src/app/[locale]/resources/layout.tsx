import Providers from "@/components/resourcehub/pages/Provider";

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
