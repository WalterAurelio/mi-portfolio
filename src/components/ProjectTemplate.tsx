import Description from "./Description";
import Icon from "./Icon";
import LiveDemoButton from "./LiveDemoButton";
import github_icon from '../assets/icons/github_icon.svg';
import Technologies from "./Technologies";
import SectionSubtitle from "./SectionSubtitle";

export type Project = {
  name: string;
  image: string;
  description: string;
  technologies: string[];
  demoURL: string;
  repoURL: string;
}

type ProjectTemplateProps = {
  project: Project;
}

function ProjectTemplate({ project }: ProjectTemplateProps) {
  const { name, description, technologies, demoURL, repoURL } = project;

  return (
    <article className='projecttemplate'>

      <div className='projecttemplate__title'>
        <SectionSubtitle>{name}</SectionSubtitle>
        <LiveDemoButton demoURL={demoURL} />
      </div>

      {/* <img className='projecttemplate__image' src={image} alt='project-image' /> */}
      <div className='projecttemplate__image'></div>

      <Description className='projecttemplate__description'>{description}</Description>

      <div className='projecttemplate__technologies'>
        <Technologies techs={technologies} />
        <a className='projecttemplate__repo' href={repoURL} target='_blank'>
          <Icon icon={github_icon} />
        </a>
      </div>

    </article>
  )
}
export default ProjectTemplate