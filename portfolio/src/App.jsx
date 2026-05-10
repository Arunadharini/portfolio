import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Leadership from './components/Leadership';
import LeetCode from './components/LeetCode';
import Chatbot from './components/Chatbot';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" onComplete={() => setLoading(false)} />
        ) : (
          <>
            <main className="relative w-full min-h-screen bg-black selection:bg-moon-gold/30 selection:text-white overflow-x-hidden" key="main">
              <Navbar onAskAI={() => setIsChatOpen(true)} />
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Timeline />
              <Leadership />
              <LeetCode />
              <Chatbot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
              <Contact />
            </main>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
