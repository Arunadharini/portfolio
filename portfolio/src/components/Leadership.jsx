import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Presentation } from 'lucide-react';

const certs = [
  { title: "RHCSA Certified", icon: <Award /> },
  { title: "OpenCV Bootcamp", icon: <Presentation /> },
  { title: "Coding Saksham", icon: <Award /> },
  { title: "Python for Beginners", icon: <BookOpen /> },
];

const leadership = [
  { role: "Chair", org: "IEEE SSIT (2025)", desc: "Leading technical engagement and fostering community communication as the executive head." },
  { role: "President", org: "Business Club (2024-2025)", desc: "Directing strategic operations and coordinating high-level corporate events." },
  { role: "Internal Affairs Secretary", org: "IEEE SSIT (2024)", desc: "Managing cross-departmental communication and technical forum engagement." },
  { role: "Design Lead", org: "IEEE SSIT (2023)", desc: "Overseeing visual identity and creative implementation for technical initiatives." }
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <div>
            <h2 className="text-sm font-light tracking-[0.6em] text-moon-gold/60 uppercase mb-10">Leadership</h2>
            <div className="space-y-8">
              {leadership.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="glass-obsidian p-10 rounded-2xl border-2 border-moon-gold/20 flex items-start gap-8 hover:border-moon-gold/50 transition-all duration-700 group hover:-translate-y-2"
                >
                  <div className="p-4 bg-white/5 rounded-xl text-moon-gold group-hover:bg-moon-gold group-hover:text-black transition-all duration-500"><Users size={24} /></div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-moon-gold transition-colors">{item.role} <span className="text-moon-gold/60 font-bold text-xs ml-3">/ {item.org}</span></h3>
                    <p className="text-white/80 mt-4 text-sm md:text-base font-bold leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-light tracking-[0.6em] text-moon-gold/60 uppercase mb-10">Authority</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {certs.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass-obsidian p-10 rounded-2xl border-2 ${i % 2 === 0 ? 'border-moon-gold/20 hover:border-moon-gold/50' : 'border-moon-silver/20 hover:border-moon-silver/50'} transition-all duration-700 flex flex-col items-center justify-center text-center gap-6 group`}
                >
                  <div className={`p-6 bg-white/5 rounded-full ${i % 2 === 0 ? 'text-moon-gold' : 'text-moon-silver'} group-hover:scale-110 transition-transform duration-500`}>{cert.icon}</div>
                  <h3 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-white/60 group-hover:text-moon-gold transition-colors">{cert.title}</h3>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-12 glass-obsidian border-2 border-moon-gold/20 text-center relative overflow-hidden"
            >
              <h3 className="text-base font-bold text-moon-gold mb-6 flex items-center justify-center gap-4 uppercase tracking-widest">
                <BookOpen size={20} /> Research
              </h3>
              <p className="text-white font-bold text-sm md:text-base leading-relaxed max-w-md mx-auto">
                Ongoing study: <span className="italic text-moon-gold">“LLMs and Deep Learning for Social Good”</span>.
              </p>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
