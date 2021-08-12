import React from 'react';
import Countdown from './Countdown'
import VRMascot from '../images/vr-mascot.png';


class Register extends React.Component {
    render() {
      return (
          <section className={this.props.className + " h-screen flex flex-auto relative justify-center content-center bg-gradient-to-br from-pink-400 via-blue-700 to-purple-500 p-10"} id={this.props.id}>
            <div className="flex flex-wrap container justify-center content-center mt-10">
              <div className="transform -skew-y-6">
                <div className="text-3xl font-extrabold font-mono p-3 m-3 rounded-lg justify-center items-center animate-bounce " style={{backgroundColor: "#EEC184"}}>
                  <a href="https://www.w3schools.com/" target="_blank">Register now!</a>
                </div>
                <div className="animate-pulse text-2xl text-red-600 font-bold font-mono border-2 border-double p-3">
                  <Countdown />
                </div>
                <div className="text-white">
                  CP: Pepe
                  Email
                  IG
                </div>
              </div>
            
            <img src={VRMascot} className="m-5 ml-0 object-contain md:w-3/8 h-3/4 animate-wiggle" alt="Vr mascot"></img>
            </div>
          </section>
      ); 
    }
}
  
export default Register;