import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { PortfolioHome } from './pages/PortfolioHome';
import { VRFashion } from './pages/VRFashion';
import { HotelDashboard } from './pages/HotelDashboard';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/vr-fashion" element={<VRFashion />} />
        <Route path="/hotel-dashboard" element={<HotelDashboard />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
