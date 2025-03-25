import Section from "../components/Section";
import SectionTitlePointer from "../components/SectionTitlePointer";
import arroba_icon from '../assets/icons/arroba_icon.svg';
// import email_icon from '../assets/icons/email_icon.svg';
import github_icon from '../assets/icons/github_icon.svg';
import linkedin_icon from '../assets/icons/linkedin_icon.svg';
import Email from "../components/Email";
import SocialNetwork from "../components/SocialNetwork";
import CopyButton from "../components/CopyButton";
import { useInView } from "react-intersection-observer";
import { useShallow } from "zustand/shallow";
import { useActiveSectionStore } from "../store/activeSectionStore";
import { useState } from "react";

function ContactoSection() {
  const [count, setCount] = useState(0);
  const setActiveSection = useActiveSectionStore(useShallow(state => state.setActiveSection));
  const { ref } = useInView({
    threshold: 0.4,
    onChange(inView) {
      if (inView) {
        setCount(prev => prev + 1);
        setActiveSection('contacto');
      }
    }
  });
  const animateClass = count >= 1 && 'animate';

  return (
    <Section ref={ref} id='contacto' className={`contactsection center-from-left ${animateClass}`}>
      <SectionTitlePointer icon={arroba_icon}>contacto</SectionTitlePointer>
      <div className='contactsection__info'>
        <div className='contactsection__email'>
          <Email />
          <CopyButton />
        </div>
        <div className='contactsection__networks'>
          <SocialNetwork icon={github_icon} socialNetworkURL='https://github.com/WalterAurelio'>GitHub</SocialNetwork>
          <SocialNetwork icon={linkedin_icon} socialNetworkURL='https://www.linkedin.com/in/aurelio-gareca/'>LinkedIn</SocialNetwork>
        </div>
      </div>
    </Section>
  )
}
export default ContactoSection