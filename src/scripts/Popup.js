
import React from 'react';
import '../index.css';

export default class Sidebar extends React.Component {
    render(){
        return (
            <div>
                <button id="myBtn" onClick="btnOnClick()">Open Modal</button>

                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span className="close" onClick="spanOnClick()">&times;</span>
                        <p>Some text in the Modal..</p>
                    </div>
                </div>

            </div>
        );
    }

    constructor(props) {
        super(props);
        this.modal = document.getElementById("myModal");
        this.btn = document.getElementById("myBtn");
        this.span = document.getElementsByClassName("close")[0];
    }

//     // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btnOnClick() {
    this.modal.style.display = "block";
    // window.print("triggered during popup click");
}

// When the user clicks on <span> (x), close the modal
spanOnClick() {
    this.modal.style.display = "none";
}

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

}


