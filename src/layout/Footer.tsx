import Description from "../components/Description"
import GoToTopButton from "../components/GoToTopButton"

function Footer() {
  return (
    <footer className='footer'>
      <GoToTopButton className='footer__totop' />
      <Description className='footer__aurelioGareca'>aurelio gareca</Description>
      <Description className='footer__frontendDeveloper'>frontend developer</Description>
    </footer>
  )
}
export default Footer