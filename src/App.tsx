import Pointer from './components/Pointer';
import app_icon from './assets/icons/app_icon.svg';
import check_icon from './assets/icons/check_icon.svg';
import SectionTitle from './components/SectionTitle';
import Tech from './components/Tech';

function App() {
  return (
    <div>
      <Pointer icon={app_icon} />
      <br />
      <SectionTitle>titulo seccion</SectionTitle>
      <br />
      <Tech small>HTML</Tech>
      <br />

    </div>
  )
}
export default App