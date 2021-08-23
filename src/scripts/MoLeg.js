import React from 'react';
import Prizes from './Prizes';
import { Parallax } from 'react-parallax';
import Modal from './Modal';

// media imports for section
import Mascot from '../images/CompressedImages/MASCOT_MOLEG.png';
import ICON from '../images/ml.png';

const products = ['1st place: 50% from Prize Pool + Gold Medal','2nd place: 30% from Prize Pool', '3rd place: 20% dari Prize Pool'];

const prizes = []

const medals = ["🥇", "🥈", "🥉"]

for (let i =0; i < products.length; i++){
  prizes.push(<div>{
    medals[i] + products[i]
    }</div>)
}

const text =  `Gamers everywhere gather ‘round! 🎮 
Don’t miss your chance to compete and have fun with players all across the world 🌎 
so sign up now for our DOTA COMPETITION ‼️
Slots are only available for the first 16 registrants! So be quick and sign your team up for only 15€ / Rp 262.500,- 💶😆
Competition guidelines and registration links are available on our website. Link in bio!
`;


class MoLeg extends React.Component {
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
      <>
      <div className="spacer spacerAspect wave2 relative flex justify-center content-center align-middle">
        <img src={Mascot} className="m-5 object-contain w-3/8 h-3/4" alt="Vr mascot"/>
      </div>
      <section id="moleg" className="blur m-0 p-0 flex align-middle content-center justify-center md:flex-none" style={{backgroundColor: "#b43484"}} >
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
              <div id="molegx" className="transform -skew-y-6 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 text-white select-none neonText">
                Mobile Legends
              </div>
                <Modal   
                title="Mobile Legends" 
                url="https://docs.google.com/forms/d/e/1FAIpQLScRYrvS2gLJPwOqQX4Es3cLrfiU3qorzBR3PRtMvl-9HKmWMw/viewform"
              />
            </div>
          </div>

          {/* RIGHT SIDE OF THE DIV */}
          <div className="md:h-full sm:w-1/2 flex flex-col" id="rightside">
            <div className="md:m-10 md:mt-36">
              <p className="text-base p-4 md:text-lg max-w-md whitespace-normal text-white text-center font-mono bg-gray-300 
                  bg-opacity-30 rounded hover:shadow-md m-10 mb-24 glow-cyan-xl">
                      Gamers everywhere gather ‘round! 🎮 Don’t miss your chance to compete and have fun with players all across the world 🌎
                      so sign up now for our MOBILE LEGENDS COMPETITION ‼️
              </p>
            </div>
            
          </div>
        </section>

      </div>
      </section>
      </>
      
    );
  }
}
  
export default MoLeg;