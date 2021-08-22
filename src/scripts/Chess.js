import React from 'react';
import Prizes from './Prizes';
import { Parallax } from 'react-parallax';
import Modal from './Modal';
import BG from '../images/chessbg.jpg'

// media imports for section
import FG from '../images/CompressedImages/MASCOT_CHESS.png';
import ICON from '../images/chess.png';
import { isMobile } from 'react-device-detect';

class Chess extends React.Component {
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
      <section id="chess" className="bg-pink-900 blur m-0 p-0 flex align-middle content-center justify-center md:flex-none w-screen">
        <div className="w-full">
          <div className="w-full p-2 mb-30">
            <div className="float-right h-20 w-20 p-4 flex align-middle content-center justify-center">
              <img src={ICON} alt="" className="object-contain p-1" />
            </div>
          </div>
          <section className="h-screen container md:py-20 flex flex-col float-left md:flex-row md:ml-20">

            {/* LEFT SIDE OF THE DIV */}
            <div className="md:h-full sm:w-1/2 flex flex-col" id="leftside">
              <div className="m-10 md:m-auto font-bold text-7xl">
                <div id="chessx" className="transform -skew-y-6 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 text-white select-none neonText">
                  Chess
                </div>
                <Modal
                  title="Chess"
                  url="https://docs.google.com/forms/d/e/1FAIpQLSd3wcW6HhYWDf4_M4arSCy7ZJSpLJtG5cQHuLQJJh6LW8y_3Q/viewform"
                />
              </div>
            </div>

            {/* LINE THROUGH MIDDLE OF COMPONENT */}
            <div className="flex select-none mr-10 pl-10" id="columnspace">
              <div className=" hidden w-1 h-full transform">
              </div>
            </div>

            {/* RIGHT SIDE OF THE DIV */}
            <div className="md:h-full sm:w-1/2 flex flex-col" id="rightside">
              <div className="md:m-10 md:mt-36">
                <p className="text-base p-4 md:text-lg max-w-md whitespace-normal text-white font-bold text-center font-evan bg-black opacity-60 hover:shadow-md m-10 mb-24 glow-cyan-xl">
                  Chess players, come join us! ♟ Brace yourself ‘cause the battle of the brains is coming your way!
                  🧠 Sign yourself up to compete in our CHESS COMPETITION ‼️
                </p>
                <div className=" ml-20 sm:ml-28 mt-6 flex align-middle">
                </div>
              </div>

            </div>
          </section>
        </div>
      </section >
    );
  }
}

export default Chess;