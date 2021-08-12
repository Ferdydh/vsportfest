import React from 'react';
import Countdown from './Countdown'
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import InstagramIcon from '@material-ui/icons/Instagram';
import VRMascot from '../images/vr-mascot.png';


class Register extends React.Component {
    render() {
      return (
          <section className={"h-auto md:h-screen flex flex-auto relative justify-center content-center bg-gradient-to-br from-pink-400 via-blue-700 to-purple-500 p-10"} id={this.props.id}>
            <div className="flex flex-wrap container justify-center mt-10 content-center md:mt-30">
              <div className="transform -skew-y-6 mr-4 max-w-screen-sm">
                <div className="text-5xl font-extrabold font-mono p-3 m-3 rounded-lg justify-center items-center animate-bounce" style={{backgroundColor: "#EEC184"}}>
                  <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer">Register now!</a>
                </div>
                <div className="animate-pulse text-2xl text-red-600 font-bold font-mono border-2 border-double p-3 md:w-96">
                  <Countdown />
                </div>

                <div className="text-white text-xl float-left justify-start text-left m-3 ml-0 flex flex-col">
                  <div>
                    <PersonIcon className="pr-2" />
                    Evan Christopher
                  </div>
                  <a href="mailto:vsportfest@ppi-munich.org">
                    <EmailIcon className="pr-2" />
                    vsportfest@ppi-munich.org
                  </a>
                  <a href="https://www.instagram.com/vsportfest.ppim/" rel="noreferrer" target="_blank">
                    <InstagramIcon className="pr-2" />
                    vsportfest.ppim
                  </a>
                </div>

              </div>
            
            <img src={VRMascot} className="m-5 ml-0 object-contain md:w-3/8 md:h-3/4 animate-wiggle" alt="Vr mascot"></img>
            </div>
          </section>
      ); 
    }
}
  
export default Register;