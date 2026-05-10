import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: "DocuMind",
    status: "Ongoing",
    desc: "An intelligent document assistant using NLP to summarize files, extract insights, and answer queries. Designed to revolutionize document understanding through AI-powered information retrieval.",
    tags: ["Python", "NLP", "HTML/CSS", "JS"],
    github: "https://github.com/Arunadharini", demo: "#"
  },
  {
    title: "ThunAI",
    status: "Ongoing",
    desc: "Futuristic AI platform for mental health support, integrating personalized voice-customized chats and intelligent conversational responses for empathetic user engagement.",
    tags: ["Python", "AI/ML", "NLP", "JS"],
    github: "https://github.com/Arunadharini", demo: "#"
  },
  {
    title: "Smart Visitor System",
    desc: "Enterprise-level security system using facial recognition, real-time logging, and WhatsApp notifications via Twilio for secure remote approval and visitor management.",
    tags: ["Python", "OpenCV", "SQLite", "Twilio"],
    github: "https://github.com/Arunadharini", demo: "#"
  },
  {
    title: "Simple Skin Disease Classifier",
    desc: "A high-precision diagnostic tool using Machine Learning and Decision Tree classification to support early disease diagnosis through symptom-based data analysis.",
    tags: ["Python", "ML", "Decision Tree", "Pandas"],
    github: "https://github.com/Arunadharini", demo: "#"
  },
  {
    title: "Sentiment Analysis",
    desc: "NLP-powered pipeline using Twitter API to classify public feedback into emotional categories. Features a simple dashboard for real-time welfare system analysis and visualization.",
    tags: ["Twitter API", "NLP", "Python", "ML"],
    github: "https://github.com/Arunadharini", demo: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm font-light tracking-[0.6em] text-moon-gold/60 uppercase mb-6">Archive</h2>
          <h3 className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase">Featured Implementations</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover="hover"
              className={`relative glass-obsidian p-12 rounded-[2.5rem] border-2 ${i % 2 === 0 ? 'border-moon-gold/20 hover:border-4 hover:border-moon-gold' : 'border-moon-silver/20 hover:border-4 hover:border-moon-silver'} transition-all duration-500 flex flex-col h-[400px] group shadow-2xl overflow-hidden`}
            >
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="p-4 bg-white/5 text-moon-gold rounded-xl group-hover:bg-moon-gold group-hover:text-black transition-all duration-500 shadow-lg">
                  <FolderGit2 size={24} />
                </div>
                <div className="flex gap-6 text-lunar-gray">
                  <a href={project.github} className="hover:text-white transition-all hover:scale-110"><Github size={20} /></a>
                  <a href={project.demo} className="hover:text-moon-gold transition-all hover:scale-110"><ExternalLink size={20} /></a>
                </div>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 flex-grow">
                  <h3 className="text-xl md:text-2xl font-black text-white mb-4 tracking-tighter uppercase group-hover:text-moon-gold transition-colors duration-500">
                    {project.title}
                  </h3>
                  {project.status && (
                    <span className="w-fit text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 border-2 border-moon-gold text-moon-gold rounded-full bg-moon-gold/5 mb-6 inline-block">
                      {project.status}
                    </span>
                  )}
                  <p className="text-white/80 text-sm md:text-base mb-8 font-bold leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-white/10">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-black uppercase tracking-widest text-moon-gold bg-moon-gold/5 border border-moon-gold/20 px-4 py-2 rounded-lg group-hover:border-moon-gold transition-all duration-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
