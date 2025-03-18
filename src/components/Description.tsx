import { PropsWithChildren } from "react";

type DescriptionProps = PropsWithChildren<{
  className?: string;
}>;

function Description({ className, children }: DescriptionProps) {  
  return (
    <p className={`description ${className}`}>
      {children}
    </p>
  )
}
export default Description