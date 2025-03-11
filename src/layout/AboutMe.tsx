import TitleSection from "../components/TitleSection"

function AboutMe() {
  return (
    <section className="about">
      <TitleSection invertAlignment>sobre mí</TitleSection>
      <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero consequat, venenatis eros eget, aliquam lectus. Vivamus nec tortor nec ligula pretium viverra. Donec id sapien sed leo cursus egestas et a tellus. In hac habitasse platea dictumst. Curabitur accumsan in justo non maximus.</p>
    </section>
  )
}
export default AboutMe