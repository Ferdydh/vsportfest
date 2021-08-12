import React,{useEffect} from 'react';
import Popup from './Popup'
import Pikachu from '../images/pikachu.jpg'

class Content extends React.Component {

  componentDidMount(){
    console.log("Hello");
  }

  render() {

    return (
      <div className={"h-screen py-20 flex flex-row " + (this.props.className)} id={this.props.id}>
        {/* LEFT SIDE OF THE DIV */}
        <div className="h-full w-1/2 flex flex-col" id="leftside">
          <div className="m-auto font-bold text-5xl">
            <div className="transform -skew-y-6">
                MOBILE LEGENDS
            </div>
            <button className="transform skew-y-6 my-10 float-left bg-blue-500 font-light hover:bg-blue-700 text-white py-2 px-4 border border-blue-700 rounded text-sm">
                RULES
            </button>
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
          <div className="m-auto">
            <img src={Pikachu} />
          </div>
        </div>
      </div>
    );
  }
}
  
export default Content;