import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Html } from '@react-three/drei';
import { useRef, useMemo } from 'react';

const skills = [
  { name: "Machine Learning", category: "AI", color: "#E6C78B" },
  { name: "NLP", category: "AI", color: "#E6C78B" },
  { name: "Python", category: "Core", color: "#E6C78B" },
  { name: "JavaScript", category: "Web", color: "#BCC6CC" },
  { name: "Java", category: "Core", color: "#BCC6CC" },
  { name: "Computer Vision", category: "AI", color: "#E6C78B" },
  { name: "OpenCV", category: "Tool", color: "#BCC6CC" },
  { name: "SQLite", category: "Database", color: "#BCC6CC" },
  { name: "HTML/CSS", category: "UI", color: "#BCC6CC" },
  { name: "Git & GitHub", category: "Tool", color: "#BCC6CC" },
  { name: "Decision Trees", category: "ML", color: "#E6C78B" },
  { name: "Sentiment Analysis", category: "AI", color: "#E6C78B" },
];

function SkillNode({ skill, index, total }) {
  const meshRef = useRef();
  
  const position = useMemo(() => {
    const phi = Math.acos(1 - 2 * (index + 0.5) / total);
    const theta = Math.PI * (1 + Math.sqrt(5)) * index;
    const r = 5.5; // Slightly larger sphere to accommodate more skills
    return [
      r * Math.cos(theta) * Math.sin(phi),
      r * Math.sin(theta) * Math.sin(phi),
      r * Math.cos(phi)
    ];
  }, [index, total]);

  return (
    <Float speed={1.5} rotationIntensity={0.5}>
      <mesh position={position} ref={meshRef}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color={skill.color} emissive={skill.color} emissiveIntensity={0.3} />
        <Html distanceFactor={10} center>
          <div className="px-6 py-3 glass-obsidian border-2 border-moon-gold/30 rounded-2xl text-[12px] md:text-sm font-black text-white whitespace-nowrap shadow-2xl group cursor-default hover:border-moon-gold transition-all">
            <span className="text-moon-gold opacity-70 mr-2">/</span>
            {skill.name}
          </div>
        </Html>
      </mesh>
    </Float>
  );
}

function NeuralNetwork() {
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < 40; i++) {
      p.push([
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      ]);
    }
    return p;
  }, []);

  return (
    <group>
      {points.map((pos, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh position={pos}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshStandardMaterial color="#BCC6CC" emissive="#BCC6CC" emissiveIntensity={1} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function SkillCloud() {
  const groupRef = useRef();
  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.05;
    groupRef.current.rotation.x += delta * 0.02;
  });

  return (
    <group ref={groupRef}>
      <NeuralNetwork />
      {skills.map((skill, i) => (
        <SkillNode key={i} skill={skill} index={i} total={skills.length} />
      ))}
      <mesh>
        <sphereGeometry args={[4, 64, 64]} />
        <meshBasicMaterial color="#E6C78B" wireframe opacity={0.03} transparent />
      </mesh>
    </group>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 h-screen min-h-[900px] flex flex-col bg-black">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-base font-light tracking-[0.6em] text-moon-gold/60 uppercase mb-6">Intelligence</h2>
        <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Technical Core</h3>
      </div>
      
      <div className="flex-1 w-full relative">
        <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#E6C78B" />
          <SkillCloud />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
        </Canvas>
      </div>
    </section>
  );
}
