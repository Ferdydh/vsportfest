import './App.css';
import "tailwindcss/tailwind.css"
import Sidebar from './scripts/Sidebar';
import MainWindow from './scripts/MainWindow';
import Register from './scripts/Register'
import ScrollToTopBtn from './scripts/ScrollToTopBtn';
import MoLeg from './scripts/MoLeg';
import Dota from './scripts/Dota'
import Pubg from './scripts/Pubg'
import Dance from './scripts/Dance'
import VirtualRun from './scripts/VirtualRun';
import Chess from './scripts/Chess';
import Template from './scripts/Template';

/*
prices
reg
caption
*/

function App() {
  return (
    <main className="App">
      <MainWindow />

      {/* <Template id="Template"></Template> */}

      <Dota id="dota" sectionName="Dota" parallaxStrength="300" background="on" />

      <MoLeg id="moleg" sectionName="Mobile Legends" parallaxStrength="-500" background="off" />

      <Pubg id="pubg" sectionName="Pubg" parallaxStrength="300" background="on"></Pubg>

      <Chess id="chess" sectionName="Chess" parallaxStrength="-500" background="off"></Chess>

      <Dance id="dance" sectionName="Dance" parallaxStrength="300" background="on"></Dance>

      <VirtualRun id="virtualrun" sectionName="Virtual Run" parallaxStrength="-500" background="off"></VirtualRun>

      <Register id="register" />
      <Sidebar />
      <ScrollToTopBtn />

    </main>
  );
} 

export default App;

