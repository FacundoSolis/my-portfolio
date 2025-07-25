import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const pageFade = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4,0,0.2,1] } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.35, ease: [0.4,0,0.2,1] } }
};

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div {...pageFade} className="page-fade"><Intro /></motion.div>
        } />
        <Route path="/experience" element={
          <motion.div {...pageFade} className="page-fade"><Experience /></motion.div>
        } />
        <Route path="/skills" element={
          <motion.div {...pageFade} className="page-fade"><Skills /></motion.div>
        } />
        <Route path="/projects" element={
          <motion.div {...pageFade} className="page-fade"><Projects /></motion.div>
        } />
        <Route path="/contact" element={
          <motion.div {...pageFade} className="page-fade"><Contact /></motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}
