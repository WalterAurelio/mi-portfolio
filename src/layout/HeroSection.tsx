import BigText from "../components/BigText"
import Description from "../components/Description"

function HeroSection() {
  return (
    <section className='hero'>
      <div className='hero__salute'>
        <Description className='holaSoy'>Hola, soy</Description>
        <Description className='aurelioGareca'>Aurelio Gareca<span>.</span></Description>
      </div>
      <div className='hero__role'>
        <BigText>Frontend</BigText>
        <BigText>Developer</BigText>
      </div>
    </section>
  )
}
export default HeroSection