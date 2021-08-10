import React from 'react';
import Popup from './Popup'


class Content extends React.Component {
    render() {
      return (
        <div className={"h-screen py-60 flex flex-row " + (this.props.className)} id={this.props.id}>
            <div id="right" className="w-1/2 h-full text-center bg-purple-600 flex flex-col">
              <div className="m-auto">
              OWO
              </div>
            </div>
            <div className="rounded-md bg-purple-500 text-white text-2xl font-extrabold h-full w-1/2 text-center flex-col flex" id="left">
            <div className="m-auto">
              UWU
              </div>
            </div>
        </div>
      );
    }
}
  
export default Content;