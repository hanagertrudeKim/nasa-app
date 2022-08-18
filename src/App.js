import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './view/homepage/Home';
import MarsTravel from './view/MarsTravel';
import Gallery from './view/galleryPage/Gallery';
import Asteroid from './view/planet/asteroid/Asteroid';
import Planets from './view/planet/Planets';
import RefHome from './view/reference/RefHome';
import SolarSystem from './view/planet/SolarSystem';
import NasaTechDetail from './view/reference/NasaTechDetail';
import ImageDetail from './view/galleryPage/ImageDetail';
import VideoDetail from './view/galleryPage/VideoDetail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/planet/planets" element={<Planets />} />
        <Route path="/planet/asteroid" element={<Asteroid />} />
        <Route path="/marsTravel" element={<MarsTravel />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/imageDetail/:id" element={<ImageDetail />} />
        <Route path="/gallery/videoDetail/:id" element={<VideoDetail />} />
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
