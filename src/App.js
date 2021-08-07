import './App.css';
import "tailwindcss/tailwind.css"
import Content from './scripts/Content';
import Sidebar from './scripts/Sidebar';
import Contact from './scripts/Contact';
import Topbar from './scripts/Topbar'
import ScrollToTopBtn from './scripts/ScrollToTopBtn';

function App() {
  return (
    <section className="App">
      <ScrollToTopBtn/>
      <Topbar />

      <Sidebar />
      
      <section class="main">
        <Content className="bg-red-300" id="pembukaan" />
        <Content className="bg-yellow-300" id="isi" />
        <Content className="bg-green-300" id="penutup" />
        <Contact />
        
      </section>
    </section>
  );
} 

export default App;

