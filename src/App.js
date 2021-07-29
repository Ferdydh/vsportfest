import './App.css';
import "tailwindcss/tailwind.css"
import Content from './scripts/Content';

function App() {
  return (
    <div className="App">
      <h1>
        Hello World
      </h1>

      <Content bgcolor="bg-red-300"/>
      <Content bgcolor="bg-red-300"/>
      <Content bgcolor="bg-red-300"/>

    </div>
  );
}

export default App;
