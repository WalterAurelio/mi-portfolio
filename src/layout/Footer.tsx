import { useInView } from "react-intersection-observer"
import Description from "../components/Description"
import GoToTopButton from "../components/GoToTopButton"

function Footer() {
  const { inView, ref } = useInView();
  const animateClass = inView && 'animate';

  return (
    <footer className='footer'>
      <GoToTopButton ref={ref} className={`footer__totop ${animateClass}`} />
      <Description className='footer__aurelioGareca'>aurelio gareca</Description>
      <Description className='footer__frontendDeveloper'>frontend developer</Description>
    </footer>
  )
}
export default Footer