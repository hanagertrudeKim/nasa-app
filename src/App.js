import {Routes, Route} from "react-router-dom"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./view/Home/Home"
import MarsTravel from "./view/MarsTravel";
import Moon from "./view/Moon";
import Asteroid from "./view/planet/Asteroid";
import Earth from "./view/planet/Earth";
import Planet from "./view/planet/Planet";
import Planets from "./view/planet/Planets";
import Reference from "./view/Reference";
import SolarSystem from "./view/SolarSystem";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/planet" element={<Planet/>} />
        <Route path="/planet/earth" element={<Earth/>} />
        <Route path="/planet/planets" element={<Planets/>} />
        <Route path="/planet/asteroid" element={<Asteroid/>} />
        <Route path="/marsTrevel" element={<MarsTravel/>} />
        <Route path="/moon" element={<Moon/>} />
        <Route path="/reference" element={<Reference/>} />
        <Route path="/solarSystem" element={<SolarSystem/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
