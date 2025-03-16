import { PropsWithChildren } from "react";

type TechProps = PropsWithChildren<{
  small?: boolean;
}>;

function Tech({ small, children }: TechProps) {
  const isSmall = small && 'tech--sm';
  
  return (
    <p className={`tech ${isSmall}`}>
      {children}
    </p>
  )
}
export default Tech