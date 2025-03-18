import { PropsWithChildren } from "react"
import Icon from "./Icon";
import Description from "./Description";

type SocialNetworkProps = PropsWithChildren<{
  icon: string;
  socialNetworkURL: string;
}>;

function SocialNetwork({ icon, socialNetworkURL, children }: SocialNetworkProps) {
  return (
    <a className='socialnetwork' href={socialNetworkURL} target="_blank">
      <Icon icon={icon} />
      <Description className='socialnetwork__description'>{children}</Description>
    </a>
  )
}
export default SocialNetwork