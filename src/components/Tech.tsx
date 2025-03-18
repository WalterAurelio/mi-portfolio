import { PropsWithChildren } from "react";

type TechProps = PropsWithChildren<{
  small?: boolean;
}>;

function Tech({ small, children }: TechProps) {
  const isSmall = small && 'tech--sm';
  
  return (
    <div className={`tech ${isSmall}`}>
      <p className='tech__description'>
        {children}
      </p>
    </div>
  )
}
export default Tech