import React from 'react';
import logoWhite from '../images/PPIMunich_White.png';
import logoBlack from '../images/PPIMunich_Black.png';
import { Link } from "react-scroll";
import LogoLarge from '../images/vr.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import Countdown from './Countdown'
import EmailIcon from '@material-ui/icons/Email';
import WhatsApp from '@material-ui/icons/WhatsApp';
import PIC from '../images/Cover/CHESS.jpg';
import CHESS_COVER from '../images/Cover/CHESS.jpg';
import DANCE_COVER from '../images/Cover/DANCE.jpg';
import DOTA_COVER from '../images/Cover/DOTA.jpg';
import MOLEG_COVER from '../images/Cover/MOBILELEGENDS.jpg';
import PUBG_COVER from '../images/Cover/PUBG.jpg';
import RUN_COVER from '../images/Cover/RUN.jpg';
import {isMobile} from 'react-device-detect';
import ReactPlayer from "react-player";
import pdf from "../Guideline.pdf"


import '../index.css' 

export default class MainWindow extends React.Component {
    
    MouseOut(event) {
        event.target.style.height = '17rem'
        event.target.style.width = '11.22rem'
      }
    
      MouseOver(event){
        if (!isMobile) {
            event.target.style.height = '20rem'
            event.target.style.width = '13rem'    
        } else {
            event.target.style.height = '18.5rem'
            event.target.style.width = '12rem'        
        }
        event.target.style.transition = 'height 0.3s, width 0.3s, transform 0.3s';
      }
    
    render() {
        return (
            <section id="mainwindow" className="pt-6 pb-20 min-h-screen w-full bg-gradient-to-b to-purple-800 via-blue-900 from-pink-500">
                <div className="w-full inline-block">
                    <a href="https://ppi-munich.org/" target="_blank" rel="noreferrer" className="logo float-left ml-8 mt-2 w-20 h-12 hover:bg-gray-50 rounded-md">
                        <img src={logoWhite} alt="logo" className="logowhite w-20 h-12" />
                        <img src={logoBlack} alt="logo" className="logoblack w-20 h-12" />
                    </a>

                    <a href="https://www.instagram.com/vsportfest.ppim/" target="_blank" rel="noreferrer">
                        <InstagramIcon fontSize="large" className="float-right mr-6 mt-2 text-white hover:text-black hover:bg-gray-50 rounded-md"/>
                    </a>
                    <a href="mailto:vsportfest@ppi-munich.org" target="_blank" rel="noreferrer">
                        <EmailIcon fontSize="large" className="float-right mr-3 mt-2 text-white hover:text-black hover:bg-gray-50 rounded-md"/>
                    </a>
                    <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer">
                        <WhatsApp fontSize="large" className="float-right mr-3 mt-2 text-white hover:text-black hover:bg-gray-50 rounded-md"/>
                    </a>
                </div>

                <div className="mt-4 md:-mt-4 flex-1 flex justify-center mr-auto pt-8">
                    <img src={LogoLarge} alt="Vsportfest Logo" className="w-3/4 h-3/4 md:w-1/3 sm:w-1/2" />
                </div>

                {/* TODO: make an explanation about when the competitions are held and when the registration is open!! also pake bahasa indo harusnya*/}

                <a href ={pdf} target = "_blank" className="">Download Pdf</a>

                <div className="my-16 flex-1 flex justify-center mr-auto text-3xl text-white font-futuristic">
                        Berlangsung selama <br></br>7 Okt - 10 Okt
                </div>

                <div className=" flex-1 flex justify-center w-auto h-auto relative player-wrapper">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=qGWsNJ2zF4Q"
                        playing={true}
                        className="top-0 left-1/2 transform -translate-x-1/2 absolute"
                        width= {!isMobile?"75%":"100%"}
                        height= {!isMobile?"75%":"100%"}
                        loop="false"
                    />
                </div>

                <div id="SelectionDiv" className="flex-wrap flex-row flex justify-center"> 
                    
                    <div>

                    </div>

                    <Link
                        activeClass="active"
                        to="dota"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <div>
                            <img src={MOLEG_COVER} className = "gamecover p-2" onMouseOver={this.MouseOver} onMouseOut={this.MouseOut}/>
                            <div className="relative text-2xl font-thin text-white">
                                MOLEG
                            </div>
                        </div>
                    
                    </Link>

                    <Link
                        activeClass="active"
                        to="isi"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <div>
                            <img src={PUBG_COVER} className = "gamecover p-2" onMouseOver={this.MouseOver} onMouseOut={this.MouseOut}/>
                            <div className="relative text-2xl font-thin text-white">
                               PUBG
                            </div>
                        </div>
                    </Link>

                    <Link
                        activeClass="active"
                        to="dota"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <div>
                            <img src={RUN_COVER} className = "gamecover p-2" onMouseOver={this.MouseOver} onMouseOut={this.MouseOut}/>
                            <div className="relative text-2xl font-thin text-white">
                                RUN
                            </div>
                        </div>
                    </Link>
                    
                    <Link
                        activeClass="active"
                        to="register"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <div>
                            <img src={CHESS_COVER} className = "gamecover p-2" onMouseOver={this.MouseOver} onMouseOut={this.MouseOut}/>
                            <div className="relative text-2xl font-thin text-white">
                                CHESS
                            </div>
                        </div>
                    </Link>

                    <Link
                        activeClass="active"
                        to="register"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <div>
                            <img src={DANCE_COVER} className = "gamecover p-2" onMouseOver={this.MouseOver} onMouseOut={this.MouseOut}/>
                            <div className="relative text-2xl font-thin text-white">
                                DANCE
                            </div>
                        </div>
                    </Link>

                    <Link
                        activeClass="active"
                        to="register"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <div>
                            <img src={DOTA_COVER} className = "gamecover p-2" onMouseOver={this.MouseOver} onMouseOut={this.MouseOut}/>
                            <div className="relative text-2xl font-thin text-white">
                                DOTA 2
                            </div>
                        </div>
                    </Link>

                    <div>
                        
                    </div>
                    
                </div>
                
                <div className="font-bold text-white text-3xl p-10 font-mono">
                    <Countdown />
                </div>

                <div className="flex-1 mr-auto text-3xl  md:text-5xl font-extrabold font-mono p-3 m-3 content-center justify-center rounded-lg items-center animate-pulse">
                    <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer" className="p-3 rounded-xl"  style={{backgroundColor: "#EEC184"}}>Register now!</a>
                </div>
            </section>
        );
    }
}