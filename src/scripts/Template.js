import React from 'react';
import Prizes from './Prizes';
import { Parallax } from 'react-parallax';
import Modal from './Modal';
import RegistrationButton from './RegistrationButton'; 

// media imports for section
import FG from '../images/CompressedImages/MASCOT_MOLEG.png';
import ICON from '../images/ml.png';
import {isMobile} from 'react-device-detect';
import IRING from '../images/CompressedImages/RINGS/IRING1.png'
import ORING from '../images/CompressedImages/RINGS/ORING1.png'
import MASCOT from '../images/CompressedImages/MASCOT_PUBG.png'

const text =  `Gamers everywhere gather ‘round! 🎮 
Don’t miss your chance to compete and have fun with players all across the world 🌎 
so sign up now for our DOTA COMPETITION ‼️`;

class Template extends React.Component {
  constructor(props){
    super(props);
    // this.state.text = `Gamers everywhere gather ‘round! 🎮 
    // Don’t miss your chance to compete and have fun with players all across the world 🌎 
    // so sign up now for our DOTA COMPETITION ‼️`;
  }

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
      <section id="Template" className=" bg-purple-900 m-0 p-0 align-middle content-center justify-center h-screen w-screen flex flex-col" >
        <div className=" h-1/4 bg-transparent ">
          {/* TOP BORDER */}
        </div>

        <div className=" h-2/4 w-screen flex flex-row">

          <div className="w-full z-10">
            <div className="flex-1 flex justify-end mr-auto">
              <RegistrationButton 
                title="Dance" 
                url="https://docs.google.com/forms/d/e/1FAIpQLSdkBAeDrxeLgLYnJ7Lr6wevKaGH87U1VqUimbpVfw89DGyUxw/viewform"
              />
            </div>

            <div className="h-1/2 sm:h-full flex flex-col z-10">
              <div className="z-10">
                <p className="text-base p-4 md:text-lg whitespace-normal text-white text-center font-sans bg-gray-300 
                    bg-opacity-30 rounded hover:shadow-md m-10 mb-24 glow-cyan-xl z-20">
                      Registration Fee: 69 €
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex align-middle justify-center flex-col">
            <div className="font-white text-white text-center text-7xl font-bold z-10 ">
            <img src={ICON} className=""></img>
            </div>
            <div className="flex flex-row align-middle justify-center z-10">
            <img src={MASCOT} className="h-40"></img>
            </div>
            <div>
            <div className="absolute w-1/3 text-white z-20 text-2xl font-thin font-sans select-none">
            `Gamers everywhere gather ‘round! 🎮 
    Don’t miss your chance to compete and have fun with players all across the world 🌎 
    so sign up now for our DOTA COMPETITION ‼️
            </div>
            </div>

          </div>

          <div className="w-full bg-black ">
            HELLO
          </div>

        </div>

        <div className=" h-1/4 bg-transparent ">
          {/* BOTTOM BORDER */}
        </div>

        <img src={IRING} className="absolute left-0 right-0 ml-auto mr-auto w-3/5 z-0" style={{"animation":"spin 100s linear infinite","animation-direction": "normal"}}></img>
        <img src={ORING} className="absolute left-0 right-0 ml-auto mr-auto w-3/5 z-0" style={{"animation":"spin 4s linear infinite","animation-direction": "reverse"}}></img>

      </section>
    );
  }
}
  
export default Template;