import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Download, ChevronDown, ExternalLink } from 'lucide-react';

function RotatingShape() {
  const meshRef = useRef();
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.05;
    meshRef.current.rotation.y += delta * 0.08;
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, 0, -5]}>
        <torusKnotGeometry args={[10, 1.2, 128, 16]} />
        <meshStandardMaterial color="#E6C78B" wireframe opacity={0.15} transparent />
      </mesh>
    </Float>
  );
}

function RoleRotator({ roles }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="relative h-12 flex items-center justify-center overflow-hidden w-full max-w-[500px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute w-full text-center text-moon-gold font-light tracking-[0.4em] text-sm md:text-lg uppercase"
        >
          {roles[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} color="#E6C78B" intensity={1} />
          <Stars radius={100} depth={50} count={1000} factor={2} saturation={0} fade speed={0.5} />
          <RotatingShape />
        </Canvas>
      </div>

      {/* Refined Holographic Side Portal */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-0 pointer-events-none hidden lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 0.4, scale: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="relative w-48 h-48 rounded-full border-2 border-teal-400/30 p-1 bg-black/40 backdrop-blur-md shadow-[0_0_30px_rgba(45,212,191,0.1)]"
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.2),transparent_70%)] animate-pulse" />
          <div className="w-full h-full rounded-full overflow-hidden relative border border-white/10">
            <img src="/profile_hero.png" alt="Arunadharini" className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
          
          {/* Scanning Line Animation */}
          <motion.div 
            animate={{ y: [-20, 180, -20] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-[1px] bg-teal-400/40 shadow-[0_0_10px_rgba(45,212,191,0.5)] z-10"
          />
        </motion.div>
      </div>

      <div className="z-10 text-center flex flex-col items-center px-4 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-12 inline-block px-12 py-4 rounded-full border-2 border-moon-gold/30 text-moon-gold text-base md:text-lg font-black tracking-[0.8em] uppercase bg-moon-gold/5"
        >
          Arunadharini Seerthi Mathivanan / Intelligence
        </motion.div>
        
        <motion.h1 
          className="text-6xl sm:text-8xl md:text-9xl font-black mb-12 tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-white">arunadharini</span><span className="text-moon-gold">.</span>
        </motion.h1>

        <motion.div 
          className="w-full flex justify-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <RoleRotator roles={[
            'AI/ML Engineer', 
            'Full Stack Developer',
            'Problem Solver', 
            'Software Engineer'
          ]} />
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-10 mt-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <a href="#projects" className="w-full sm:w-auto px-14 py-5 rounded-full bg-moon-gold/5 border-2 border-moon-gold/20 text-moon-gold hover:bg-moon-gold hover:text-black transition-all duration-700 flex items-center justify-center gap-3 font-bold tracking-[0.2em] uppercase text-sm md:text-base">
            View Systems
          </a>
          <a 
            href="/Aruna_Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-14 py-5 rounded-full border-2 border-white/5 text-white/50 hover:text-white hover:border-white/20 transition-all duration-700 flex items-center justify-center gap-3 font-bold tracking-[0.2em] uppercase text-sm md:text-base"
          >
            Resume PDF
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-moon-gold/20 hover:text-moon-gold cursor-pointer transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
}
