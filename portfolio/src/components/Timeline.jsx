import { motion } from 'framer-motion';

const timelineData = [
  { year: "2021", items: ["Completed 10th – RD International School (90.6%)"] },
  { year: "2023", items: ["Completed 12th – RD International School (86%)", "Started BE CSE at KPRIET", "Design Lead – IEEE SSIT"] },
  { year: "2024", items: ["Runner-up – TANCAM Design Hackathon (Rs. 50,000 Award)", "Internal Affairs Secretary – IEEE SSIT", "Qualified Finalist – EDII-TN 2024", "Participant – IEEE Xtreme & e-Yantra"] },
  { year: "2025", items: ["Chair – IEEE SSIT (Appointed 2025)", "President – Business Club (2024-2025)", "Shortlisted – VIKASYA 2025 (Top 8 Finalist)", "Web Design Internship – Frontline (4 Weeks)"] }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm font-light tracking-[0.6em] text-moon-gold/60 uppercase mb-6">History</h2>
          <h3 className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase">Temporal Log</h3>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] bg-white/5 transform md:-translate-x-1/2 overflow-hidden shadow-[0_0_20px_rgba(188,198,204,0.2)]">
             <motion.div 
               className="w-full h-full bg-moon-silver origin-top shadow-[0_0_15px_rgba(188,198,204,0.5)]"
               initial={{ scaleY: 0 }}
               whileInView={{ scaleY: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5 }}
             />
          </div>

          {timelineData.map((data, index) => (
            <div key={index} className="relative z-10 mb-24">
              <div className="flex items-center justify-start md:justify-center mb-12">
                <motion.div 
                   initial={{ scale: 0 }}
                   whileInView={{ scale: 1 }}
                   viewport={{ once: true }}
                   className={`w-10 h-10 bg-black border-2 ${index % 2 === 0 ? 'border-moon-gold' : 'border-moon-silver'} flex items-center justify-center z-20 absolute left-[0.4rem] md:left-1/2 transform md:-translate-x-1/2`}
                >
                  <div className={`w-2 h-2 ${index % 2 === 0 ? 'bg-moon-gold' : 'bg-moon-silver'}`} />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-black text-moon-gold ml-24 md:ml-0 md:absolute md:left-1/2 md:translate-x-20 tracking-tighter gold-glow">
                  {data.year}
                </h3>
              </div>
              
              <div className="ml-24 md:ml-0 flex flex-col md:flex-row justify-center relative w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                  {data.items.map((item, i) => {
                    const isLeft = i % 2 === 0;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={`p-10 glass-obsidian border-2 border-moon-gold/30 hover:border-moon-gold transition-all duration-700 shadow-xl ${
                          isLeft ? 'md:mr-12 md:text-right' : 'md:ml-12 md:col-start-2'
                        }`}
                      >
                        <p className="text-white text-base md:text-lg font-bold tracking-wide uppercase">{item}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
