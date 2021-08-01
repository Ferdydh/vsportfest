import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class Sidebar extends React.Component {

    render() {
      return (
        <div class="sidebar">
            <div>
            
                <Link
                activeClass="active"
                to="pembukaan"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} 
                >
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                1
                </button>
                </Link>
                
                <Link
                activeClass="active"
                to="isi"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} 
                >
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                2
                </button>
                </Link>
                
                <Link
                activeClass="active"
                to="penutup"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                3
                </button>
                </Link>
            </div>
        </div>

      );
    }
}
  
export default Sidebar;