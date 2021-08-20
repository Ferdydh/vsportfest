import React from 'react';
import Dota from '../images/dota.png'
import MoLeg from '../images/ml.png'
import Pubg from '../images/pubg.png'
import Chess from '../images/chess.png'
import Dance from '../images/dance.png'
import Run from '@material-ui/icons/DirectionsRun';
import Home from '@material-ui/icons/Home';
import Register from '../images/register.png'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {isMobile} from 'react-device-detect';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
      sidebarHeight:0
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    const height = document.getElementById('mainwindow').clientHeight;
    this.setState({ sidebarHeight:height });    
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    })

    if (isMobile) return;

    window.addEventListener('load', () => {
      const sections = [
        document.getElementById("mainwindow"),
        document.getElementById("dota"),
        document.getElementById("moleg"),
        document.getElementById("pubg"),
        document.getElementById("chess"),
        document.getElementById("dance"),
        document.getElementById("virtualrun"),
        document.getElementById("register"),
      ]
      
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('id');
          if (!(id === "mainwindow" ||id === "virtualrun" || id === "dota" || id === "pubg" || id === "chess" || id === "dance" || id === "moleg" || id === "register")) {
            return;
          }
          
          if (this.state.is_visible &&  entry.intersectionRatio > 0) {
            try {
              document.querySelector(`nav div div a[href="#${id}"]`).parentElement.classList.add('active');
            } catch(e){
              // alert(e);
              // alert(id);
            }
          } else {
            try {
              document.querySelector(`nav div div a[href="#${id}"]`).parentElement.classList.remove('active');
            } catch(e){
              // alert(e);
              // alert(id);
            }
          }
        });
      });

      // Track all sections that have an `id` applied
      sections.forEach((section) => {
        // alert(section);
        observer.observe(section);
      });
      
    });  

  }

  toggleVisibility() {
    if (window.pageYOffset > this.state.sidebarHeight) {
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
      <nav>

      {isMobile && is_visible && (
      <nav class="mobilesidebar w-1/6">
        <Menu as="div" className="inline-block text-center flex-auto relative justify-center content-center">
          <div className="p-2">
            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute mt-2 h-auto w-full p-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="grid-block">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#mainwindow"
                      className='text-gray-700 block text-sm'
                    >
                      <Home color="black" fontSize="large" />
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#dota"
                      className='text-gray-700 block text-sm w-auto p-2'
                    >
                      <img src={Dota} alt="dota"></img>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#moleg"
                      className='text-gray-700 block text-sm w-auto p-2 h-auto'
                    >
                  <img src={MoLeg} alt="Mobile Legends" className="object-contain"></img>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#pubg"
                      className='text-gray-700 block text-sm w-auto p-2'
                    >
                  <img src={Pubg} alt="PUBG" className="object-contain"></img>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#chess"
                      className='text-gray-700 block text-sm w-auto h-auto p-3'
                    >
                  <img src={Chess} alt="Chess" className="object-contain"></img>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#dance"
                      className='text-gray-700 block'
                    >
                  <img src={Dance} alt="Dance" className="object-contain"></img>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#virtualrun"
                      className='text-gray-700 block'
                    >
                  <Run color="black" fontSize="large"/>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#register"
                      className='text-gray-700 flex text-center flex-auto justify-center content-center'
                    >
                  <img src={Register} alt="Register" className="object-contain"></img>
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </nav>)}


{/* ////////////////////////////// */}
        {!isMobile && is_visible && (
          <nav class="sidebar pl-3">
            <div>
              <div class="bg-gray-400 bg-opacity-40 hover:bg-gray-200 font-bold py-2 px-2 rounded-full backdrop-filter-blur mb-4">
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
          </nav>
        )}
      </nav>

    );
  }
}

export default Sidebar;