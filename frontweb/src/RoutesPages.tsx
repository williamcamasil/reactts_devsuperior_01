import Navbar from './components/Navbar';
import Before from './pages/Before';
import After from './pages/After';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const RoutesPages = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/before" element={<Before />} />
        <Route path="/after" element={<After />} />
      </Routes>
    </Router>
  );
};

export default RoutesPages;
