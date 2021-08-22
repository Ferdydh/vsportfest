import React from 'react';
import Home from '@material-ui/icons/Home';
import Register from '../images/register.png'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {isMobile} from 'react-device-detect';

import CHESS_COVER from '../images/CompressedImages/CHESSSMALL.png';
import DANCE_COVER from '../images/CompressedImages/DANCESMALL.png'
import DOTA_COVER from '../images/CompressedImages/DOTASMALL.png'
import MOLEG_COVER from '../images/CompressedImages/MOLEGSMALL.png'
import PUBG_COVER from '../images/CompressedImages/PUBGSMALL.png'
import RUN_COVER from '../images/CompressedImages/RUNSMALL.png'


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
    const height = document.getElementById('mainwindow').clientHeight *2/3;
    this.setState({ sidebarHeight:height });    
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    })

    if (isMobile) return;

    window.addEventListener('DOMContentLoaded', () => {
      const sections = [
        document.getElementById("dotax"),
        document.getElementById("molegx"),
        document.getElementById("pubgx"),
        document.getElementById("chessx"),
        document.getElementById("dancex"),
        document.getElementById("virtualrunx"),
      ]
      
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('id');
          if (this.state.is_visible &&  entry.intersectionRatio > 0) {
            try {
              document.querySelector(`nav div div a[href="#${id.substring(0, id.length - 1)}"]`).parentElement.classList.add('active');
            } catch(e){
              // alert(e);
              // alert(id);
            }
          } else {
            try {
              document.querySelector(`nav div div a[href="#${id.substring(0, id.length - 1)}"]`).parentElement.classList.remove('active');
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
      <nav class="mobilesidebar">
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
            <Menu.Items className="absolute mt-2 h-auto w-full"> 
              <Menu.Item>
                <div class="h-auto w-auto bg-indigo-500 p-0.5 rounded-full mb-4 flex-1 flex justify-center mr-auto items-center">
                  {/* ring-2 ring-offset-2 ring-offset-gray-100 ring-indigo-500 */}
                  <a href="#dota">
                    <img src={DOTA_COVER} alt="DOTA"/>
                  </a>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div class="h-auto w-auto bg-indigo-500 p-0.5 rounded-full mb-4 flex-1 flex justify-center mr-auto items-center">
                  <a href="#moleg">
                    <img src={MOLEG_COVER} alt="Mobile Legends"></img>
                  </a>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div class="h-auto w-auto bg-indigo-500 p-0.5 rounded-full mb-4 flex-1 flex justify-center mr-auto items-center">
                  <a href="#pubg">
                    <img src={PUBG_COVER} alt="PUBG"></img>
                  </a>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div class="h-auto w-auto bg-indigo-500 p-0.5 rounded-full mb-4 flex-1 flex justify-center mr-auto items-center">
                  <a href="#chess">
                    <img src={CHESS_COVER} alt="Chess"></img>
                  </a>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div class="h-auto w-auto bg-indigo-500 p-0.5 rounded-full mb-4 flex-1 flex justify-center mr-auto items-center">
                  <a href="#dance">
                    <img src={DANCE_COVER} alt="Dance"></img>
                  </a>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div class="h-auto w-auto bg-indigo-500 p-0.5 rounded-full mb-4 flex-1 flex justify-center mr-auto items-center">
                <a href="#virtualrun">
                  <img src={RUN_COVER} alt="Virtual Run"/>
                </a>
              </div>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </nav>)}


{/* ////////////////////////////// */}
        {!isMobile && is_visible && (
          <nav class="sidebar ml-3 h-screen">
            <div>
              <div class="bg-indigo-500 p-0.5 rounded-full mb-4 flex-1 flex justify-center mr-auto items-center">
                {/* ring-2 ring-offset-2 ring-offset-gray-100 ring-indigo-500 */}
                <a href="#dota">
                  <img src={DOTA_COVER} alt="DOTA"/>
                </a>
              </div>
              <div class="bg-indigo-500 p-0.5 rounded-full mb-4 flex-1 flex justify-center mr-auto items-center">
                <a href="#moleg">
                  <img src={MOLEG_COVER} alt="Mobile Legends"></img>
                </a>
              </div>
              <div class="h-auto w-auto bg-indigo-500 p-0.5 rounded-full mb-4 flex-1 flex justify-center mr-auto items-center">
                <a href="#pubg">
                  <img src={PUBG_COVER} alt="PUBG"></img>
                </a>
              </div>
              <div class="h-auto w-auto bg-indigo-500 p-0.5 rounded-full mb-4 flex-1 flex justify-center mr-auto items-center">
                <a href="#chess">
                  <img src={CHESS_COVER} alt="Chess"></img>
                </a>
              </div>
              <div class="h-auto w-auto bg-indigo-500 p-0.5 rounded-full mb-4 flex-1 flex justify-center mr-auto items-center">
                <a href="#dance">
                  <img src={DANCE_COVER} alt="Dance"></img>
                </a>
              </div>
              <div class="h-auto w-auto bg-indigo-500 p-0.5 rounded-full mb-4 flex-1 flex justify-center mr-auto items-center">
                <a href="#virtualrun">
                  <img src={RUN_COVER} alt="Virtual Run"/>
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