import React from 'react';
import logo from '../images/pikachu.jpg';
import ig from '../images/instagram.png'
import { Link } from "react-scroll";
import Kacamata from '../images/Kacamata.jpeg';
// import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default class MainWindow extends React.Component {
    render() {
        return (
            <div className="mainwindow h-screen border-2 w-full">
                <div>
                    <img src={logo} alt="logo" className="logo float-left ml-8 mt-2 w-16 h-16" />
                    <img src={ig} alt="ig" className="ig float-right mr-8 mt-2 w-10 h-10" />
                    <InstagramIcon fontSize='   ' />
                </div>

                <div className="mt-12 flex-1 flex justify-center mr-auto">
                    <img src={Kacamata} alt="Kacamata" className="w-1/3 h-1/3" />
                </div>

                <div className="bg-red-100 mt-16 p-10">
                    VSPORTFEST
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
            </div>
        );
    }
}