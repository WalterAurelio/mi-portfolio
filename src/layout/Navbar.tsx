import Navlink from "../components/Navlink";
import ScrollIntoView from "react-scroll-into-view";

type NavbarProps = {
  className?: string;
};

const navlinkTargets = [
  { description: 'sobre mí', targetId: '#sobre-mi' },
  { description: 'tech stack', targetId: '#tech-stack' },
  { description: 'proyectos', targetId: '#proyectos' },
  { description: 'contacto', targetId: '#contacto' }
];

function Navbar({ className }: NavbarProps) {
  return (
    <nav className={`navbar ${className}`}>
      <Navlink className='navbar__logo'>aurelio gareca</Navlink>

      <ul className='navbar__list'>
        {
          navlinkTargets.map((navlink, index) =>
            <li key={index}>
              <ScrollIntoView selector={navlink.targetId}>
                <Navlink>{navlink.description}</Navlink>
              </ScrollIntoView>
            </li>
          )
        }
      </ul>
    </nav>
  )
}
export default Navbar