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
import Content from './scripts/Content'

function App() {
  return (
    <main className="App">
      <MainWindow />
      {/* The topmost slide gets extra padding due to the first slide*/}

      <Content id="dota" sectionName="Dota" parallaxStrength="300" background="on"></Content>

      <Content id="moleg" sectionName="Mobile Legends" parallaxStrength="-500" background="off"></Content>

      <Pubg id="pubg"></Pubg>

      <Chess id="chess"></Chess>

      <Dance id="dance"></Dance>

      <VirtualRun id="virtualrun"></VirtualRun>

      {/* */}

      <Register id="register" />
      <Sidebar />
      <ScrollToTopBtn />

    </main>
  );
} 

export default App;

