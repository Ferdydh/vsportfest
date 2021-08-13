import React from 'react';
import Dota from '../images/dota.png'
import MoLeg from '../images/ml.png'
import Pubg from '../images/pubg.png'
import Chess from '../images/chess.png'
import Dance from '../images/dance.png'
import Run from '@material-ui/icons/DirectionsRun';
import Home from '@material-ui/icons/Home';
import Register from '../images/register.png'

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
        entries.forEach(entry => {
          const id = entry.target.getAttribute('id');
          // alert(id);
          if (!(id === "mainwindow" ||id === "virtualrun" || id === "dota" || id === "pubg" || id === "chess" || id === "dance" || id === "moleg" || id === "register")) {
            return;
          }
          
          if (entry.intersectionRatio > 0) {
            try {
              document.querySelector(`nav div div a[href="#${id}"]`).parentElement.classList.add('active');
            } catch (error) {
            }
          } else {
            try {
              document.querySelector(`nav div div a[href="#${id}"]`).parentElement.classList.remove('active');
            } catch (error) {
            }
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
      <nav class="sidebar p-2">
        {is_visible && (
          <div>
            <div class="bg-gray-400 hover:bg-gray-200 font-bold py-2 px-2 rounded-full backdrop-filter-blur mb-4">
              <a href="#mainwindow">
                <Home color="black" />
              </a>
            </div>
            <div class=" bg-gray-400 bg-opacity-40 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded-full backdrop-filter-blur mb-4">
              <a href="#dota">
                <img src={Dota} alt="dota"></img>
              </a>
            </div>
            <div class="bg-gray-400 bg-opacity-40 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded-full backdrop-filter-blur mb-4">
              <a href="#moleg">
                <img src={MoLeg} alt="Mobile Legends" className="object-contain w-24 h-16"></img>
              </a>
            </div>
            <div class="bg-gray-400 bg-opacity-40 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded-full backdrop-filter-blur mb-4">
              <a href="#pubg">
                <img src={Pubg} alt="PUBG" className="object-contain w-24 h-16"></img>
              </a>
            </div>
            <div class="bg-gray-400 bg-opacity-40 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded-full backdrop-filter-blur mb-4">
              <a href="#chess">
                <img src={Chess} alt="Chess" className="object-contain w-24 h-16"></img>
              </a>
            </div>
            <div class="bg-gray-400 bg-opacity-40 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded-full backdrop-filter-blur mb-4">
              <a href="#dance">
                <img src={Dance} alt="Dance" className="object-contain w-24 h-16"></img>
              </a>
            </div>
            <div class="bg-gray-400 bg-opacity-40 hover:bg-gray-200  font-bold py-2 px-4 rounded-full backdrop-filter-blur mb-4">
              <a href="#virtualrun">
                <Run color="black" />
              </a>
            </div>
            <div class="bg-gray-400 bg-opacity-40 hover:bg-gray-200  font-bold py-2 px-4 mb-2 rounded-full backdrop-filter-blur mb-4">
              <a href="#register">
                <img src={Register} alt="Register" className="object-contain w-24 h-16"></img>
              </a>
            </div>
          </div>
        )}
      </nav>

    );
  }
}

export default Sidebar;