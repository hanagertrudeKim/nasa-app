import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './view/home/Home';
import MarsTravel from './view/MarsTravel';
import Moon from './view/Moon';
import Asteroid from './view/planet/asteroid/Asteroid';
import Earth from './view/planet/Earth';
import Planets from './view/planet/Planets';
import RefHome from './view/reference/RefHome';
import SolarSystem from './view/SolarSystem';
import NasaTechDetail from './view/reference/NasaTechDetail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/planet/earth" element={<Earth />} />
        <Route path="/planet/planets" element={<Planets />} />
        <Route path="/planet/asteroid" element={<Asteroid />} />
        <Route path="/marsTravel" element={<MarsTravel />} />
        <Route path="/moon" element={<Moon />} />
        <Route path="/reference" element={<RefHome />} />
        <Route path="/reference/nasaTech/:id" element={<NasaTechDetail />} />
        <Route path="/solarSystem" element={<SolarSystem />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
