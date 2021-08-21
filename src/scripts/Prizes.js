import React from 'react';
import '../index.css';
import MEDAL1 from "../images/Medals/medal1.png"
import MEDAL2 from "../images/Medals/medal2.png"
import MEDAL3 from "../images/Medals/medal3.png"


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
        const first = this.props.first;
        const second = this.props.second;
        const third = this.props.third;

        return (
            <div class="text-white text-4xl font-sans font-extrabold transform skew-x-5 relative" >
                { first && 
                    <div class="input flex flex-row p-4" style={{position: "absolute" , top: "-4rem" , left: "3rem"}}>
                        <img src={MEDAL1} alt="first place" className = " h-16" onMouseOver={this.MouseOver} onMouseOut={this.MouseOut} />
                        <div className="pl-4">{first}€</div>
                    </div>
                }

                { second && 
                    <div class="input flex flex-row p-6" style={{position: "absolute" , top: "1rem" , left: "-3rem"}}>
                        <img src={MEDAL2} alt="second place" className = " h-16 " onMouseOver={this.MouseOver} onMouseOut={this.MouseOut} />
                        <div className="pl-4">{second}€</div>
                    </div>
                }

                { third && 
                    <div class="input flex flex-row p-4" style={{position: "absolute" , top: "3rem" , left: "7rem"}}>
                        <img src={MEDAL3} alt="third place" className = " h-16 " onMouseOver={this.MouseOver} onMouseOut={this.MouseOut} />
                        <div className="pl-4">{third}€</div>
                    </div>
                }
            </div>
        );
    }
}


