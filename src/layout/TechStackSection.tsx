import SectionTitlePointer from "../components/SectionTitlePointer";
import codigo_icon from '../assets/icons/codigo_icon.svg';
import Technologies from "../components/Technologies";
import Section from "../components/Section";
import { useInView } from "react-intersection-observer";
import { useActiveSectionStore } from "../store/activeSectionStore";
import { useShallow } from "zustand/shallow";
import { useState } from "react";

const techsArr = ['HTML', 'CSS', 'JavaScript', 'Figma', 'Sass', 'React', 'Zustand', 'TypeScript', 'Tailwind CSS'];

function TechStackSection() {
  const [count, setCount] = useState(0);
  const setActiveSection = useActiveSectionStore(useShallow(state => state.setActiveSection));
  const { ref } = useInView({
    threshold: 0.4,
    onChange(inView) {
      if (inView) {
        setCount(prev => prev + 1);
        setActiveSection('tech stack');
      }
    }
  });
  const animateClass = count >= 1 && 'animate';

  return (
    <Section ref={ref} id='tech-stack' className={`center-from-left ${animateClass}`}>
      <SectionTitlePointer icon={codigo_icon}>tech stack</SectionTitlePointer>
      <Technologies techs={techsArr} />
    </Section>
  )
}
export default TechStackSection