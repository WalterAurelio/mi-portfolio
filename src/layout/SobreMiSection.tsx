import SectionTitlePointer from "../components/SectionTitlePointer";
import perfil_icon from '../assets/icons/perfil_icon.svg';
import Description from "../components/Description";
import Section from "../components/Section";

function SobreMiSection() {
  return (
    <Section id='sobre-mi' invertAlignment>
      <SectionTitlePointer icon={perfil_icon} invertAlignment>sobre mí</SectionTitlePointer>
      <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales felis ac blandit consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis dui, mollis non ornare fermentum, auctor a ex. Aenean facilisis turpis id ligula fermentum finibus. Sed vitae est malesuada, facilisis tortor vel, varius felis.</Description>
    </Section>
  )
}
export default SobreMiSection