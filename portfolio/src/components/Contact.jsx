import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github, Heart } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contact" className="relative pt-32 pb-16 z-10 border-t border-white/5 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          
          <div>
            <h2 className="text-sm font-light tracking-[0.6em] text-moon-gold/60 uppercase mb-6">Contact</h2>
            <h3 className="text-xl md:text-2xl font-black text-white mb-10 tracking-tighter uppercase">Establish Link</h3>
            <p className="text-white/80 mb-12 max-w-md text-base md:text-lg font-bold leading-relaxed">
              Available for technical consultations and research collaborations.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:arunadharinis@gmail.com" className="flex items-center gap-8 text-white hover:text-moon-gold transition-all p-8 glass-obsidian rounded-2xl border-2 border-moon-gold/20 hover:border-moon-gold w-fit group shadow-2xl">
                <div className="p-4 bg-moon-gold/10 rounded-xl text-moon-gold group-hover:bg-moon-gold group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(230,199,139,0.2)]"><Mail size={24} /></div>
                <span className="text-lg tracking-[0.2em] font-bold uppercase">arunadharinis@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/arunadharini-seerthimathivanan-619016295/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 text-white/60 hover:text-white transition-all p-8 glass-obsidian rounded-2xl border-2 border-moon-gold/20 hover:border-moon-gold w-fit group shadow-2xl">
                <div className="p-4 bg-white/5 rounded-xl text-white group-hover:bg-white group-hover:text-black transition-all duration-500"><Linkedin size={24} /></div>
                <span className="text-lg tracking-[0.2em] font-bold uppercase">linkedin/arunadharini</span>
              </a>
              <a href="https://github.com/Arunadharini" target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 text-white/60 hover:text-white transition-all p-8 glass-obsidian rounded-2xl border-2 border-moon-gold/20 hover:border-moon-gold w-fit group shadow-2xl">
                <div className="p-4 bg-white/5 rounded-xl text-white group-hover:bg-white group-hover:text-black transition-all duration-500"><Github size={24} /></div>
                <span className="text-lg tracking-[0.2em] font-bold uppercase">github/arunadharini</span>
              </a>
            </div>
          </div>

          <motion.form 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-obsidian p-12 rounded-[2rem] border-2 border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-moon-gold/[0.02] rounded-bl-full" />
            <h3 className="text-lg font-bold text-white mb-10 tracking-tight uppercase">Direct Terminal</h3>
            
            <div className="space-y-8">
              <div>
                <input 
                  type="text" 
                  placeholder="NAME" 
                  className="w-full bg-transparent border-b-2 border-white/10 rounded-none px-0 py-6 text-white focus:outline-none focus:border-moon-gold transition-all placeholder-white/20 tracking-[0.3em] text-sm"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="EMAIL" 
                  className="w-full bg-transparent border-b-2 border-white/10 rounded-none px-0 py-6 text-white focus:outline-none focus:border-moon-gold transition-all placeholder-white/20 tracking-[0.3em] text-sm"
                />
              </div>
              <div>
                <textarea 
                  rows="4" 
                  placeholder="MESSAGE" 
                  className="w-full bg-transparent border-b-2 border-white/10 rounded-none px-0 py-6 text-white focus:outline-none focus:border-moon-gold transition-all placeholder-white/20 tracking-[0.3em] text-sm resize-none custom-scrollbar"
                ></textarea>
              </div>
              <button 
                type="button" 
                className="w-full py-6 rounded-full bg-white/5 hover:bg-moon-gold text-moon-gold hover:text-black border-2 border-moon-gold/20 transition-all duration-500 font-bold tracking-[0.4em] uppercase text-sm"
              >
                Send Message
              </button>
            </div>
          </motion.form>
          
        </div>

        <div className="pt-16 border-t-2 border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-sm tracking-[0.4em] uppercase flex items-center gap-3">
            Minimalist System <span className="text-moon-gold">/</span> ARUNADHARINI
          </p>
          <p className="text-white/20 text-sm tracking-[0.4em] uppercase">
            © 2026 / ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
