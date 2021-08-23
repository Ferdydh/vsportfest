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

const textMoleg = `Mobile Legends players everywhere gather ‘round and prepare your ultimate builds! 🎮 Don’t miss your chance to compete and have fun with players all across the globe🌎 
Sign up now for our MOBILE LEGENDS COMPETITION ‼️
Slots are only available for the first 16 registrants! So be quick and sign your team up for only 15€ / Rp 262.500,- 💶😆`;

const prizeMoleg = ['1st place: 50% from Prize Pool + Gold Medal','2nd place: 30% from Prize Pool', '3rd place: 20% dari Prize Pool'];

const textPUBG = `PUBG players everywhere gather ‘round and ready your weapons! 🎮 Don’t miss your chance to compete and have fun with players all across the globe🌎 so sign up now for our PUBG MOBILE COMPETITION ‼️ 
Slots are available for 25 Squads! So be quick and sign up for only 12€ / Rp 210.000 for each team💶😆`;

const prizePUBG = ['1st place: 70€ / Rp 1.225.000.- + Gold Medal','2nd place: 35€ / Rp 612.500,-'];

const textChess = `Chess players, come join us! ♟ Brace yourself ‘cause the battle of the brains is coming your way! 🧠 
Sign yourself up to compete in our CHESS COMPETITION ‼️
Only 30 slots are available! So be quick and sign up for only 3€ / Rp 52.500,- for each person 💶😆`

const prizeChess = ['1st place: 40€ / Rp 700.000,- + Gold Medal', '2nd place: 20€ / Rp 350.000,- + Silver Medal 🥈']

const textDance = `Calling all dancers! 💃🏻 Don’t miss the opportunity to express yourselves and develop your creativity and talent through our MODERN DANCE COMPETITION ‼️
So be quick and sign up for only 4€ / Rp 70.000,- for each person 💶😆`;

const prizeDance = ['1st place: 65€ / Rp 1.137.500,- + Gold Medal', '2nd place: 45€ / Rp 787.500,- + Silver Medal']

const textVirtualRun = `Calling out runners all over the world! 🏃🏻‍♂️ Are you craving to get that amazing runner’s high? Well here is your chance! Come register yourself for our VIRTUAL RUN COMPETITION ‼️ (OPEN FOR PUBLIC)
More importantly, this running competition is actually a CHARITY MARATHON in collaboration with @lindungihutan ! 🌳 100% of the ticket sales from this run competition will be donated to help them plant more Mangroves in Toli-Toli, Center Sulawesi, Indonesia! 🇮🇩🌏 This means that ONE TICKET = ONE DONATION 💚
Registrations will be closed on 07 October 2021🗓
Our slots are UNLIMITED, so feel free to sign up and donate to HELP SAVE OUR PLANET for only 3€ / Rp 52.500,- each person 💶😆💚
Categories:
Women : 5km & 10km 🏃🏻‍♀️
Men : 6km & 12km 🏃🏻‍♂️
Group of 5 : 15km 🏃🏻
3 winners will be picked from each of the women & men categories, and 1 group (5 winners) from the group category 🥳`;

const prizeVirtualRun = ['Gold medal for each winner '];


const textMoleg =  `Gamers everywhere gather ‘round! 🎮 
Don’t miss your chance to compete and have fun with players all across the world 🌎 
so sign up now for our DOTA COMPETITION ‼️
Slots are only available for the first 16 registrants! So be quick and sign your team up for only 15€ / Rp 262.500,- 💶😆
Competition guidelines and registration links are available on our website. Link in bio!
`;

const urlMoleg = "https://docs.google.com/forms/d/e/1FAIpQLScRYrvS2gLJPwOqQX4Es3cLrfiU3qorzBR3PRtMvl-9HKmWMw/viewform"





const textPubg =  `Gamers everywhere gather ‘round! 🎮 Don’t miss your chance to compete and have fun with players all across the world 
🌎 so sign up now for our PUBG MOBILE COMPETITION ‼️
Slots are available for 25 Squads! So be quick and sign up for only 12€ / Rp 210.000 for each team💶😆
`;

const urlPubg = "https://docs.google.com/forms/d/e/1FAIpQLSddjc5IyeFe_uhzX0VVb_t8E_JrhhEQ9uUMgTgxWg55kVGDww/viewform"

// .bg-indigo-900 {
//   --tw-bg-opacity: 1;
//   background-color: rgba(49, 46, 129, var(--tw-bg-opacity));
// }



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

      <Template id="dota" wave="wave1" title="DOTA" caption={textDota} prizes={prizeDota} backgroundColor="#411582" url={urlDota}></Template>
      <Template id="moleg" wave="wave2" title="Mobile Legends" caption={textMoleg} prizes={prizeDota} backgroundColor="#b43484" url={urlMoleg}></Template>
      <Template id="pubg" wave="wave3" title="PUBG" caption={textPubg} prizes={prizeDota} backgroundColor="#312E81" url={urlPubg}></Template>
      {/* <Template id="chess" wave="wave4" picture="" caption="" prizes={[]} color=""></Template>
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

