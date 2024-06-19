import './App.css';
import { Route, Routes } from "react-router-dom";
import HeroSection from './components/HeroSection';
import Home from './Pages/Home';
import Footer from './components/Footer';
import MissionAndVision from './Pages/MissionAndVision'
import Goals from './Pages/Goals';
import Objectives from './Pages/Objectives';
import Currentscenario from './Pages/Currentscenario';
import Faculty from './Pages/Faculty';
import Team from './Pages/Team';
import Staff from './Pages/Staff';
import HeadDep from './Pages/HeadDep';
import HomeButton from './components/HomeButton';
import HorizontalScrollGallery from './components/HorizontalScrollGallery';

function App() {
  return (
    <>
    <HeroSection/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/missionAndVision" element={<MissionAndVision/>} />
        <Route path="/goals" element={<Goals/>} />
        <Route path="/Objectives" element={<Objectives/>} />
        <Route path="/Currentscenario" element={<Currentscenario/>} />
        <Route path="/Faculty" element={<Faculty/>} />
        <Route path="/Team" element={<Team/>} />
        <Route path="/Staff" element={<Staff/>} />
        <Route path="/HaedDepartment" element={<HeadDep/>} />
        <Route path="/HorizontalScrollGallery" element={<HorizontalScrollGallery/>} />
      </Routes>
      <Footer/>
      <HomeButton/>
    </>
  );
}

export default App;
