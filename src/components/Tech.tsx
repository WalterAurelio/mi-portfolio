import { PropsWithChildren } from "react";
import Description from "./Description";

function Tech({ children }: PropsWithChildren) {
  return (
    <div className='tech'>
      <Description className='tech__description'>
        {children}
      </Description>
    </div>
  )
}
export default Tech