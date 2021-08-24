import React, {Component} from "react";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
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
        const height = document.getElementById('mainwindow').clientHeight *2/3;
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
            <div className="scroll-to-top w-14 h-14">
                {/* <img src={icon} alt='Go to top' /> */}
                {is_visible && 
                    <button className="rounded-full h-14 w-14 sm:h-16 sm:w-16 bg-pastelYellow ring-4 ring-offset-black transition-all duration-400 ease-in-out 
                    hover:-translate-y-1 hover:scale-110 hover:bg-cyan hover:text-white" 
                     onClick={() => this.scrollToTop()}
                    >
                        <KeyboardArrowUpIcon fontSize="large"/>
                    </button>
                }
            </div>
        );
    }
}
export default ScrollToTopBtn;
