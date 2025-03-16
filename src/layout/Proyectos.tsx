import TemplateProject, { Project } from "../components/TemplateProject";
import TitleSection from "../components/TitleSection";
import burger_icon from '../assets/icons/burger-icon.svg';
import proyectos_icon from '../assets/icons/proyectos-icon.svg';

const proyecto: Project = {
  icon: burger_icon,
  name: 'Nombre Proyecto',
  images: [],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero consequat, venenatis eros eget, aliquam lectus. Vivamus nec tortor nec ligula pretium viverra. Donec id sapien sed leo cursus egestas et a tellus. In hac habitasse platea dictumst. Curabitur accumsan in justo non maximus.',
  technologies: ['JavaScript', 'React', 'Sass'],
  repoURL: '#',
  demoURL: '#'
}

function Proyectos() {
  return (
    <section id="proyectos" className="seccionprojects">
      <TitleSection icon={proyectos_icon} invertAlignment>proyectos</TitleSection>
      <div className="projects">
        {
          [proyecto, proyecto].map((p, index) => 
            <TemplateProject key={index} project={p} />
          )
        }
      </div>
    </section>
  )
}
export default Proyectos