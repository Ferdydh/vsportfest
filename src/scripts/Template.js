import React from 'react';
import IRING from '../images/CompressedImages/RINGS/IRING1.png'
import ORING from '../images/CompressedImages/RINGS/ORING1.png'
import dotabg from '../images/CompressedImages/bgsection/dota2section.jpg'
import molegbg from '../images/CompressedImages/bgsection/molegsection.jpg'
import pubgbg from '../images/CompressedImages/bgsection/pubgsection.jpg'
import chessbg from '../images/CompressedImages/bgsection/chesssection.jpg'
import dancebg from '../images/CompressedImages/bgsection/dancesection.jpg'
import virtualrunbg from '../images/CompressedImages/bgsection/virtualrunsection.jpg'
import {isMobile} from 'react-device-detect';

import RegistrationButton from "./RegistrationButton"
import MASCOT_DOTA from '../images/CompressedImages/MASCOT_DOTA.png';
import MASCOT_MOLEG from '../images/CompressedImages/MASCOT_MOLEG.png';
import MASCOT_PUBG from '../images/CompressedImages/MASCOT_PUBG.png';
import MASCOT_CHESS from '../images/CompressedImages/MASCOT_CHESS.png';
import MASCOT_DANCE from '../images/CompressedImages/MASCOT_DANCE.png';
import MASCOT_RUN from '../images/CompressedImages/MASCOT_RUN.png';


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

  render() {
    let logo;
    let mascot;
    if (this.props.title === "DOTA") {
      logo = dotabg;
      mascot = MASCOT_DOTA;
    } 
    else if (this.props.title === "Mobile Legends"){
      logo = molegbg;
      mascot = MASCOT_MOLEG;
    }
    else if (this.props.title === "PUBG"){
      logo = pubgbg;
      mascot = MASCOT_PUBG;
    }
    else if (this.props.title === "Chess"){
      logo = chessbg;
      mascot = MASCOT_CHESS;
    }
    else if (this.props.title === "Dance"){
      logo = dancebg;
      mascot = MASCOT_DANCE;
    }
    else if (this.props.title === "Virtual Run"){
      logo = virtualrunbg;
      mascot = MASCOT_RUN;
    }
    
    else {
      logo = null;
      mascot = null;
    }
    
    return (
      <div className="w-screen min-h-screen">
        <div>
          <div className={"spacer spacerAspect relative flex justify-center content-center align-middle " + this.props.wave} >
            <img src={mascot} className="m-5 mt-20 object-contain w-1/2" alt="Vr mascot"/>
          </div>
        </div>

        <section id={this.props.id} className="-mb-32 -mt-16 blur flex align-middle content-center justify-center flex-col w-screen" style={{ backgroundColor: this.props.backgroundColor }}>
          <section className="sm:py-20 flex flex-col float-left sm:flex-row sm:ml-20 z-10">
            {/* LEFT SIDE OF THE DIV */}
            <div className="sm:h-full sm:w-1/2 flex flex-col sm:my-auto" id="leftside">
              <div className="mt-20 sm:m-10 md:m-auto font-bold text-7xl">
                <div className="absolute transform -translate-y-20">
                  <img src={IRING} style={{ "animation": "spin 5s linear infinite", "animation-direction": "normal" }} className="h-80" alt="" />
                </div>

                <div className="absolute transform -translate-y-20">
                  <img src={ORING} style={{ "animation": "spin 7s linear infinite", "animation-direction": "reverse" }} className="h-80" alt="" />
                </div>

                <div id={this.props.id + "x"} className={"transform -skew-y-6 transition duration-500 ease-in-out text-white select-none neonText " + (isMobile?"":"hover:-translate-y-1 hover:scale-110")}>
                  {this.props.title}
                </div>
                <RegistrationButton url={this.props.url} />
              </div>
            </div>
            {/* RIGHT SIDE OF THE DIV */}
            <div className="h-1/2 sm:h-full sm:w-1/2 flex flex-col z-10" id="rightside">
              <div className="md:m-10 md:mt-36">
                <p className="text-base p-4 md:text-lg max-w-md whitespace-normal text-white text-center font-sans bg-gray-700 
                    bg-opacity-30 rounded hover:shadow-md m-10 mb-24 glow-cyan-xl">
                      <div>{this.props.caption}</div>
                      <hr/>
                      <div>Prizes 🏆</div>
                      <div>{this.state.prizes}</div>
                      {(this.props.title === "Dance")? <div>🥇Public’s Favorite: Gold Medal</div>: null}
                      <hr/>
                      <div>{this.props.footer}</div>
                </p>
              </div>
            </div>
          </section>
          {/* background image*/}
          <img src={logo} className="absolute z-0 object-cover h-1/2 sm:h-auto" alt=""></img>
          <div className="absolute h-3/5 z-0 w-full opacity-60" style={{ backgroundColor: this.props.backgroundColor }}></div>

        </section>
        <div className="flex-1 flex justify-center" style={{ backgroundColor: this.props.backgroundColor }}>
        </div>
      </div>
    );
  }
}

export default Template;