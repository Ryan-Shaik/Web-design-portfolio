import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <About />
    </div>
  );
}

export default App;