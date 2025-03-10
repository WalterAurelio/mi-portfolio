type ProjectTitleProps = {
  icon: string;
  title: string;
}

function ProjectTitle({ icon, title }: ProjectTitleProps) {
  return (
    <div className="project-title-container">
      <div className="icon-container">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <p className="project-title">{title}</p>
    </div>
  )
}
export default ProjectTitle