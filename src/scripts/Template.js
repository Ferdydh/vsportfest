import React from 'react';
import Prizes from './Prizes';
import { Parallax } from 'react-parallax';
import Modal from './Modal';
import RegistrationButton from './RegistrationButton'; 

// media imports for section
import FG from '../images/CompressedImages/MASCOT_MOLEG.png';
import ICON from '../images/ml.png';
import {isMobile} from 'react-device-detect';

class Template extends React.Component {
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

          <div className="w-full bg-green-500 ">
            <div className="flex-1 flex justify-end mr-auto">
              <RegistrationButton 
                title="Dance" 
                url="https://docs.google.com/forms/d/e/1FAIpQLSdkBAeDrxeLgLYnJ7Lr6wevKaGH87U1VqUimbpVfw89DGyUxw/viewform"
              />
            </div>

            WUII
          </div>

          <div className="w-full flex align-middle justify-center flex-col">
            <div className="font-white text-white text-center text-7xl font-bold z-10 ">
              MOBILE LEGENDS
            </div>
            <div className="flex flex-row align-middle justify-center z-10">
            <img src={ICON} className=""></img>
            </div>
          </div>

          <div className="w-full bg-black ">
            HELLO
          </div>

        </div>

        <div className=" h-1/4 bg-transparent ">
          {/* BOTTOM BORDER */}
        </div>

        <img src={ICON} className="absolute left-0 right-0 ml-auto mr-auto w-3/5 z-0" style={{"animation":"spin 5s linear infinite","animation-direction": "normal"}}></img>
        <img src={ICON} className="absolute left-0 right-0 ml-auto mr-auto w-3/5 z-0" style={{"animation":"spin 3s linear infinite","animation-direction": "normal"}}></img>

      </section>
    );
  }
}
  
export default Template;