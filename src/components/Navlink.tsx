import { useShallow } from "zustand/shallow";
import { useActiveSectionStore } from "../store/activeSectionStore";
import Description from "./Description";

function Navlink({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  const activeSection = useActiveSectionStore(useShallow(state => state.activeSection));
  const activeClass = activeSection === children ? 'active' : '';
  
  return (
    <Description className={`navlink ${activeClass} ${className}`} {...props}>
      {children}
    </Description>
  )
}
export default Navlink