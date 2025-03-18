import Description from "./Description";
import Icon from "./Icon";
import LiveDemoButton from "./LiveDemoButton";
import SectionTitle from "./SectionTitle";
import github_icon from '../assets/icons/github_icon.svg';
import Technologies from "./Technologies";

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
  const { name, image, description, technologies, demoURL, repoURL } = project;

  return (
    <article className='projecttemplate'>
      <div className='projecttemplate__title'>
        <SectionTitle className='title'>{name}</SectionTitle>
        <LiveDemoButton demoURL={demoURL} />
      </div>

      {/* <img className='projecttemplate__image' src={image} alt='project-image' /> */}
      <div className='projecttemplate__image'></div>

      <Description className='projecttemplate__description'>{description}</Description>

      <div className='projecttemplate__technologies'>
        <Technologies techs={technologies} small />
        <a className='projecttemplate__repo' href={repoURL} target='_blank'>
          <Icon icon={github_icon} />
        </a>
      </div>
    </article>
  )
}
export default ProjectTemplate