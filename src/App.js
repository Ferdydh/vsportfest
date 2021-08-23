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

const urlDota = "https://docs.google.com/forms/d/e/1FAIpQLSeCVJDz1oebmBpRbeb9aC4zsB0fRkI4M1cITGRmUE0W19q77A/viewform"

const prizeDota = ['1st place: 70% from Prize Pool + Gold Medal', '2nd place : 30% from Prize Pool'];



const urlMoleg = "https://docs.google.com/forms/d/e/1FAIpQLScRYrvS2gLJPwOqQX4Es3cLrfiU3qorzBR3PRtMvl-9HKmWMw/viewform"
/*
prices
reg
caption
*/

function App() {

  const textMolegTemporary =  `Gamers everywhere gather ‘round! 🎮 
Don’t miss your chance to compete and have fun with players all across the world 🌎 
so sign up now for our DOTA COMPETITION ‼️
Slots are only available for the first 16 registrants! So be quick and sign your team up for only 15€ / Rp 262.500,- 💶😆
Competition guidelines and registration links are available on our website. Link in bio!
`;

  return (
    <main className="App">
      <MainWindow />

      {/* <Template id="Template"></Template> */}

      <Template id="dota" wave="wave1" title="DOTA" caption={textDota} prizes={prizeDota} backgroundColor="#411582" url={urlDota}></Template>
      <Template id="moleg" wave="wave2" title="Mobile Legends" caption={textMolegTemporary} prizes={prizeDota} backgroundColor="#b43484" url={urlMoleg}></Template>
      {/* <Template id="pubg" wave="wave3" picture="" caption="" prizes={[]} color=""></Template>
      <Template id="chess" wave="wave4" picture="" caption="" prizes={[]} color=""></Template>
      <Template id="dance" wave="wave5" picture="" caption="" prizes={[]} color=""></Template>
      <Template id="virtualrun" wave="wave6" picture="" caption="" prizes={[]} color=""></Template> */}

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

