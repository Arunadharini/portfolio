import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquareText, Github } from 'lucide-react';

export default function Navbar({ onAskAI }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-40 transition-all duration-700 ${
        scrolled ? 'bg-black/95 backdrop-blur-xl py-4 border-b-2 border-moon-gold/20' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        <a href="#" className="text-2xl font-black text-white tracking-tighter uppercase group">
          arunadharini<span className="text-moon-gold">.</span>
        </a>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-10 text-sm font-black uppercase tracking-[0.4em] text-white/40">
            <a href="#about" className="hover:text-moon-gold transition-all">About</a>
            <a href="#skills" className="hover:text-moon-gold transition-all">Core</a>
            <a href="#projects" className="hover:text-moon-gold transition-all">Archive</a>
          </div>
          
          <a 
            href="https://github.com/Arunadharini" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-white/40 hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>

          <motion.button 
            onClick={onAskAI}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 md:px-8 md:py-4 border-2 border-moon-gold text-moon-gold text-xs md:text-base font-black uppercase tracking-[0.2em] hover:bg-moon-gold hover:text-black transition-all flex items-center gap-3"
          >
            <MessageSquareText size={18} />
            <span className="hidden md:inline">Ask about Aruna</span>
            <span className="md:hidden">AI</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
