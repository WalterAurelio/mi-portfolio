import { useActiveSectionStore } from "../store/activeSectionStore";
import { useShallow } from "zustand/shallow";
import { PropsWithChildren } from "react";

type Navlink = {
  description: string;
  targetId: string;
  className: string;
};

type ListItemProps = PropsWithChildren<{
  navlink: Navlink;
}>;

function ListItem({ navlink, children }: ListItemProps) {
  const activeSection = useActiveSectionStore(useShallow(state => state.activeSection));
  const activeClass = activeSection === navlink.className ? 'active' : '';

  return (
    <li className={`listitem ${activeClass}`.trimEnd()}>
      {children}
    </li>
  )
}
export default ListItem