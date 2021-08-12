import React from 'react';
import logo from '../images/pikachu.jpg';
import { Link } from "react-scroll";
import LogoLarge from '../images/vr.png';
import InstagramIcon from '@material-ui/icons/Instagram';


export default class MainWindow extends React.Component {
    render() {
        return (
            <div className="h-screen w-full bg-gradient-to-b from-purple-800 via-blue-900 to-pink-500">
                <div className="w-full inline-block">
                    <img src={logo} alt="logo" className="float-left ml-8 mt-2 w-16 h-16" />
                    <a href="https://www.w3schools.com/" target="_blank">
                        <InstagramIcon fontSize="large" className="float-right mr-8 mt-2 text-white"/>
                    </a>
                </div>

                <div className="mt-5 flex-1 flex justify-center mr-auto">
                    <img src={LogoLarge} alt="Vsportfest Logo" className="w-3/4 h-3/4 md:w-1/3" />
                </div>

                <div className="mt-8 flex-1 flex justify-center mr-auto">
                    <div className="w-48 bg-yellow-100" >
                        AUG - SEPT
                    </div>
                </div>

                <div> 
                    <Link
                        activeClass="active"
                        to="pembukaan"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <button class="bg-gray-50 m-10 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
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

                <div className="text-4xl p-3 flex w-auto m-5 bg-yellow-300 rounded-lg justify-center items-center">
                    <a href="https://www.w3schools.com/" target="_blank">Register now!</a>
                </div>
            </div>
        );
    }
}