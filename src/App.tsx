import Navbar from "./components/Navbar"
import Hero from "./layout/Hero"
import TemplateProject, { Project } from "./components/TemplateProject"
import project_icon from './assets/icons/project-icon.svg'
import ImagesProject from "./components/ImagesProject"

const project: Project = {
  icon: project_icon,
  name: 'Nombre Proyecto',
  images: [],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero consequat, venenatis eros eget, aliquam lectus. Vivamus nec tortor nec ligula pretium viverra. Donec id sapien sed leo cursus egestas et a tellus. In hac habitasse platea dictumst.',
  technologies: ['JavaScript', 'Sass', 'React'],
  repoURL: '#'
} 

function App() {
  return (
    <div>
      <br />
      {/* <Navbar />
      <Hero /> */}
      <TemplateProject project={project} />

      <ImagesProject />
    </div>
  )
}
export default App