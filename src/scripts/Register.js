import React from 'react';
import { Parallax } from 'react-parallax';
import BackgroundShape from '../images/shape.png';
import VRMascot from '../images/vr-mascot.png';

class Register extends React.Component {
    render() {
      return (
        <Parallax bgImage={BackgroundShape} className="bg-gradient-to-br from-pink-500 to-blue-200" strength={300}>
          <div className={this.props.className} id={this.props.id}>
                  <div className="flex flex-col h-screen justify-center items-center relative ">
                  <div className="flex w-auto m-5 bg-yellow-300 rounded-lg justify-center items-center">
                      <div className="text-2xl md:text-4xl p-5">
                          <a href="google.com">Register now!</a>
                      </div>
                      
                  <div className="bg-purple-300 text-lg p-1">
                      Frist: date
                  </div>
                  <div>Date</div>

                  </div>
                  <div className="text-xl text-white p-10">Contact person: Pepe julian</div>
                </div>
          </div>
        </Parallax>
        
      ); 
    }
}
  
export default Register;