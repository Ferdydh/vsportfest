import React from 'react';

class Register extends React.Component {
    render() {
      return (
          <div className={this.props.className} id={this.props.id}>
              <div className="bg-purple-600">
                <div className="flex flex-col h-screen justify-center items-center relative ">

                <div className="flex w-auto m-5 bg-yellow-300 rounded-lg justify-center items-center">
                    <div className="text-4xl p-5">
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