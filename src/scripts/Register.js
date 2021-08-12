import React from 'react';
import BackgroundShape from '../images/shape.png';

class Register extends React.Component {
    render() {
      return (
          <div className={this.props.className} id={this.props.id}>
              <div className="relative bg-purple-600">
                <img src={BackgroundShape}  alt="splash" className="absolute p-10 w-3/4"></img>
                <div className="flex flex-col h-screen justify-center items-center relative ">
                <div className="flex w-auto m-5 bg-yellow-300 rounded-lg justify-center items-center">
                    <div className="text-2xl md:text-4xl p-5">
                        <a href="google.com">Register now!</a>
                    </div>
                    
                </div>
                <div className="bg-purple-300 text-lg p-1">
                    Frist: date
                </div>
                <div>Date</div>

                </div>
                <div className="text-xl text-white p-10">Contact person: Pepe julian</div>
              </div>
            
        </div>
        
      ); 
    }
}
  
export default Register;