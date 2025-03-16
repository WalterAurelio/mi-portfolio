import TitleSection from "../components/TitleSection";
import CopyButton from "../components/CopyButton";
import SocialNetwork from "../components/SocialNetwork";
import email_img from '../assets/imgs/original/email-img.png';
import github_icon from '../assets/icons/github-icon.svg';
import linkedin_icon from '../assets/icons/linkedin-icon.svg';
import contacto_icon from '../assets/icons/contacto-icon.svg';
import ArrowButton from "../components/ArrowButton";
import arrow_icon from '../assets/icons/arrow-icon.svg';
import { useInView } from "react-intersection-observer";

function Contacto() {
  const { inView, ref } = useInView({
    threshold: 0.2
  });
  const auxClass = !inView ? 'notInView' : '';
  console.log(inView);

  return (
    <section id="contacto" className="contacto">
      <TitleSection icon={contacto_icon}>contacto</TitleSection>
      <div className="contacto__datos">
        {/* <ArrowButton icon={arrow_icon} className={`contacto__arrow ${auxClass} thumbsUp`} /> */}
        <div ref={ref} className="contacto__email">
          <img src={email_img} alt="email" />
        </div>
        <CopyButton />
        <div className="contacto__redes">
          <SocialNetwork icon={github_icon} url="https://github.com/WalterAurelio">GitHub</SocialNetwork>
          <SocialNetwork icon={linkedin_icon} url="https://www.linkedin.com/in/aurelio-gareca/">LinkedIn</SocialNetwork>
        </div>
      </div>
    </section>
  )
}
export default Contacto