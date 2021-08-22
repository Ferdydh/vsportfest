import React from 'react';
import Prizes from './Prizes';
import { Parallax } from 'react-parallax';
import Modal from './Modal';

// media imports for section
import FG from '../images/CompressedImages/MASCOT_DOTA.png';
import ICON from '../images/dota.png';
import {isMobile} from 'react-device-detect';
import IRING from '../images/CompressedImages/RINGS/IRING1.png'
import ORING from '../images/CompressedImages/RINGS/ORING1.png'

class Dota extends React.Component {
  MouseOver(event) {
    event.target.style.height = '120%';
    event.target.style.transform = 'rotate(20deg)'
    event.target.style.transition = 'height 0.5s, transform 1s';
  }

  MouseOut(event){
    event.target.style.height = '100%';
    event.target.style.transform = 'rotate(0deg)'
  }

  render() {
    var backgroundLink = "/static/media/DOTAWALLPAPER.d92f6470.jpg";
    const text = `Gamers everywhere gather ‘round! 🎮 
    Don’t miss your chance to compete and have fun with players all across the world 🌎 
    so sign up now for our DOTA COMPETITION ‼️`;

    return (
      <div>
        <div className="spacer spacerAspect wave1"></div>
        <section id="dota" className="min-h-screen blur flex align-middle flex-col w-screen"
        style={{backgroundColor: "#411582"}}>
          <div className="min-h-full p-2 mb-30 h-20 w-screen">
            <div className="float-right h-20 w-20 p-4 flex align-middle content-center justify-center">
              <img src={ICON} className="object-contain p-1" alt="icon"/>
            </div>
            <section className="min-h-screen sm:py-20 flex flex-col float-left sm:flex-row sm:ml-20">

            {/* LEFT SIDE OF THE DIV */}
            <div className="sm:h-full sm:w-1/2 flex flex-col" id="leftside">
              <div className="m-10 md:m-auto font-bold text-7xl">
                <div className="absolute transform -translate-y-20">
                  <img src={IRING} style={{"animation":"spin 5s linear infinite","animation-direction": "normal"}}></img>
                </div>

                <div className="absolute transform -translate-y-20">
                  <img src={ORING} style={{"animation":"spin 7s linear infinite","animation-direction": "reverse"}}></img>
                </div>

                <div id="dotax" className="neonText transform -skew-y-6 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 text-white select-none">
                  DOTA
                </div>
                  <Modal 
                    title="Dota" 
                    url="https://docs.google.com/forms/d/e/1FAIpQLSeCVJDz1oebmBpRbeb9aC4zsB0fRkI4M1cITGRmUE0W19q77A/viewform"
                  />
              </div>
            </div>
            {/* RIGHT SIDE OF THE DIV */}
            <div className="h-1/2 md:h-full sm:w-1/2 flex flex-col" id="rightside">
              <div className="md:m-10 md:mt-36">
                <p className="text-base p-4 md:text-lg max-w-md whitespace-normal text-white text-center font-mono bg-gray-300 
                    bg-opacity-30 rounded hover:shadow-md m-10 mb-24 glow-cyan-xl">
                        Gamers everywhere gather ‘round! 🎮 Don’t miss your chance to compete and have fun with players all across the world 🌎 so sign up now for our DOTA COMPETITION‼️
                </p>
                <div className=" ml-20 sm:ml-28 mt-6 flex align-middle">
                    <Prizes
                      first="80"
                    />
                </div>
              </div>
            </div>
           </section>
          </div>
        </section>  
      </div>
    );
  }
}
  
export default Dota;