import { useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import Navlink from "../components/Navlink";
import ScrollIntoView from "react-scroll-into-view";

type NavbarProps = {
  className?: string;
};

const navlinkTargets = [
  { description: 'sobre mí', targetId: '#sobre-mi', className: 'sobremi' },
  { description: 'tech stack', targetId: '#tech-stack', className: 'techstack' },
  { description: 'proyectos', targetId: '#proyectos', className: 'proyectos' },
  { description: 'contacto', targetId: '#contacto', className: 'contacto' }
];

function Navbar({ className }: NavbarProps) {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [currentScrollPos, setCurrentScrollPos] = useState(window.pageYOffset);
  const hiddenClass = prevScrollPos >= currentScrollPos ? '' : 'hidden';

  const hideNavbar = () => {
    setCurrentScrollPos(window.pageYOffset);
    setPrevScrollPos(currentScrollPos);
  }
  
  useEffect(() => {
    window.addEventListener('scroll', hideNavbar);
    
    return () => {
      window.removeEventListener('scroll', hideNavbar);
    }
  });

  return (
    <nav id='navbar' className={`navbar ${hiddenClass} ${className}`}>
      <Navlink className='navbar__logo'>aurelio gareca</Navlink>

      <ul className='navbar__list'>
        {
          navlinkTargets.map((navlink, index) =>
            <ListItem key={index} navlink={navlink}>
              <ScrollIntoView selector={navlink.targetId}  scrollOptions={ navlink.className !== 'proyectos' && navlink.className !== 'contacto' ? { block: 'center' } : {}}>
                <Navlink>{navlink.description}</Navlink>
              </ScrollIntoView>
            </ListItem>
          )
        }
      </ul>
    </nav>
  )
}
export default Navbar