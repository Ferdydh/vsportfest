import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



export default class MoLeg extends React.Component {
  render() {
    return (
      <section className={this.props.className} id={this.props.id}>
        <div className={"h-screen flex flex-row " + (this.props.className)} id={this.props.id}>
          <div id="right" className="w-1/2 h-full text-center bg-purple-600 flex flex-col">
            <div className="flex flex-col m-auto">
              <div className="text-white text-5xl p-3" >
                Mobile Legend
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
                        nasi goreng?
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                        commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                        explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                      </div>
                    </div>
                  )}
                </Popup>
                <span class="material-icons">chevron_right</span>
              </div>
            </div>

          </div>
          <div className="rounded-md bg-purple-500 text-white text-2xl font-extrabold h-full w-1/2 text-center flex-col flex" id="left">
            <div className="m-auto">
              UWU
            </div>
          </div>
        </div>
      </section>
    );
  }
}