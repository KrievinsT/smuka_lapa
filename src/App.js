import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Contact from './contact';
import Portfolio from './portfolio';
import Astronaut from './Astronaut';
import DiskPlayer from './DiskPlayer';
import PurpleTape from './PurpleTape';
import SportsCar from './SportsCar';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Astronaut" element={<Astronaut />} />
          <Route path="/DiskPlayer" element={<DiskPlayer />} />
          <Route path="/PurpleTape" element={<PurpleTape />} />
          <Route path="/SportsCar" element={<SportsCar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
