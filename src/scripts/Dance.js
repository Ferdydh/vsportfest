import React from 'react';
import Prizes from './Prizes';
import { Parallax } from 'react-parallax';
import Modal from './Modal';

// media imports for section
import FG from '../images/CompressedImages/MASCOT_DANCE.png';
import ICON from '../images/dance.png';
import {isMobile} from 'react-device-detect';

class Dance extends React.Component {
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

    return (
      <section id="dance">
        <div className=" bg-purple-900 blur m-0 p-0 flex align-middle content-center justify-center md:flex-none objec">
        <div className="w-full">
        <div className="w-full p-2 mb-30">
          <div className="float-right h-20 w-20 p-4 flex align-middle">
            <img src={ICON} alt="" className="object-contain p-1" />
          </div>
        </div>
        <section className="h-screen container md:py-20 flex flex-col float-left md:flex-row md:ml-20">

          {/* LEFT SIDE OF THE DIV */}
          <div className="md:h-full sm:w-1/2 flex flex-col" id="leftside">
            <div className="m-10 md:m-auto font-bold text-7xl">
              <div id="dancex" className="transform -skew-y-6 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 text-white select-none neonText">
                Dance
              </div>
                <Modal 
                title="Dance" 
                url="https://docs.google.com/forms/d/e/1FAIpQLSdkBAeDrxeLgLYnJ7Lr6wevKaGH87U1VqUimbpVfw89DGyUxw/viewform"
              />
            </div>
          </div>

          {/* LINE THROUGH MIDDLE OF COMPONENT */}
          <div className="flex select-none mr-10 pl-10" id="columnspace">
            <div className=" bg-white w-1 h-full transform skew-x-25">
            </div>
          </div>
          
          {/* RIGHT SIDE OF THE DIV */}
          <div className="md:h-full sm:w-1/2 flex flex-col" id="rightside">
            <div className="md:m-10 md:mt-36">
              <p className="text-base p-4 md:text-lg max-w-md whitespace-normal text-white text-center font-mono bg-gray-300 
                  bg-opacity-30 rounded hover:shadow-md m-10 mb-24 glow-cyan-xl">
                      Calling all dancers! 💃🏻
                   Don’t miss the opportunity to express your creativity and develop your talent through our MODERN DANCE COMPETITION ‼️
              </p>
              <div className=" ml-20 sm:ml-28 mt-6 flex align-middle">
                  <Prizes
                    first="85"
                    second="45"
                  />
              </div>
            </div>
            
          </div>
        </section>

      </div>
      </div>
      </section>
    );
  }
}
  
export default Dance;