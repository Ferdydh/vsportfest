import './App.css';
import "tailwindcss/tailwind.css"
import Content from './scripts/Content';
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

function App() {
  return (
    <main className="App">
      <MainWindow />
      {/* The topmost slide gets extra padding due to the first slide*/}

      <MoLeg id="moleg"></MoLeg>

      <Dota id="dota"></Dota>

      <Pubg id="pubg"></Pubg>

      <Dance id="dance"></Dance>

      <VirtualRun id="virtualrun"></VirtualRun>

      <Chess id="chess"></Chess>

      {/* */}

      <Register id="register" />
      <Sidebar />
      <ScrollToTopBtn />

    </main>
  );
} 

export default App;

