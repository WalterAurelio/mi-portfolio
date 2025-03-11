import { PropsWithChildren } from "react"

type TitleProjectProps = PropsWithChildren<{
  icon: string;
}>

function TitleProject({ icon, children }: TitleProjectProps) {
  return (
    <div className="titleproject">
      <img className="titleproject__icon" src={icon} alt="project-icon" />
      <h5 className="titleproject__body">{children}</h5>
    </div>
  )
}
export default TitleProject