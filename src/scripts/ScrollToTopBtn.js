import React, {Component} from "react";
import img from "../images/scrollup.svg"
import img2 from "../images/pikachu.jpg"
import icon from "../images/icon.svg"

class ScrollToTopBtn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            is_visible: false,
            windowHeight:0
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        const height = document.getElementById('mainwindow').clientHeight -50;
        this.setState({ windowHeight:height });    
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
        })
    }
    
    toggleVisibility() {
        if(window.pageYOffset > this.state.windowHeight) {
            this.setState({
                is_visible : true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }
    
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        const { is_visible } = this.state;
        return (
            <div className="scroll-to-top w-14 h-14 fixed">
                {is_visible && (
                    <div onClick={() => this.scrollToTop()}>
                        <img src={icon} alt='Go to top' />
                    </div>
                )}
            </div>
        );
    }
}

/*
link to drive: https://drive.google.com/drive/folders/11c60SqhlJDhZy62KPdyUVtO3P-f1qjBs

Sections: rules, Contact person, hadiah, signup, 

lomba -> catur, moleg, pubg, virtual run, dota, dance

link to google form

cp: ig, email, cp?
opt: merch, faq, money collection

*/
export default ScrollToTopBtn;
