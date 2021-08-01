import './App.css';
import "tailwindcss/tailwind.css"
import Content from './scripts/Content';
import Sidebar from './scripts/Sidebar';

function App() {
  return (
    <section className="App">
      <Sidebar />
      <section class="main">
        <Content bgcolor="bg-red-300" id="pembukaan" />
        <Content bgcolor="bg-yellow-300" id="isi" />
        <Content bgcolor="bg-green-300" id="penutup" />
      </section>
    </section>
  );
} 

export default App;
