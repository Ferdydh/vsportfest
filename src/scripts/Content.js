import React from 'react';
import Popup from './Popup'
import Pikachu from '../images/pikachu.jpg'

class Content extends React.Component {
  render() {
    return (
      <div className={"h-screen py-60 flex flex-row " + (this.props.className)} id={this.props.id}>
        <div id="right" className="w-1/2 h-full text-center flex flex-col">
          <div className="m-auto font-light text-5xl">
            SPORTFESTTEMPLATE
          </div>

          <div className="flex flex-wrap bg-pink-500 justify-center content-center w-1/3">
          <Popup
                    trigger={<button className="font-mono"> Rules </button>}
                    modal
                    nested
                    >
                    {close => (
                      <div className="modal">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                        <div className="header"> Modal Title </div>
                        <div className="content">
                          {' '}
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                        </div>
                      </div>
                    )}
           </Popup>
        </div>
        </div>

        <div className="bg-gray-800 w-1">

        </div>

        <div className="rounded-md text-white text-2xl font-extrabold h-full w-1/2 text-center flex-col flex" id="left">
          <div className="m-auto">
            <img src={Pikachu}>

            </img>
          </div>
        </div>
      </div>
    );
  }
}
  
export default Content;