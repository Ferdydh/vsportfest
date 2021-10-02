import './App.css';
import "tailwindcss/tailwind.css"
import Sidebar from './scripts/Sidebar';
import MainWindow from './scripts/MainWindow';
import Register from './scripts/Register'
import ScrollToTopBtn from './scripts/ScrollToTopBtn';
import Template from './scripts/Template';

// DOTA
const textDota =  `DOTA players everywhere gather ‘round and ready your guns! 🖥 🎮 Don‘t miss your chance to compete and have fun with players all across the globe🌎 
‼️SIGN UP NOW‼️
Only 8 slots available!
Registration fee: 20€ / Rp 350.000,- per team 💶😆
`;

const urlDota = "https://docs.google.com/forms/d/e/1FAIpQLSeCVJDz1oebmBpRbeb9aC4zsB0fRkI4M1cITGRmUE0W19q77A/viewform"

const prizeDota = ['1st place: 70% from Prize Pool + Gold Medal', '2nd place : 30% from Prize Pool'];

const footerDota = `For more information, feel free to contact us! 📲
Oscar A.
+49 162 6215433
`

// MOLEG
const textMoleg = `Mobile Legends players everywhere gather ‘round and prepare your ultimate builds! 🎮 Don’t miss your chance to compete and have fun with players all across the globe🌎 
‼️SIGN UP NOW‼️
Only 8 slots available! 
Registration fee: 15€ / Rp 262.500,- per team 💶😆
`;

const prizeMoleg = ['1st place: 70% from Prize Pool + Gold Medal', '2nd place : 30% from Prize Pool'];

const urlMoleg = "https://docs.google.com/forms/d/e/1FAIpQLScRYrvS2gLJPwOqQX4Es3cLrfiU3qorzBR3PRtMvl-9HKmWMw/viewform"

const footerMoleg = `For more information, feel free to contact us! 📲
Farhan I.
+49 176 32927185
`

// PUBG
const textPUBG = `PUBG players everywhere gather ‘round and ready your weapons! 🎮 Don’t miss your chance to compete and have fun with players all across the globe🌎 
‼️SIGN UP NOW‼️
Slot available for 25 Squads!
Registration fee:12€ / Rp 210.000 for each team💶😆
`;

const prizePUBG = ['1st place: 70€ / Rp 1.225.000.- + Gold Medal','2nd place: 35€ / Rp 612.500,-'];

const urlPubg = "https://docs.google.com/forms/d/e/1FAIpQLSddjc5IyeFe_uhzX0VVb_t8E_JrhhEQ9uUMgTgxWg55kVGDww/viewform"

const footerPubg= `For more information, feel free to contact us! 📲

Kemal A.
+49 176 70842626
`

// CHESS
const textChess = `Chess players, come join us!♟ Brace yourself ‘cause the battle of the brains is coming your way! 🧠 
‼️SIGN UP NOW‼️
Only 30 slots available!
Registration fee: 3€ / Rp 52.500,- per person 💶😆
`

const prizeChess = ['1st place: 40€ / Rp 700.000,- + Gold Medal', '2nd place: 20€ / Rp 350.000,- + Silver Medal']

const urlChess = "https://docs.google.com/forms/d/e/1FAIpQLSd3wcW6HhYWDf4_M4arSCy7ZJSpLJtG5cQHuLQJJh6LW8y_3Q/viewform"

const footerChess= `For more information, feel free to contact us! 📲
Jeffrey L.
+49 176 41365528
`

// DANCE
const textDance = `Calling all dancers! 💃🏻 Don’t miss the opportunity to express yourselves and develop your creativity and talent through our DANCE COMPETITION ‼️
‼️SIGN UP NOW‼️
Registration fee: 4€ / Rp 70.000,- per person 💶😆
`;

const prizeDance = ['1st place: 65€ / Rp 1.137.500,- + Gold Medal', '2nd place: 45€ / Rp 787.500,- + Silver Medal']

const urlDance = "https://docs.google.com/forms/d/e/1FAIpQLSdkBAeDrxeLgLYnJ7Lr6wevKaGH87U1VqUimbpVfw89DGyUxw/viewform"

const footerDance = `For more information, feel free to contact us! 📲
Eileen P.
+49 172 1653412
`

// VIRTUAL RUN
const textVirtualRun = `Calling out runners all over the world!🏃🏻‍♂️ Come register yourself for our VIRTUAL CHARITY RUN ‼️ 
In collaboration with Lindungi Hutan🌳 Donation will be redirected to help plant Mangroves in Toli-Toli, Center Sulawesi, Indonesia! 🇮🇩🌏
ONE TICKET = ONE DONATION💚
Registrations will be closed on 07 OCTOBER 2021🗓‼️
Slots: UNLIMITED, OPEN FOR PUBLIC
Registration fee: 3€ / Rp 52.500,- per person 💶😆💚
`;

const prizeVirtualRun = ['Gold medal for each winner'];

const urlRun = "https://docs.google.com/forms/d/e/1FAIpQLScilLNOH6HQuEjP7wqTYkn-eNY-SJ_-uioyIuLDhcjGScvEJw/viewform"

const footerRun = `For more information, feel free to contact us! 📲
Collin / Verren
+49 152 29057428 / +49 159 01992042
`

function App() {
  return (
    <main className="App container w-screen">
      <MainWindow />

      <Template id="dota" wave="wave1" title="DOTA" caption={textDota} prizes={prizeDota} footer={footerDota} backgroundColor="#411582" url={urlDota}></Template>
      <Template id="moleg" wave="wave2" title="Mobile Legends" caption={textMoleg} prizes={prizeMoleg} footer={footerMoleg} backgroundColor="#b43484" url={urlMoleg}></Template>
      <Template id="pubg" wave="wave3" title="PUBG" caption={textPUBG} prizes={prizePUBG} footer={footerPubg} backgroundColor="#312E81" url={urlPubg}></Template>
      <Template id="chess" wave="wave4" title="Chess" caption={textChess} prizes={prizeChess} footer={footerChess} backgroundColor="#831843" url={urlChess}></Template>
      <Template id="dance" wave="wave5" title="Dance" caption={textDance} prizes={prizeDance} footer={footerDance} backgroundColor="#1E40AF" url={urlDance}></Template>
      <Template id="virtualrun" wave="wave6" title="Virtual Run" caption={textVirtualRun} footer={footerRun} prizes={prizeVirtualRun} backgroundColor="#3B82F6" url={urlRun}></Template>

      <Register id="register" />
      <Sidebar className=" z-50"/>
      <ScrollToTopBtn />

    </main>
  );
} 

export default App;

