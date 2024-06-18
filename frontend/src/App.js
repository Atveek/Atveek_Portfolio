import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Project from "./components/Project";

function App() {
  return (
    <div className="block bg-[#1B1E2A] w-full min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Home />
        <Skills></Skills>
        <Project></Project>
      </BrowserRouter>
    </div>
  );
}

export default App;
