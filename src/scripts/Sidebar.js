import React from 'react';
import { Link } from "react-scroll";

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    })
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div class="sidebar">
        {is_visible && (
          <div>

            <Link
              activeClass="active"
              to="pembukaan"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                1
              </button>
            </Link>

            <Link
              activeClass="active"
              to="isi"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                2
              </button>
            </Link>

            <Link
              activeClass="active"
              to="penutup"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                3
              </button>
            </Link>
            
            <Link
              activeClass="active"
              to="register"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                4
              </button>
            </Link>
          </div>
        )}
      </div>

    );
  }
}

export default Sidebar;