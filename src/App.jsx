import { HashRouter as Router } from 'react-router-dom'; // ⬅️ CAMBIADO
import Navbar from "./components/Navbar";
import AnimatedRoutes from './AnimatedRoutes';

function App() {
  return (
    <>
      <div className="modern-bg-grid" />
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
