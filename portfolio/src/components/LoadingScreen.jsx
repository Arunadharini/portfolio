import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-12"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-sm text-center">
        <motion.div 
          className="text-[10px] font-light text-moon-gold tracking-[0.8em] uppercase mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Initializing Aruna.net
        </motion.div>
        
        <div className="relative w-full h-[1px] bg-white/5 mb-6">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-moon-gold"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="text-[10px] font-mono text-white/20 tracking-widest tabular-nums">
          {progress}%
        </div>
      </div>
    </motion.div>
  );
}
