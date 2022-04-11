import "./App.css";
import Leftbar from "./components/Leftbar";
import Maincontent from "./components/Maincontent";
import Rightbar from "./components/Rightbar";

function App() {
  return (
    <div className='flex justify-evenly relative'>
      <Leftbar />
      <Maincontent />
      <Rightbar />
    </div>
  );
}

export default App;
