import React from 'react';

class Sidebar extends React.Component {

    render() {
      return (
        <div class="sidebar">
            <div> 
                {/*
                maybe we have to change the href to javascript for better transitions etc? 
                */}
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <a href="#pembukaan">1</a>
                </button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <a href="#isi">2</a>
                </button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <a href="#penutup">3</a>
                </button>
            </div>
        </div>

      );
    }
}
  
export default Sidebar;