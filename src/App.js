import './App.css';
import "tailwindcss/tailwind.css"
import Sidebar from './scripts/Sidebar';
import MainWindow from './scripts/MainWindow';
import Register from './scripts/Register'
import ScrollToTopBtn from './scripts/ScrollToTopBtn';
import Template from './scripts/Template';

// DOTA
const textDota =  `Gamers everywhere gather ‘round! 🎮 
Don’t miss your chance to compete and have fun with players all across the world 🌎 
so sign up now for our DOTA COMPETITION ‼️`;

const urlDota = "https://docs.google.com/forms/d/e/1FAIpQLSeCVJDz1oebmBpRbeb9aC4zsB0fRkI4M1cITGRmUE0W19q77A/viewform"

const prizeDota = ['1st place: 70% from Prize Pool + Gold Medal', '2nd place : 30% from Prize Pool'];

// MOLEG
const textMoleg = `Mobile Legends players everywhere gather ‘round and prepare your ultimate builds! 🎮 Don’t miss your chance to compete and have fun with players all across the globe🌎 
Sign up now for our MOBILE LEGENDS COMPETITION ‼️
Slots are only available for the first 16 registrants! So be quick and sign your team up for only 15€ / Rp 262.500,- 💶😆`;

const prizeMoleg = ['1st place: 50% from Prize Pool + Gold Medal','2nd place: 30% from Prize Pool', '3rd place: 20% dari Prize Pool'];

const urlMoleg = "https://docs.google.com/forms/d/e/1FAIpQLScRYrvS2gLJPwOqQX4Es3cLrfiU3qorzBR3PRtMvl-9HKmWMw/viewform"

// PUBG
const textPUBG = `PUBG players everywhere gather ‘round and ready your weapons! 🎮 Don’t miss your chance to compete and have fun with players all across the globe🌎 so sign up now for our PUBG MOBILE COMPETITION ‼️ 
Slots are available for 25 Squads! So be quick and sign up for only 12€ / Rp 210.000 for each team💶😆`;

const prizePUBG = ['1st place: 70€ / Rp 1.225.000.- + Gold Medal','2nd place: 35€ / Rp 612.500,-'];

const urlPubg = "https://docs.google.com/forms/d/e/1FAIpQLSddjc5IyeFe_uhzX0VVb_t8E_JrhhEQ9uUMgTgxWg55kVGDww/viewform"

// CHESS
const textChess = `Chess players, come join us! ♟ Brace yourself ‘cause the battle of the brains is coming your way! 🧠 
Sign yourself up to compete in our CHESS COMPETITION ‼️
Only 30 slots are available! So be quick and sign up for only 3€ / Rp 52.500,- for each person 💶😆`

const prizeChess = ['1st place: 40€ / Rp 700.000,- + Gold Medal', '2nd place: 20€ / Rp 350.000,- + Silver Medal']

const urlChess = "https://docs.google.com/forms/d/e/1FAIpQLSd3wcW6HhYWDf4_M4arSCy7ZJSpLJtG5cQHuLQJJh6LW8y_3Q/viewform"

// DANCE
const textDance = `Calling all dancers! 💃🏻 Don’t miss the opportunity to express yourselves and develop your creativity and talent through our MODERN DANCE COMPETITION ‼️
So be quick and sign up for only 4€ / Rp 70.000,- for each person 💶😆`;

const prizeDance = ['1st place: 65€ / Rp 1.137.500,- + Gold Medal', '2nd place: 45€ / Rp 787.500,- + Silver Medal']

const urlDance = "https://docs.google.com/forms/d/e/1FAIpQLSdkBAeDrxeLgLYnJ7Lr6wevKaGH87U1VqUimbpVfw89DGyUxw/viewform"

// VIRTUAL RUN
const textVirtualRun = `Calling out runners all over the world! 🏃🏻‍♂️ Are you craving to get that amazing runner’s high? Well here is your chance! Come register yourself for our VIRTUAL RUN COMPETITION ‼️ (OPEN FOR PUBLIC)
More importantly, this running competition is actually a CHARITY MARATHON in collaboration with @lindungihutan ! 🌳 100% of the ticket sales from this run competition will be donated to help them plant more Mangroves in Toli-Toli, Center Sulawesi, Indonesia! 🇮🇩🌏 This means that ONE TICKET = ONE DONATION 💚
Registrations will be closed on 07 October 2021🗓
Our slots are UNLIMITED, so feel free to sign up and donate to HELP SAVE OUR PLANET for only 3€ / Rp 52.500,- each person 💶😆💚
Categories:
Women : 5km & 10km 🏃🏻‍♀️
Men : 6km & 12km 🏃🏻‍♂️
Group of 5 : 15km 🏃🏻
3 winners will be picked from each of the women & men categories, and 1 group (5 winners) from the group category 🥳`;

const prizeVirtualRun = ['Gold medal for each winner'];

const urlRun = "https://docs.google.com/forms/d/e/1FAIpQLScilLNOH6HQuEjP7wqTYkn-eNY-SJ_-uioyIuLDhcjGScvEJw/viewform"

function App() {
  return (
    <main className="App container w-screen">
      <MainWindow />

      <Template id="dota" wave="wave1" title="DOTA" caption={textDota} prizes={prizeDota} backgroundColor="#411582" url={urlDota}></Template>
      <Template id="moleg" wave="wave2" title="Mobile Legends" caption={textMoleg} prizes={prizeMoleg} backgroundColor="#b43484" url={urlMoleg}></Template>
      <Template id="pubg" wave="wave3" title="PUBG" caption={textPUBG} prizes={prizePUBG} backgroundColor="#312E81" url={urlPubg}></Template>
      <Template id="chess" wave="wave4" title="Chess" caption={textChess} prizes={prizeChess} backgroundColor="#831843" url={urlChess}></Template>
      <Template id="dance" wave="wave5" title="Dance" caption={textDance} prizes={prizeDance} backgroundColor="#1E40AF" url={urlDance}></Template>
      <Template id="virtualrun" wave="wave6" title="Virtual Run" caption={textVirtualRun} prizes={prizeVirtualRun} backgroundColor="#3B82F6" url={urlRun}></Template>

      <Register id="register" />
      <Sidebar className=" z-50"/>
      <ScrollToTopBtn />

    </main>
  );
} 

export default App;

