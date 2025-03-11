import { PropsWithChildren } from "react"

function Tech({ isSmall, children }: PropsWithChildren<{ isSmall?: true }>) {
  const smallVariant = isSmall && 'tech--small';
  
  return (
    <p className={`tech ${smallVariant}`}>{children}</p>
  )
}
export default Tech