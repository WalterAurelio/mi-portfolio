import { PropsWithChildren } from "react"

type SocialNetworkProps = PropsWithChildren<{
  icon: string;
  url: string;
}>;

function SocialNetwork({ icon, children, url }: SocialNetworkProps) {
  const alt = typeof children === 'string' && children.toLowerCase();

  return (
    <div className="socialnetwork">
      <img className="socialnetwork__icon" src={icon} alt={`${alt}-icon`} />
      <a className="socialnetwork__anchor" target="_blank" href={url}>{children}</a>
    </div>
  )
}
export default SocialNetwork