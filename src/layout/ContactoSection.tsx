import Section from "../components/Section";
import SectionTitlePointer from "../components/SectionTitlePointer";
import arroba_icon from '../assets/icons/arroba_icon.svg';
import email_icon from '../assets/icons/email_icon.svg';
import github_icon from '../assets/icons/github_icon.svg';
import linkedin_icon from '../assets/icons/linkedin_icon.svg';
import Email from "../components/Email";
import SocialNetwork from "../components/SocialNetwork";
import CopyButton from "../components/CopyButton";

function ContactoSection() {
  return (
    <Section id='contacto' className='contactsection'>
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