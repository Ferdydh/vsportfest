import React from 'react';
import Pikachu from '../images/pikachu.jpg'
import VR from '../images/vr.png'
import { Parallax } from 'react-parallax';
import Modal from './Modal';

class Dota extends React.Component {

  componentDidMount(){
    console.log("Hello");
  }

  MouseOver(event) {
    event.target.style.height = '120%';
    event.target.style.transform = 'rotate(20deg)'
    event.target.style.transition = 'height 0.5s, transform 1s';
  }

  MouseOut(event){
    event.target.style.height = '100%';
    event.target.style.transform = 'rotate(0deg)'
  }

  render() {

    return (
      <Parallax bgImage={VR} className="bg-gray-500" strength={300}>
      <section className="h-screen px-20 md:py-20 flex flex-row " id={this.props.id}>
        {/* LEFT SIDE OF THE DIV */}
        <div className="h-full w-1/2 flex flex-col" id="leftside">
          <div className="m-auto font-bold text-5xl">
            <div className="test transform -skew-y-6 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110">
                DOTA
            </div>

            <Modal 
              title="DOTA" 
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
              Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
              delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
              commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
              explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?"
            />

            {/* <button className="transform skew-y-6 my-10 float-left transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110
             bg-blue-500 font-light hover:bg-blue-700 text-white py-2 px-4 border border-blue-700 rounded text-sm">
                RULES
            </button> */}
          </div>
        </div>

        {/* LINE THROUGH MIDDLE OF COMPONENT */}
        <div className="flex flex-col" id="columnspace">
        <div className="w-1 h-full">
          </div>
          <div className="bg-gray-800 w-1 h-full">
          </div>
          <div className=" w-1 h-full">
          </div>
        </div>
        
        {/* RIGHT SIDE OF THE DIV */}
        <div className="h-full w-1/2 flex-col flex" id="rightside">
        
          <div className="p-10 m-auto">

              <img src={Pikachu} onMouseOver={this.MouseOver} onMouseOut={this.MouseOut} />

            </div>
        </div>
      </section>
      </Parallax>
    );
  }
}
  
export default Dota;