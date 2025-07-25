import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import AnimatedRoutes from './AnimatedRoutes';

function App() {
  return (
    <>
      {/* Fondo global con gradiente y grid moderno */}
      <div className="modern-bg-grid" />
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
