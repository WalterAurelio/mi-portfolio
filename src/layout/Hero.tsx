import IconNLink from "../components/IconNLink"
import github_icon from '../assets/icons/github-icon.png'
import linkedin_icon from '../assets/icons/linkedin-icon.png'

function Hero() {
  return (
    <section className="hero-section">
      <div className="salute-container">
        <h3 className="salute-text">Hola, soy<span>.</span><br /><span>Aurelio Gareca</span>.</h3>
        <div className="social-container">
          <IconNLink icon={github_icon} text="GitHub" />
          <IconNLink icon={linkedin_icon} text="LinkedIn" />
        </div>
      </div>
      <h1 className="main-text">
        <span>Frontend</span>
        <span>Developer</span>
      </h1>
    </section>
  )
}
export default Hero