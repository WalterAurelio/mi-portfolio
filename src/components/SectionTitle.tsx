import { PropsWithChildren } from "react";

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