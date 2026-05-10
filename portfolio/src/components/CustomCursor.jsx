import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-moon-gold/40 pointer-events-none z-[100] flex items-center justify-center mix-blend-difference hidden md:flex"
      animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30, mass: 0.5 }}
    >
      <div className="w-1 h-1 bg-moon-gold rounded-full" />
    </motion.div>
  );
}
