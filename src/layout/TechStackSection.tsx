import SectionTitlePointer from "../components/SectionTitlePointer";
import codigo_icon from '../assets/icons/codigo_icon.svg';
import Technologies from "../components/Technologies";
import Section from "../components/Section";
import { useInView } from "react-intersection-observer";

const techsArr = ['HTML', 'CSS', 'JavaScript', 'Sass', 'React', 'TypeScript', 'Tailwind CSS'];

function TechStackSection() {
  const { inView, ref } = useInView({ triggerOnce: true, threshold: 0.4 });
  const animateClass = inView && 'animate';

  return (
    <Section ref={ref} id='tech-stack' className={`center-from-left ${animateClass}`}>
      <SectionTitlePointer icon={codigo_icon}>tech stack</SectionTitlePointer>
      <Technologies techs={techsArr} />
    </Section>
  )
}
export default TechStackSection