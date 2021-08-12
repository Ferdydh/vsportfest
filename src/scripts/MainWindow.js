import React from 'react';
import logoWhite from '../images/PPIMunich_White.png';
import logoBlack from '../images/PPIMunich_Black.png';
import { Link } from "react-scroll";
import LogoLarge from '../images/vr.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import Countdown from './Countdown'
import EmailIcon from '@material-ui/icons/Email';
import WhatsApp from '@material-ui/icons/WhatsApp';

export default class MainWindow extends React.Component {
    render() {
        return (
            <section id="mainwindow" className="h-screen w-full bg-gradient-to-b from-purple-800 via-blue-900 to-pink-500">
                <div className="w-full inline-block">
                    <a href="https://www.w3schools.com/" target="_blank" className="logo float-left ml-8 mt-2 w-auto h-12 flex hover:bg-gray-50">
                        <img src={logoWhite} alt="logo" className="logowhite" />
                        <img src={logoBlack} alt="logo" className="logoblack" />
                    </a>

                    <a href="https://www.w3schools.com/" target="_blank">
                        <InstagramIcon fontSize="large" className="float-right mr-6 mt-2 text-white hover:text-black hover:bg-gray-50"/>
                    </a>
                    <a href="https://www.w3schools.com/" target="_blank">
                        <EmailIcon fontSize="large" className="float-right mr-2 mt-2 text-white hover:text-black hover:bg-gray-50"/>
                    </a>
                    <a href="https://www.w3schools.com/" target="_blank">
                        <WhatsApp fontSize="large" className="float-right mr-2 mt-2 text-white hover:text-black hover:bg-gray-50"/>
                    </a>
                </div>

                <div className="mt-4 md:-mt-4 flex-1 flex justify-center mr-auto">
                    <img src={LogoLarge} alt="Vsportfest Logo" className="w-3/4 h-3/4 md:w-1/3 sm:w-1/2" />
                </div>

                {/* <div className="mt-8 flex-1 flex justify-center mr-auto">
                    <div className="w-48 bg-yellow-100" >
                        AUG - SEPT
                    </div>
                </div> */}

                <div> 
                    <Link
                        activeClass="active"
                        to="pembukaan"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <button class="bg-gray-50 m-10 hover:bg-blue-500 text-blue-700 font-semibold 
                        hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-24 h-32">
                            1
                        </button>
                    </Link>

                    <Link
                        activeClass="active"
                        to="isi"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <button class="bg-gray-50 m-10 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            2
                        </button>
                    </Link>

                    <Link
                        activeClass="active"
                        to="penutup"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <button class="bg-gray-50 m-10 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            3
                        </button>
                    </Link>
                    
                    <Link
                        activeClass="active"
                        to="register"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <button class="bg-gray-50 m-10 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            4
                        </button>
                    </Link>
                </div>

                <Countdown />

                <div className=" flex-1 flex justify-center mr-auto">
                    <a href="https://www.w3schools.com/" target="_blank" className="text-4xl p-1 mx-5 w-screen mb-5 bg-yellow-300 rounded-lg md:w-1/3">Register now!</a>
                </div>
            </section>
        );
    }
}