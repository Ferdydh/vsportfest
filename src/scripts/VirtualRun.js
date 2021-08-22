import React from 'react';
import { Parallax } from 'react-parallax';
import Modal from './Modal';

// media imports for section
import FG from '../images/CompressedImages/MASCOT_RUN.png';
import {isMobile} from 'react-device-detect';
import Run from '@material-ui/icons/DirectionsRun';

class VirtualRun extends React.Component {
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
    return (
      <section id="virtualrun" className="min-h-screen bg-purple-900 blur flex align-middle content-center justify-center flex-col w-screen">
        <div className="min-h-full p-2 mb-30 h-20 w-screen">
          <div className="float-right h-20 w-20 p-4 flex align-middle content-center justify-center">
            <Run fontSize="large"/>
          </div>
        </div>
        <section className="min-h-screen sm:py-20 flex flex-col float-left sm:flex-row sm:ml-20">

          {/* LEFT SIDE OF THE DIV */}
          <div className="sm:h-full sm:w-1/2 flex flex-col" id="leftside">
            <div className="m-10 md:m-auto font-bold text-7xl">
              <div id="virtualrunx" className="transform -skew-y-6 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 text-white select-none neonText">
                Virtual Run
              </div>
                <Modal title="Virtual Run" />
            </div>
          </div>
          
          {/* RIGHT SIDE OF THE DIV */}
          <div className="h-1/2 sm:w-1/2 flex-col flex select-none mx-10" id="rightside">
            <div className="my-auto sm:ml-12">
              <p className="text-base p-4 mt-5 sm:mt-14 mb-10 sm:text-lg max-w-md whitespace-normal text-white text-center font-mono bg-gray-300 
              bg-opacity-30 rounded hover:shadow-md glow-cyan-xl">
                  Calling out all runners all over the world! 🏃🏻‍♂️ Are you craving to get that amazing runner’s high? 
                  Well here is your chance! Come register yourself for our VIRTUAL RUN COMPETITION ‼️ (OPEN FOR PUBLIC AROUND THE WORLD)
                  More importantly, this VIRTUAL RUN COMPETITION is a CHARITY MARATHON in collaboration with 
                  <a href="https://www.instagram.com/lindungihutan/" className="text-green-400"> @lindungihutan 🌳 </a>
                  in which 100% of the ticket sales will be donated there to SAVE OUR PLANET! 🌏 This means that ONE TICKET = ONE DONATION 💚
              </p>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
  
export default VirtualRun;