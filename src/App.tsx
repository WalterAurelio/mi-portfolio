import Navbar from './layout/Navbar';
import HeroSection from './layout/HeroSection';
import SobreMiSection from './layout/SobreMiSection';
import TechStackSection from './layout/TechStackSection';
import ProyectosSection from './layout/ProyectosSection';
import ContactoSection from './layout/ContactoSection';
import Footer from './layout/Footer';

function App() {
  return (
    <div id='topbody' className='body'>
      <Navbar className='body__navbar' />
      <div className='body__content'>
        <div className='body__main'>
          <HeroSection />
          <SobreMiSection />
          <TechStackSection />
          <ProyectosSection />
          <ContactoSection />
        </div>
        <Footer />
      </div>
    </div>
  )
}
export default App