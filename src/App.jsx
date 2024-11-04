import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutPage from './components/Aboutpage';
import DestinationsPage from './components/Destinationspage';
import DarEsSalaamPage from './components/DarEsSalaampage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/destinations/dar" element={<DarEsSalaamPage />} />
      </Routes>
    </Router>
  );
}

export default App;
