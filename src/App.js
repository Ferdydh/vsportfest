import './App.css';
import "tailwindcss/tailwind.css"
import Content from './scripts/Content';
import Sidebar from './scripts/Sidebar';
import Contact from './scripts/Contact';
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  return (
    <section className="App">
      <Sidebar />
      <section class="main">
        <Content bgcolor="bg-red-300" id="pembukaan" />
        <Content bgcolor="bg-yellow-300" id="isi" />
        <Content bgcolor="bg-green-300" id="penutup" />
        <Contact />
      </section>
    </section>
  );
} 

export default App;

