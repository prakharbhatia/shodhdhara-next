import type { ReactNode } from "react";

type BrandGradientSectionProps = {
  children: ReactNode;
  className?: string;
};

export default function BrandGradientSection({
  children,
  className = "",
}: BrandGradientSectionProps) {
  return <section className={`bg-brand-gradient text-black ${className}`}>{children}</section>;
}
