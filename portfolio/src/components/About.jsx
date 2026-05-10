import { motion } from 'framer-motion';
import { Brain, Code, Lightbulb, Users } from 'lucide-react';

const cards = [
  { icon: <Brain size={28} />, title: "AI Engineering", desc: "Developing advanced neural networks and predictive systems." },
  { icon: <Code size={28} />, title: "Algorithms", desc: "Crafting optimized solutions for complex computational logic." },
  { icon: <Lightbulb size={28} />, title: "Strategy", desc: "Designing scalable architectures with a focus on innovation." },
  { icon: <Users size={28} />, title: "Leadership", desc: "Spearheading technical teams towards collective objectives." },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-black border-y-2 border-white/5">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-center mb-24"
        >
          <h2 className="text-sm font-light tracking-[0.6em] text-moon-gold/60 uppercase mb-6">Profile</h2>
          <h3 className="text-xl md:text-2xl font-black text-white mb-12 tracking-tighter uppercase">About the Engineer</h3>
          <p className="text-white/90 max-w-4xl mx-auto text-base md:text-lg leading-relaxed font-medium px-8 py-10 glass-obsidian border-2 border-moon-gold/30 shadow-2xl rounded-2xl">
            I am a <span className="text-white font-medium">Computer Science Engineering student</span> specialized in Artificial Intelligence and Machine Learning. My approach combines rigorous academic knowledge with a passion for building systems that define the future. I believe in the elegance of code and the power of data-driven intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="glass-obsidian p-10 rounded-2xl border-2 border-white/5 hover:border-moon-gold/20 transition-all duration-700 group"
            >
              <div className="mb-8 text-moon-gold group-hover:scale-110 transition-transform duration-500">{card.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-wide">{card.title}</h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed font-bold">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
