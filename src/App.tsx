import Navbar from "./components/Navbar"
import ProjectTemplate from "./components/ProjectTemplate"
import About from "./layout/About"
import Hero from "./layout/Hero"
import TechStack from "./layout/TechStack"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <ProjectTemplate />
    </div>
  )
}
export default App