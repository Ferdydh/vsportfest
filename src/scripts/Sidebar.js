import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class Sidebar extends React.Component {

    render() {
      return (
        <div class="sidebar">
            <div> 
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">

                <Link
                activeClass="active"
                to="pembukaan"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >

                <a href="#pembukaan">1</a>

                </Link>

                </button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link
                activeClass="active"
                to="isi"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                <a href="#isi">2</a>
                </Link>
                </button>
                
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link
                activeClass="active"
                to="penutup"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                <a href="#penutup">3</a>
                </Link>
                </button>
            </div>
        </div>

      );
    }
}
  
export default Sidebar;