import { PropsWithChildren } from "react";
import { FontSize } from "../types/fontSize";

type SectionTitleProps = PropsWithChildren<{
  fontSize?: FontSize;
}>;

function SectionTitle({ fontSize, children }: SectionTitleProps) {
  const fontSizeClass = fontSize && `sectiontitle--${fontSize}`;
  
  return (
    <h2 className={`sectiontitle ${fontSizeClass}`}>
      {children}
    </h2>
  )
}
export default SectionTitle