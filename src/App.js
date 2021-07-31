import './App.css';
import "tailwindcss/tailwind.css"
import Content from './scripts/Content';
import Sidebar from './scripts/Sidebar';

function App() {
  return (
    <div className="App">
      <h1>
        Hello World
      </h1>

      <Sidebar />

      <div class="main">
        <Content bgcolor="bg-red-300" id="pembukaan" />
        <Content bgcolor="bg-yellow-300" id="isi" />
        <Content bgcolor="bg-green-300" id="penutup" />
      </div>
    </div>
  );
}

export default App;
