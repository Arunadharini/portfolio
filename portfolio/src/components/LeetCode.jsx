import { motion } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';

export default function LeetCode() {
  return (
    <section id="leetcode" className="py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl mx-auto glass-obsidian rounded-[3rem] p-16 border-2 border-moon-gold/30 hover:border-moon-gold transition-all duration-1000 text-center relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-moon-gold/30 to-transparent" />
          
          <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-moon-gold border border-white/10 mx-auto mb-10 group-hover:scale-110 transition-transform duration-700">
            <Code2 size={40} />
          </div>
          
          <h3 className="text-xl font-black text-white mb-4 tracking-tighter uppercase">Algorithm Logic</h3>
          <p className="text-lunar-gray text-sm mb-12 font-light max-w-xl mx-auto">Mastery of complex computational challenges and systematic data structure optimization.</p>
          
          <div className="text-6xl font-black text-white mb-12 tracking-tighter tabular-nums flex items-center justify-center gap-2">
            100<span className="text-moon-gold">+</span>
          </div>

          <a 
            href="https://leetcode.com/u/Arunadharini/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-6 px-12 py-4 bg-moon-gold/5 hover:bg-moon-gold text-moon-gold hover:text-black border-2 border-moon-gold/20 rounded-full transition-all duration-500 font-bold tracking-[0.3em] uppercase text-sm"
          >
            Terminal Access <ExternalLink size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
