import { useInView } from "react-intersection-observer";

function Hero() {
  const { inView, ref } = useInView();

  return (
    <section className="hero">
      <h3 className="hero__salute">Hola, soy<br /><span>Aurelio Gareca</span>.</h3>
      <h1 ref={ref} className="role">
        <span className={`role__frontend ${ inView && 'animate' }`}>Frontend</span>
        <span className={`role__developer ${ inView && 'animate' }`}>Developer</span>
      </h1>
    </section>
  )
}
export default Hero