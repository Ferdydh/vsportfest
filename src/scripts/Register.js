import React from 'react';
import Countdown from './Countdown'
import VRMascot from '../images/vr-mascot.png';


class Register extends React.Component {
    render() {
      return (
          <div className={this.props.className + " h-screen flex flex-auto relative justify-center content-center bg-gradient-to-br from-blue-900 via-pink-400 to-purple-500 p-10"} id={this.props.id}>
            <div className="flex flex-wrap container justify-center content-center">
              <div className="transform -skew-y-6">
                <div className="text-3xl p-3 m-3 bg-yellow-300 rounded-lg justify-center items-center font-bold animate-bounce ">
                  <a href="https://www.w3schools.com/" target="_blank">Register now!</a>
                </div>
                <div className="animate-pulse text-xl text-red-700">
                  <Countdown />
                </div>
                <div className="text-white">
                  CP: Pepe
                </div>
              </div>
            
            <img src={VRMascot} className="object-contain md:w-3/8 h-3/4 animate-wiggle" alt="Vr mascot"></img>
            </div>
          </div>
      ); 
    }
}
  
export default Register;