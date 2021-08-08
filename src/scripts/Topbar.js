import React from 'react';
import logo from '../images/pikachu.jpg';
import ig from '../images/instagram.png'

class Sidebar extends React.Component {
    render() {
        return (
            <div class="navbar h-screen bg-gray-50 border-2 w-full">
                <div>
                    <img src={logo} alt="logo" className="logo float-left ml-8 w-16" />
                    <img src={ig} alt="ig" className="ig float-right ml-8 w-16" />
                </div>
                <div className="bg-red-100 mt-16 p-10">
                    VSPORTFEST
                </div>
                <button class="bg-transparent m-10 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    1
                </button>
                <button class="bg-transparent m-10 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    2
                </button>
                <button class="bg-transparent m-10 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    3
                </button>
            </div>
        );
    }
}

export default Sidebar;