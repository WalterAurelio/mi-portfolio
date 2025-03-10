import TechSingle from "./TechSingle";

const techArray = ['HTML', 'CSS', 'JavaScript', 'Sass', 'React', 'TypeScript', 'Tailwind CSS'];

function TechGroup() {
  return (
    <div className="tech-grid">
      {
        techArray.map((tech, index) =>
          <TechSingle key={index}>{tech}</TechSingle>
        )
      }
    </div>
  )
}
export default TechGroup