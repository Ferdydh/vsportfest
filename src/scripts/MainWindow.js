import React from 'react';
import logoWhite from '../images/CompressedImages/PPIMunich_White.png';
import logoBlack from '../images/CompressedImages/PPIMunich_Black.png';
import { Link } from "react-scroll";
import LogoLarge from '../images/CompressedImages/VR_SMALL.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import Countdown from './Countdown'
import EmailIcon from '@material-ui/icons/Email';
import WhatsApp from '@material-ui/icons/WhatsApp';
import CHESS_COVER from '../images/CompressedImages/CHESSSMALL.png';
import DANCE_COVER from '../images/CompressedImages/DANCESMALL.png'
import DOTA_COVER from '../images/CompressedImages/DOTASMALL.png'
import MOLEG_COVER from '../images/CompressedImages/MOLEGSMALL.png'
import PUBG_COVER from '../images/CompressedImages/PUBGSMALL.png'
import RUN_COVER from '../images/CompressedImages/RUNSMALL.png'
import {isMobile} from 'react-device-detect';
import ReactPlayer from "react-player";
import pdf from "../E-Booklet.pdf"

import '../index.css' 

export default class MainWindow extends React.Component {
    

    render() {
        return (
            <section id="mainwindow" className="pt-6 pb-20 min-h-screen bg-retro mainwindow w-screen">
                <div className="w-full inline-block">
                    <a href="https://ppi-munich.org/" target="_blank" rel="noreferrer" className="logo float-left ml-8 mt-2 w-20 h-12 hover:bg-gray-50 rounded-md">
                        <img src={logoWhite} alt="logo" className="logowhite w-20 h-12" />
                        <img src={logoBlack} alt="logo" className="logoblack w-20 h-12" />
                    </a>

                    <a href="https://www.instagram.com/vsportfest.ppim/" target="_blank" rel="noreferrer">
                        <InstagramIcon fontSize="large" className="float-right mr-14 mt-2 text-white hover:text-black hover:bg-gray-50 rounded-md"/>
                    </a>
                    <a href="mailto:vsportfest@ppi-munich.org" target="_blank" rel="noreferrer">
                        <EmailIcon fontSize="large" className="float-right mr-3 mt-2 text-white hover:text-black hover:bg-gray-50 rounded-md"/>
                    </a>
                    <a href="#register">
                        <WhatsApp fontSize="large" className="float-right mr-3 mt-2 text-white hover:text-black hover:bg-gray-50 rounded-md"/>
                    </a>
                </div>

                <div className="mt-4 md:-mt-6 flex-1 flex justify-center mr-auto">
                    <img src={LogoLarge} alt="Vsportfest Logo" className="w-3/4 h-3/4 md:w-1/3 sm:w-1/2" />
                </div>

                <div className={"my-16 flex-1 flex justify-center mr-auto text-3xl text-white font-futuristic " + (isMobile? "neonText": "flickeringText")}>
                    Live on <br></br>7 Oct - 10 Oct
                </div>

                <div className="flex-1 flex justify-center mb-10 mx-6">
                    <div className={!isMobile?"w-1/2":"w-screen"}>
                        <div className={"relative mx-2 player-wrapper glow-cyan-xl"}>
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=qGWsNJ2zF4Q"
                                playing={true}
                                className="top-0 left-1/2 transform -translate-x-1/2 absolute"
                                width= "100%"
                                height= "100%"
                                loop="false"
                            />
                        </div>
                    </div>
                </div>

                <div id="mainwindowx" className="flex-wrap flex-row flex justify-center"> 
                    <Link
                            to="dota"
                            smooth={true}
                            duration={500}
                        >
                        <div>
                            <img src={DOTA_COVER} alt="dota" className = "hover:scale-125 transition duration-700 transform w-40 p-4"/>
                            <div className="relative text-2xl font-thin text-white">
                                DOTA
                            </div>
                        </div>
                    </Link>

                    <Link
                        to="moleg"
                        smooth={true}
                        duration={500}
                    >
                        <div>
                            <img src={MOLEG_COVER} alt="moleg" className = "hover:scale-125 transition duration-700 transform w-40 p-4"/>
                            <div className="relative text-2xl font-thin text-white">
                                MOLEG
                            </div>
                        </div>
                    
                    </Link>

                    <Link
                        to="pubg"
                        smooth={true}
                        duration={500}
                    >
                        <div>
                            <img src={PUBG_COVER} alt="pubg" className = "hover:scale-125 transition duration-700 transform w-40 p-4"/>
                            <div className="relative text-2xl font-thin text-white">
                               PUBG
                            </div>
                        </div>
                    </Link>
                    
                    <Link
                        to="chess"
                        smooth={true}
                        duration={500}
                    >
                        <div>
                            <img src={CHESS_COVER} alt="chess" className = "hover:scale-125 transition duration-700 transform w-40 p-4"/>
                            <div className="relative text-2xl font-thin text-white">
                                CHESS
                            </div>
                        </div>
                    </Link>

                    <Link
                        to="dance"
                        smooth={true}
                        duration={500}
                    >
                        <div>
                            <img src={DANCE_COVER} alt="dance" className = "hover:scale-125 transition duration-700 transform w-40 p-4"/>
                            <div className="relative text-2xl font-thin text-white">
                                DANCE
                            </div>
                        </div>
                    </Link>

                    <Link
                        to="virtualrun"
                        smooth={true}
                        duration={500}
                    >
                        <div>
                            <img src={RUN_COVER} alt="virtualrun" className = "hover:scale-125 transition duration-700 transform w-40 p-4"/>
                            <div className="relative text-2xl font-thin text-white">
                                RUN
                            </div>
                        </div>
                    </Link>

                    
                </div>
                    
                <div className="animate-pulse text-3xl p-10 pb-5 text-yellow-300 transform duration-700 font-bold font-mono">
                    <Countdown />
                </div>

                <div className="font-mono text-2xl p-4 flex align-middle neonText text-cyan transform duration-700 hover:scale-110 justify-center content-center">
                    <a href ={pdf} target = "_blank" rel="noreferrer">
                        <div className="mt-1">
                            Learn more about the competitions
                            <span class="material-icons align-middle">
                                chevron_right
                            </span>
                        </div>
                    </a>
                </div>

                {/* asdf */}
                <div className="font-mono text-2xl p-4 flex align-middle neonText text-cyan transform duration-700 hover:scale-110 justify-center content-center">
                    <a href ="https://discord.gg/ty3TdADs" target = "_blank" rel="noreferrer">
                        <div className="mt-1">
                            Looking for a teammate? Click here
                            <span class="material-icons align-middle">
                                chevron_right
                            </span>
                        </div>
                    </a>
                </div>

            </section>
        );
    }
}