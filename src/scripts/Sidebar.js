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


    window.addEventListener('DOMContentLoaded', () => {
      const observer = new IntersectionObserver(entries => {
        alert("es");

        entries.forEach(entry => {
          const id = entry.target.getAttribute('id');
          if (entry.intersectionRatio > 0) {
            document.querySelector(`nav div div a[href="#${id}"]`).parentElement.classList.add('active');
          } else {
            document.querySelector(`nav div a[href="#${id}"]`).parentElement.classList.remove('active');
          }
        });
      });
    
      // Track all sections that have an `id` applied
      document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
      });
      
    });  

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
      <nav class="sidebar">
        {is_visible && (
          <div className="flex space-y-10">
            <div class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded active:bg-green-700"><a href="#pembukaan">Introduction</a></div>


            <Link
              activeClass="bg-black-100"
              to="pembukaan"
              spy={true}
              smooth={true}
              offset={0}
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
              offset={0}
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
              offset={0}
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
              offset={0}
              duration={500}
            >
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                4
              </button>
            </Link>
          </div>
        )}
      </nav>

    );
  }
}

export default Sidebar;