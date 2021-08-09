import React from 'react';
import '../index.css';

export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.modal = document.getElementById("myModal");
        this.btn = document.getElementById("myBtn");
        this.span = document.getElementsByClassName("close")[0];
    }

    componentDidMount() {
        console.log('I was triggered during componentDidMount')
        this.modal = document.getElementById("myModal");
        this.btn = document.getElementById("myBtn");
        this.span = document.getElementsByClassName("close")[0];
    }

    // When the user clicks the button, open the modal 
    btnOnClick() {
        this.modal.style.display = "block";

        // window.print("triggered during popup click");
    }

    // When the user clicks on <span> (x), close the modal
    spanOnClick() {
        this.modal.style.display = "none";
    }

    render() {
        return (
            <div>
                <button id="myBtn" className="bg-blue-300 float-right p-10 font-mono" onClick={() => this.btnOnClick()}>
                    RULES
                </button>
                <div id="myModal" className="dylan-modal">
                    <div className="dylan-modal-content">
                        <span className="dylan-close" onClick={() => this.spanOnClick()}>&times;</span>
                        <p>Some text in the Modal..</p>
                    </div>
                </div>
            </div>
        );
    }

    //     // Get the modal
    // var modal = document.getElementById("myModal");

    // // Get the button that opens the modal
    // var btn = document.getElementById("myBtn");

    // // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];

    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function (event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // }

}


