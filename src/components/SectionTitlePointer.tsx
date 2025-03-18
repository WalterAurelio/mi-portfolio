import { PropsWithChildren } from "react";
import SectionTitle from "./SectionTitle";
import Pointer from "./Pointer";

type SectionTitlePointerProps = PropsWithChildren<{
  icon: string;
  invertAlignment?: boolean;
}>;

function SectionTitlePointer({ icon, invertAlignment, children }: SectionTitlePointerProps) {
  const alignmentClass = invertAlignment && 'invertAlignment';
  
  return (
    <div className={`sectiontitlepointer ${alignmentClass}`}>
      <SectionTitle>{children}</SectionTitle>
      <Pointer icon={icon} />
    </div>
  )
}
export default SectionTitlePointer