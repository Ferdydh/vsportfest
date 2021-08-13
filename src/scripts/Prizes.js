import React from 'react';
import '../index.css';
import Pikachu from '../images/pikachu.jpg';
export default class Prizes extends React.Component {

    MouseOver(event) {
        event.target.style.transform = 'rotate(20deg)'
        event.target.style.height = '4rem'
        event.target.style.transition = 'height 0.3s, transform 0.3s';
      }
    
      MouseOut(event){
        event.target.style.height = '3rem'
        event.target.style.transform = 'rotate(0deg)'
      }

    render() {
        return (
            <div class="outer text-white text-4xl font-sans font-extrabold transform skew-x-5"  style={{position: "relative"}} >
                <div class="input flex flex-row" style={{position: "absolute" , top: "-5rem" , left: "0rem"}}>
                    <img src={Pikachu} className = " h-8 " onMouseOver={this.MouseOver} onMouseOut={this.MouseOut} />
                        100€
                </div>
                <div class="input flex flex-row" style={{position: "absolute" , top: "0rem" , left: "3rem"}}>
                    <img src={Pikachu} className = " h-8 " onMouseOver={this.MouseOver} onMouseOut={this.MouseOut} />
                        200€
                </div>
                <div class="input flex flex-row" style={{position: "absolute" , top: "5rem" , left: "6rem"}}>
                    <img src={Pikachu} className = " h-8 " onMouseOver={this.MouseOver} onMouseOut={this.MouseOut} />
                        300€
                </div>
            </div>
        );
    }
}


