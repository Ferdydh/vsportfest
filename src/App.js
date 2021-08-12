import './App.css';
import "tailwindcss/tailwind.css"
import Content from './scripts/Content';
import Sidebar from './scripts/Sidebar';
import MainWindow from './scripts/MainWindow';
import Register from './scripts/Register'
import ScrollToTopBtn from './scripts/ScrollToTopBtn';
import MoLeg from './scripts/MoLeg';

function App() {
  return (
    <section className="App">
      <MainWindow />
      {/* The topmost slide gets extra padding due to the first slide*/}

      <Content section="pubg" id="pembukaan" />

      <Content className="bg-yellow-300 p-10" id="isi" />

      <Content className="bg-green-300 p-10" id="penutup" />

      <Register id="register" />
      <Sidebar />
      <ScrollToTopBtn />

    </section>
  );
} 

export default App;

