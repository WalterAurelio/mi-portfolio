import { PropsWithChildren } from "react";

export type FontSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

type SectionTitleProps = PropsWithChildren<{
  className?: string;
}>;

function SectionTitle({ className, children }: SectionTitleProps) {
  return (
    <h2 className={`sectiontitle ${className}`}>
      {children}
    </h2>
  )
}
export default SectionTitle