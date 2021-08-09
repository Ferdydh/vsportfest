import './App.css';
import "tailwindcss/tailwind.css"
import Content from './scripts/Content';
import Sidebar from './scripts/Sidebar';
import Contact from './scripts/Contact';
//import Topbar from './scripts/Topbar';
import ScrollToTopBtn from './scripts/ScrollToTopBtn';
import MoLeg from './scripts/MoLeg';
import MainWindow from './scripts/MainWindow';

function App() {
  return (
    <section className="App">
      <MainWindow />
      {/* The topmost slide gets extra padding due to the first slide*/}

      <MoLeg className="bg-red-300 p-10" id="pembukaan" />

      <Content className="bg-yellow-300 p-10" id="isi" />

      <Content className="bg-green-300 p-10" id="penutup" />

      <Contact /> 
      <Sidebar />
      <ScrollToTopBtn />

    </section>
  );
} 

export default App;

