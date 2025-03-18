import BigText from "../components/BigText";
import Description from "../components/Description";
import { useInView } from "react-intersection-observer";

function HeroSection() {
  const { inView, ref } = useInView();
  const animateClass = inView && 'animate';

  return (
    <section ref={ref} className='hero'>
      <div className='hero__salute'>
        <Description className='hero__holaSoy'>Hola, soy</Description>
        <Description className='hero__aurelioGareca'>Aurelio Gareca<span>.</span></Description>
      </div>
      <div className={`hero__role ${animateClass}`}>
        <BigText>Frontend</BigText>
        <BigText>Developer</BigText>
      </div>
    </section>
  )
}
export default HeroSection