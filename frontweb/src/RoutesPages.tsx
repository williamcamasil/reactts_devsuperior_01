import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const RoutesPages = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Catalog />} />
      </Routes>
    </Router>
  );
};

export default RoutesPages;
