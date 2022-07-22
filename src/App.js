import {Routes, Route} from "react-router-dom"
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./view/Home/Home";
import Lab from "./components/Lab";
import Project from "./components/Project";
import Writing from "./components/Writing";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/writing" element={<Writing/>} />
        <Route path="/lab" element={<Lab/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
