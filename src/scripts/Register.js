import React from 'react';
import Countdown from './Countdown'
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import InstagramIcon from '@material-ui/icons/Instagram';
import VRMascot from '../images/CompressedImages/MASCOT_VR.png';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

class Register extends React.Component {
    render() {
      return (
        <>
        <div className="spacer spacerAspect wave7 relative flex justify-center content-center align-middle w-szreen" />
        <div className="h-14 shadow-green sm:shadow-darkGreen" style={{backgroundColor:"#5BCCCA"}} />
          <section className="h-auto md:h-screen flex flex-auto relative justify-center content-center registerSection p-10" id={this.props.id}>
            <div className="flex flex-wrap container justify-center mt-10 content-center sm:mt-30">
              <div className="transform -skew-y-6 mr-4 max-w-screen-md">
                <div className="text-5xl font-extrabold font-mono p-3 m-3 rounded-lg justify-center items-center animate-bounce" style={{backgroundColor: "#EEC184"}}>
                  Register now!
                </div>
                <div id="registerx" className="animate-pulse glow-cyan-md text-2xl text-red-600 font-bold font-mono border-2 border-double p-3 md:w-96 bg-gray-100 
              bg-opacity-20">
                  <Countdown />
                </div>

                <div className="text-white text-xl float-left justify-start text-left m-2 ml-0 flex flex-col">
                  <div>
                  <PersonIcon className="pr-1" />
                    Rachel Lauren
                  </div>
                  {/*link to WA generator : https://postcron.com/en/blog/landings/whatsapp-link-generator/#page-block-he6t7wyxoh*/}
                  <a href="https://api.whatsapp.com/send?phone=4917644547544&text=%5BvSportfest%5D">
                  <WhatsAppIcon className="pr-2" />
                    +49 176 4454 7544
                  </a>
                  <div>
                  <PersonIcon className="pr-1" />
                    Michelle Widjaja
                  </div>
                  {/*link to WA generator : https://postcron.com/en/blog/landings/whatsapp-link-generator/#page-block-he6t7wyxoh*/}
                  <a href="https://api.whatsapp.com/send?phone=491752536466&text=%5BvSportfest%5D">
                  <WhatsAppIcon className="pr-2" />
                    +49 175 2536 466
                  </a>
                  <hr className="my-1"></hr>
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
            
            <img src={VRMascot} className="m-5 ml-0 object-contain sm:w-3/8 md:h-1/2 xl:h-3/4 animate-wiggle" alt="Vr mascot"></img>
            </div>
          </section>
        </>
      ); 
    }
}
  
export default Register;