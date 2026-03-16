import { DemoLayout } from "@/components/layout/DemoLayout";

export default function DemoGroupLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <DemoLayout>{children}</DemoLayout>;
}
