import TitleProject from "./TitleProject";
import LiveDemo from "./LiveDemo";
import Technologies from "./Technologies";
import github_icon from '../assets/icons/github-icon.svg'

export type Project = {
  icon: string;
  name: string;
  images: string[];
  description: string;
  technologies: string[];
  repoURL: string;
}

type TemplateProjectProps = {
  project: Project;
}

function TemplateProject({ project }: TemplateProjectProps) {
  const { icon, name, images, description, technologies, repoURL } = project;

  return (
    <div className="project">
      <div className="project__title">
        <TitleProject icon={icon}>{name}</TitleProject>
        <LiveDemo />
      </div>
      <p className="project__description">
        {
          description
            ? description
            : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero consequat, venenatis eros eget, aliquam lectus. Vivamus nec tortor nec ligula pretium viverra. Donec id sapien sed leo cursus egestas et a tellus. In hac habitasse platea dictumst.'
        }
      </p>
      <div className="project__technologies">
        <Technologies techArr={technologies} />
        <a className="project__repo" href={repoURL}>
          <img src={github_icon} alt="github-icon" />
        </a>
      </div>
    </div>
  )
}
export default TemplateProject