import React from 'react';
import logo from '../images/pikachu.jpg';
import ig from '../images/instagram.png'

class Sidebar extends React.Component {
    render(){  
        return (<div class="navbar h-16 fixed bg-gray-50 border-2">
            <img src={logo} alt="logo" className="logo float-left ml-8 h-full w-16" />
            <img src={ig} alt="ig" className="ig float-right ml-8 h-full w-16" />
        </div>);
    }

} 
  
export default Sidebar;