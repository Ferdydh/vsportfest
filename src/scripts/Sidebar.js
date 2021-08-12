import React from 'react';

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
          if (id !== "pembukaan" || id !== "isi" || id !== "penutup" || id !== "register") {
            return;
          }
          
          if (entry.intersectionRatio > 0) {
            document.querySelector(`nav div div a[href="#${id}"]`).parentElement.classList.add('active');
          } else {
            document.querySelector(`nav div div a[href="#${id}"]`).parentElement.classList.remove('active');
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
            <div class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><a href="#mainwindow">1</a></div>
            <div class="focus:bg-green-700"><a href="#pembukaan">0</a></div>
            <div class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><a href="#isi">1</a></div>
            <div class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><a href="#penutup">2</a></div>
            <div class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><a href="#register">3</a></div>
          </div>
        )}
      </nav>

    );
  }
}

export default Sidebar;