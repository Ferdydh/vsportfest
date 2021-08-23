import React from 'react';
import Modal from './Modal';
import BG from '../images/chessbg.jpg'

// media imports for section
import IRING from '../images/CompressedImages/RINGS/IRING1.png'
import ORING from '../images/CompressedImages/RINGS/ORING1.png'
import Mascot from '../images/CompressedImages/MASCOT_DOTA.png';
import background from '../images/CompressedImages/bgsection/dota2section.jpg'

const products = ['1st place: 70% from Prize Pool + Gold Medal', '2nd place : 30% from Prize Pool'];

const text = `Gamers everywhere gather ‘round! 🎮 
Don’t miss your chance to compete and have fun with players all across the world 🌎 
so sign up now for our DOTA COMPETITION ‼️
Only 8 slots are available! So be quick and sign your team up for only 20€ / Rp 350.000,- 💶😆`;


class Dota extends React.Component {
  MouseOver(event) {
    event.target.style.height = '120%';
    event.target.style.transform = 'rotate(20deg)'
    event.target.style.transition = 'height 0.5s, transform 1s';
  }

  MouseOut(event) {
    event.target.style.height = '100%';
    event.target.style.transform = 'rotate(0deg)'
  }

  render() {
    return (
      <div className="w-screen">
        <div className="spacer spacerAspect wave1 relative flex justify-center content-center align-middle">
          <img src={Mascot} className="m-5 mt-20 object-contain h-1/2" alt="Vr mascot"/>
        </div>

        <section id="dota" className="bg-purple-900 -mb-32 -mt-16 blur flex align-middle content-center justify-center flex-col w-screen" style={{ backgroundColor: "#411582" }}>
          <section className="sm:py-20 flex flex-col float-left sm:flex-row sm:ml-20 z-10">
            {/* LEFT SIDE OF THE DIV */}
            <div className="sm:h-full sm:w-1/2 flex flex-col sm:my-auto" id="leftside">
              <div className="mt-20 sm:m-10 md:m-auto font-bold text-7xl">
                <div className="absolute transform -translate-y-20">
                  <img src={IRING} style={{ "animation": "spin 5s linear infinite", "animation-direction": "normal" }} className="h-80"></img>
                </div>

                <div className="absolute transform -translate-y-20">
                  <img src={ORING} style={{ "animation": "spin 7s linear infinite", "animation-direction": "reverse" }} className="h-80"></img>
                </div>

                <div id="dotax" className="transform -skew-y-6 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 text-white select-none neonText">
                  DOTA
                </div>
                <Modal
                  title="Dota"
                  url="https://docs.google.com/forms/d/e/1FAIpQLSeCVJDz1oebmBpRbeb9aC4zsB0fRkI4M1cITGRmUE0W19q77A/viewform"
                />
              </div>
            </div>
            {/* RIGHT SIDE OF THE DIV */}
            <div className="h-1/2 sm:h-full sm:w-1/2 flex flex-col z-10" id="rightside">
              <div className="md:m-10 md:mt-36">
                <p className="text-base p-4 md:text-lg max-w-md whitespace-normal text-white text-center font-sans bg-gray-300 
                    bg-opacity-30 rounded hover:shadow-md m-10 mb-24 glow-cyan-xl">
                  <div>{text}</div>
                  <hr />
                  <div>Prizes 🏆</div>
                </p>
              </div>
            </div>
          </section>

          <img src={background} className=" absolute h-1/2 z-0 w-full"></img>

        </section>

        <div className="flex-1 flex justify-center" style={{ backgroundColor: "#411582" }}>

        </div>

      </div>
    );
  }
}

export default Dota;