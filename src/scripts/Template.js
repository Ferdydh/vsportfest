import React from 'react';
import Modal from './Modal';
import GP from '../images/gameplay.png';
import { isMobile } from 'react-device-detect';
import IRING from '../images/CompressedImages/RINGS/IRING1.png'
import ORING from '../images/CompressedImages/RINGS/ORING1.png'
import dotabg from '../images/CompressedImages/bgsection/dota2section.jpg'
import molegbg from '../images/CompressedImages/bgsection/molegsection.jpg'

import RegistrationButton from "./RegistrationButton"
import MASCOT_DOTA from '../images/CompressedImages/MASCOT_DOTA.png';
import MASCOT_MOLEG from '../images/CompressedImages/MASCOT_MOLEG.png';


class Template extends React.Component {
  constructor(props){
    super(props);
    const prizesText = []
    const medals = ["🥇", "🥈", "🥉"]

    for (let i =0; i < this.props.prizes.length; i++){
      prizesText.push(<div>{
        medals[i] + this.props.prizes[i]
      }</div>)
    }

    this.state = { prizes : prizesText }

  }

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
    let logo;
    let mascot;
    if (this.props.title === "DOTA") {
      logo = dotabg;
      mascot = MASCOT_DOTA;
    } else if (this.props.title === "Mobile Legends"){
      logo = molegbg;
      mascot = MASCOT_MOLEG;
    }
    
    
    else {
      logo = null;
      mascot = null;
    }
    

    return (
      <div className="w-screen">
        <div>
          <div className={"spacer spacerAspect relative flex justify-center content-center align-middle " + this.props.wave} >
            <img src={mascot} className="m-5 mt-20 object-contain h-1/2" alt="Vr mascot"/>
          </div>
        </div>

        <section id={this.props.id} className="-mb-32 -mt-16 blur flex align-middle content-center justify-center flex-col w-screen" style={{ backgroundColor: this.props.backgroundColor }}>
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

                <div id={this.props.id + "x"} className="transform -skew-y-6 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 text-white select-none neonText">
                  {this.props.title}
                </div>
                <RegistrationButton url={this.props.url} />
              </div>
            </div>
            {/* RIGHT SIDE OF THE DIV */}
            <div className="h-1/2 sm:h-full sm:w-1/2 flex flex-col z-10" id="rightside">
              <div className="md:m-10 md:mt-36">
                <p className="text-base p-4 md:text-lg max-w-md whitespace-normal text-white text-center font-sans bg-gray-300 
                    bg-opacity-30 rounded hover:shadow-md m-10 mb-24 glow-cyan-xl">
                      <div>{this.props.caption}</div>
                      <hr/>
                      <div>Prizes 🏆</div>
                      <div>{this.state.prizes}</div>
                </p>
              </div>
            </div>
          </section>

          <img src={logo} className="absolute h-1/2 z-0 w-full"></img>

        </section>
        <div className="flex-1 flex justify-center" style={{ backgroundColor: this.props.backgroundColor }}>
        </div>
      </div>
    );
  }
}

export default Template;