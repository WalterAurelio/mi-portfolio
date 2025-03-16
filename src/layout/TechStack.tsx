import TitleSection from "../components/TitleSection";
import Technologies from "../components/Technologies";
import techstack_icon from '../assets/icons/tech-stack-icon.svg';

const techArr = ['HTML', 'CSS', 'JavaScript', 'Sass', 'React', 'TypeScript', 'Tailwind CSS'];

function TechStack() {
  return (
    <section id="tech-stack" className="techstack">
      <TitleSection icon={techstack_icon}>tech stack</TitleSection>
      <Technologies techArr={techArr} />
    </section>
  )
}
export default TechStack