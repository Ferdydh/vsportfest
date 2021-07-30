import './App.css';
import "tailwindcss/tailwind.css"
import Content from './scripts/Content';

function App() {
  return (
    <div className="App">
      <h1>
        Hello World
      </h1>

      <div style={{width: "20%", float:"left"}}>
        {/*
        maybe we have to change the href to javascript for better transitions etc? 
        */}
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a href="#pembukaan">loncat ke pembukaan</a>
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a href="#isi">loncat ke isi</a>
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a href="#penutup">loncat ke penutup</a>
        </button>
      </div>

      <div style={{width: "80%", float:"right"}}>
        <Content bgcolor="bg-red-300" id="pembukaan" />
        <Content bgcolor="bg-yellow-300" id="isi" />
        <Content bgcolor="bg-green-300" id="penutup" />
      </div>
    </div>
  );
}

export default App;
