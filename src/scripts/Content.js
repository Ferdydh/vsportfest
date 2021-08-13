import React,{useEffect} from 'react';

import Popup from './Popup';
import Prizes from './Prizes';

import Pikachu from '../images/pikachu.jpg';
import VR from '../images/vr.png';
import { Parallax } from 'react-parallax';
import Modal from './Modal';
import MascotDota from '../images/pikachu.jpg';
import FG from '../images/MOLEG.png';
import BG from '../images/DOTAWALLPAPER.jpg';
import ICON from '../images/pubg.png';


class Content extends React.Component {

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

    return (
      <Parallax bgImage={BG} className=" bg-purple-900 blur" strength={-500} bgClassName="opacity-30 blur" blur={{ min: 2, max: 4 }}>
      <Parallax bgImage={FG} strength={300} bgClassName="ml-80 p-60 opacity-80 " blur={{ min: 0, max: 1 }}>
      <div className="float-right h-20 w-20 p-2">
        <img src={ICON} />
      </div>
      <section className="h-screen px-20 md:py-20 flex flex-row " id={this.props.id}>

        {/* LEFT SIDE OF THE DIV */}
        <div className="h-full w-1/2 flex flex-col" id="leftside">
          <div className="m-auto font-bold text-7xl">
            <div className="transform -skew-y-6 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 text-white select-none">
              {this.props.sectionName}
            </div>
              <Modal title={this.props.sectionName} text={this.props.sectionText}/>
          </div>
        </div>

        {/* LINE THROUGH MIDDLE OF COMPONENT */}
        <div className="flex flex-col select-none" id="columnspace">
        <div className="w-1 h-1/6">
          </div>
          <div className=" bg-white w-1 h-full">
          </div>
          <div className=" w-1 h-1/6">
          </div>
        </div>
        
        {/* RIGHT SIDE OF THE DIV */}
        <div className="h-full w-1/2 flex-col flex select-none" id="rightside">
          <div className="my-auto ml-12">
              <Prizes />
          </div>
        </div>
      </section>

      </Parallax>
      </Parallax>
      
    );
  }
}
  
export default Content;