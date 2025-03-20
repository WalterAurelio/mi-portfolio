import SectionTitlePointer from "../components/SectionTitlePointer";
import codigo_icon from '../assets/icons/codigo_icon.svg';
import Technologies from "../components/Technologies";
import Section from "../components/Section";
import { useInView } from "react-intersection-observer";
import { useActiveSectionStore } from "../store/activeSectionStore";
import { useShallow } from "zustand/shallow";
import { useEffect, useState } from "react";

const techsArr = ['HTML', 'CSS', 'JavaScript', 'Sass', 'React', 'TypeScript', 'Tailwind CSS'];

function TechStackSection() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [count, setCount] = useState(0);
  const setActiveSection = useActiveSectionStore(useShallow(state => state.setActiveSection));
  const { ref } = useInView({
    threshold: 0.4,
    onChange(inView) {
      if (inView) {
        setCount(prev => prev + 1);
        setActiveSection('techstack');
      }
    }
  });
  const animateClass = count >= 1 && 'animate';

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
      });
    }
  }, []);

  return (
    <Section ref={ref} id='tech-stack' className={`center-from-left ${animateClass}`}>
      <SectionTitlePointer icon={codigo_icon}>tech stack</SectionTitlePointer>
      <Technologies techs={techsArr} small={windowWidth < 768} />
    </Section>
  )
}
export default TechStackSection