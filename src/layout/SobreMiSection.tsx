import SectionTitlePointer from "../components/SectionTitlePointer";
import perfil_icon from '../assets/icons/perfil_icon.svg';
import Description from "../components/Description";
import Section from "../components/Section";
import { useInView } from "react-intersection-observer";
import { useActiveSectionStore } from "../store/activeSectionStore";
import { useShallow } from "zustand/shallow";
import { useState } from "react";

function SobreMiSection() {
  const [count, setCount] = useState(0);
  const { activeSection, setActiveSection } = useActiveSectionStore(useShallow(state => ({
    activeSection: state.activeSection,
    setActiveSection: state.setActiveSection
  })));
  const { ref } = useInView({
    threshold: 0.4,
    onChange(inView) {
      if (inView) {
        setCount(prev => prev + 1);
        setActiveSection('sobre mí');
      } else if (activeSection === 'sobre mí') {
        setActiveSection(undefined);
      }
    }
  });
  const animateClass = count >= 1 && 'animate';

  return (
    <Section ref={ref} id='sobre-mi' className={`center-from-right ${animateClass}`} invertAlignment>
      <SectionTitlePointer icon={perfil_icon} invertAlignment>sobre mí</SectionTitlePointer>
      <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales felis ac blandit consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis dui, mollis non ornare fermentum, auctor a ex. Aenean facilisis turpis id ligula fermentum finibus. Sed vitae est malesuada, facilisis tortor vel, varius felis.</Description>
    </Section>
  )
}
export default SobreMiSection