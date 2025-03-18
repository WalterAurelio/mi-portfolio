import SectionTitlePointer from "../components/SectionTitlePointer";
import codigo_icon from '../assets/icons/codigo_icon.svg';
import Technologies from "../components/Technologies";
import Section from "../components/Section";

const techsArr = ['HTML', 'CSS', 'JavaScript', 'Sass', 'React', 'TypeScript', 'Tailwind CSS'];

function TechStackSection() {
  return (
    <Section id='tech-stack'>
      <SectionTitlePointer icon={codigo_icon}>tech stack</SectionTitlePointer>
      <Technologies techs={techsArr} />
    </Section>
  )
}
export default TechStackSection