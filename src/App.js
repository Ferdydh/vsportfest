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


const textDota =  `Gamers everywhere gather ‘round! 🎮 
Don’t miss your chance to compete and have fun with players all across the world 🌎 
so sign up now for our DOTA COMPETITION ‼️`;

const prizeDota = ['1st place: 70% from Prize Pool + Gold Medal', '2nd place : 30% from Prize Pool'];

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

      <Template id="dota" wave="wave1" title="DOTA" caption={textDota} prizes={prizeDota} color=""></Template>
      {/* <Template id="moleg" wave="wave2" picture="" caption="" prizes={[]} color=""></Template>
      <Template id="pubg" wave="wave3" picture="" caption="" prizes={[]} color=""></Template>
      <Template id="chess" wave="wave4" picture="" caption="" prizes={[]} color=""></Template>
      <Template id="dance" wave="wave5" picture="" caption="" prizes={[]} color=""></Template>
      <Template id="virtualrun" wave="wave6" picture="" caption="" prizes={[]} color=""></Template> */}



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

