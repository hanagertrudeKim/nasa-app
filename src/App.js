import {Routes, Route} from "react-router-dom"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./view/Home/Home"
import MarsTravel from "./view/MarsTravel";
import Planet from "./view/Planet";
import Reference from "./view/Reference";
import SolarSystem from "./view/SolarSystem";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/marsTrevel" element={<MarsTravel/>} />
        <Route path="/planet" element={<Planet/>} />
        <Route path="/reference" element={<Reference/>} />
        <Route path="/solarSystem" element={<SolarSystem/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
