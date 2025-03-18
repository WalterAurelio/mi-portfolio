import Section from "../components/Section";
import SectionTitlePointer from "../components/SectionTitlePointer";
import app_icon from '../assets/icons/app_icon.svg';
import ProjectTemplate, { Project } from "../components/ProjectTemplate";
import { useInView } from "react-intersection-observer";

const myProject: Project = {
  name: 'título proyecto',
  image: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique ex vel turpis dignissim suscipit. Suspendisse vulputate ex id quam gravida, sit amet feugiat nunc molestie.',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  demoURL: '',
  repoURL: ''
};

function ProyectosSection() {
  const { inView, ref } = useInView({ triggerOnce: true, threshold: 0.2 });
  const animateClass = inView && 'animate';

  return (
    <Section ref={ref} id='proyectos' className={`center-from-right ${animateClass}`} invertAlignment>
      <SectionTitlePointer icon={app_icon} invertAlignment>proyectos</SectionTitlePointer>
      <div className='projectsarray'>
        {
          [myProject, myProject].map((project, index) =>
            <ProjectTemplate key={index} project={project} />
          )
        }
      </div>
    </Section>
  )
}
export default ProyectosSection