import { PropsWithChildren } from "react"

type TitleSectionProps = PropsWithChildren<{
  invertAlignment?: true;
}>

function TitleSection({ invertAlignment, children }: TitleSectionProps) {
  const invert = invertAlignment && 'invertAlignment';

  return (
    <h4 className={`title ${invert}`}>{children}</h4>
  )
}
export default TitleSection