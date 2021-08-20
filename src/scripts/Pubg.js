import React from 'react';
import Prizes from './Prizes';
import { Parallax } from 'react-parallax';
import Modal from './Modal';
import {isMobile} from 'react-device-detect';

// media imports for section
import FG from '../images/CompressedImages/MASCOT_PUBG.png';
import ICON from '../images/pubg.png';
import Rules from '../registration/pubg'


class Pubg extends React.Component {

  constructor(props){
    super(props);
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
    var backgroundLink = "/static/media/DOTAWALLPAPER.d92f6470.jpg";
    return (
      <section id="pubg">
        <Parallax 
        bgImage={backgroundLink}
        className=" bg-purple-900 blur m-0 p-0 flex align-middle content-center justify-center md:flex-none" 
        strength={-500} 
        bgClassName="opacity-30 blur" 
        blur={{ min: 2, max: 4 }}
        contentClassName="w-full"
        >
        <Parallax bgImage={FG} bgImageStyle={isMobile ? {position: "absolute", marginTop: "15em"} :
         {objectFit: "contain", maxHeight: "95%", maxWidth:"90%", marginTop: "5em"}} strength={300} bgClassName="opacity-80 "  blur={{ min: 0, max: 0.3 }}>
        <div className="w-full p-2 mb-30">
          <div className="float-right h-20 w-20 p-4 flex align-middle">
            <img src={ICON} className="object-contain p-1" />
          </div>
        </div>
        <section className="h-screen container md:py-20 flex flex-col float-left md:flex-row md:ml-20">

          {/* LEFT SIDE OF THE DIV */}
          <div className="md:h-full sm:w-1/2 flex flex-col" id="leftside">
            <div className="m-10 md:m-auto font-bold text-7xl">
              <div className="transform -skew-y-6 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 text-white select-none">
                PUBG
              </div>
                <Modal 
                title="PUBG" 
                text={<Rules/>} 
                url="https://docs.google.com/forms/d/e/1FAIpQLSddjc5IyeFe_uhzX0VVb_t8E_JrhhEQ9uUMgTgxWg55kVGDww/viewform"
              />
            </div>
          </div>

          {/* LINE THROUGH MIDDLE OF COMPONENT */}
          <div className="flex select-none mr-10 pl-10" id="columnspace">
            <div className=" bg-white w-1 h-full transform skew-x-25">
            </div>
          </div>
          
          {/* RIGHT SIDE OF THE DIV */}
          <div className=" h-64 md:h-full sm:w-1/2 flex-col flex select-none mx-10" id="rightside">
            <div className="my-auto ml-12">
                <Prizes
                  first="80"
                  second="40"
                />
            </div>
          </div>
        </section>

      </Parallax>
      </Parallax>
      </section>
      
      
    );
  }
}
  
export default Pubg;