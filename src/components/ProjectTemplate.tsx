import ProjectTitle from "./ProjectTitle"
import project_icon from '../assets/icons/project-icon.svg'
import LiveDemoButton from "./LiveDemoButton"
import TechSingle from "./TechSingle"
import ProjectImage from "./ProjectImage"

function ProjectTemplate() {
  return (
    <div className="project-container">
      <div className="project-template-title">
        <ProjectTitle icon={project_icon} title="Nombre Proyecto" />
        <LiveDemoButton />
      </div>
      <div className="project-images">
        <div className="image"><ProjectImage /></div>
        <div className="image"><ProjectImage /></div>
        <div className="image"><ProjectImage /></div>
      </div>
      <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero consequat, venenatis eros eget, aliquam lectus. Vivamus nec tortor nec ligula pretium viverra. Donec id sapien sed leo cursus egestas et a tellus. In hac habitasse platea dictumst.</p>
      <div className="techs-container">
        <TechSingle>JavaScript</TechSingle>
        <TechSingle>Sass</TechSingle>
        <TechSingle>React</TechSingle>
      </div>
    </div>
  )
}
export default ProjectTemplate