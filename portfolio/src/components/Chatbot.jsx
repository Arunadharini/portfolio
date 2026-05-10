import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const INITIAL_MESSAGE = {
  role: 'bot',
  content: "Greetings. I am the Arun-AI Interface. How may I assist you in exploring Aruna's engineering journey today?"
};

const KNOWLEDGE_BASE = {
  "who are you": "Arunadharini Seerthi Mathivanan is an AI/ML developer and a CS Engineering student at KPRIET (CGPA: 8.39). She is a versatile builder with a flawless academic record and strong leadership experience.",
  "projects": "Aruna's portfolio features 5 high-impact systems: 1. DocuMind (NLP assistant), 2. ThunAI (Mental health platform), 3. Smart Visitor System (Facial recognition), 4. Simple Skin Disease Classifier using ML, and 5. Sentiment Analysis for Public Welfare using Twitter API.",
  "skills": "Her technical stack is robust: Programming (Python, Java, JavaScript), Web Development (HTML, CSS, React), AI/ML (Machine Learning, NLP, Decision Trees, Sentiment Analysis, Computer Vision), and Tools (Git, GitHub, SQLite, Flask, OpenCV).",
  "contact": "You can reach Aruna directly at arunadharinis@gmail.com, via her LinkedIn (https://www.linkedin.com/in/arunadharini-seerthimathivanan-619016295/), via her GitHub (https://github.com/Arunadharini), or via the contact terminal at the bottom of this portfolio.",
  "linkedin": "Connect with Aruna on LinkedIn here: https://www.linkedin.com/in/arunadharini-seerthimathivanan-619016295/",
  "github": "Explore Aruna's technical repositories and source code on GitHub here: https://github.com/Arunadharini",
  "leadership": "Aruna is a proven leader: Chair of IEEE SSIT (2025), President of the Business Club (2024-2025), and previously Design Lead (2023) and Internal Affairs Secretary (2024) at IEEE SSIT.",
  "achievements": "Significant wins: Runner-up in TANCAM Design Hackathon 2024 (Rs. 50,000), 3rd Place in LOGIX'24 Hotseat, Finalist in EDII-TN 2024, and Shortlisted Top 8 in VIKASYA 2025. She also participated in e-Yantra and IEEE Xtreme 2024.",
  "academics": "Aruna maintains a flawless record: CGPA of 8.39 with NIL history of arrears. She scored 90.6% in 10th (2021) and 86% in 12th (2023) at RD International School.",
  "activities": "She is active in Blog Writing, the Dance Club, and the Radio Club, balancing technical depth with creative expression.",
  "education": "She is pursuing her BE in Computer Science and Engineering at KPRIET, focused on AI research and building real-world impactful systems."
};

const SUGGESTIONS = ["Top Projects?", "Core Skills?", "Leadership Roles?", "Contact Info?"];

export default function Chatbot({ isOpen, setIsOpen }) {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (text) => {
    const query = text || inputValue;
    if (!query.trim()) return;

    setMessages(prev => [...prev, { role: 'user', content: query }]);
    setInputValue('');
    setIsTyping(true);

    // AI Logic Simulation
    setTimeout(() => {
      const normalizedQuery = query.toLowerCase();
      let response = "I'm still learning about that specific detail. You can establish a direct link with Aruna via the Contact section for a more detailed response.";

      for (const [key, value] of Object.entries(KNOWLEDGE_BASE)) {
        if (normalizedQuery.includes(key.split('?')[0].toLowerCase())) {
          response = value;
          break;
        }
      }

      setMessages(prev => [...prev, { role: 'bot', content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-y-0 right-0 z-[60] flex items-center pointer-events-none">

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-[450px] h-full bg-black border-l-4 border-moon-gold flex flex-col shadow-2xl pointer-events-auto overflow-hidden"
            >
              {/* Avatar Background */}
              <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.4, 0.3]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/ai_soul.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.1),transparent_70%)]" />
              </div>

              {/* Header */}
              <div className="relative z-10 p-10 border-b-2 border-moon-gold/10 flex justify-between items-center bg-black/40 backdrop-blur-xl">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl border-2 border-teal-400/50 p-1 relative overflow-hidden bg-black/50">
                    <img src="/ai_soul.png" alt="AI Soul" className="w-full h-full object-cover rounded-xl" />
                    <div className="absolute bottom-1 right-1 w-3 h-3 bg-teal-400 rounded-full border-2 border-black animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white uppercase tracking-widest">Ask Arun AI</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-teal-400 uppercase tracking-widest font-black">Neural Interface Online</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-3 hover:text-moon-gold transition-colors text-white/40 bg-white/5 rounded-full">
                  <X size={24} />
                </button>
              </div>

              {/* Messages */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-8 custom-scrollbar bg-black/40">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`max-w-[90%] p-6 rounded-3xl text-base font-bold leading-relaxed shadow-2xl ${
                      msg.role === 'bot' 
                      ? 'bg-black/60 text-white border-2 border-teal-400/20 backdrop-blur-md rounded-tl-none' 
                      : 'bg-moon-gold text-black border-2 border-moon-gold rounded-tr-none shadow-[0_0_20px_rgba(230,199,139,0.1)]'
                    }`}>
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white/5 p-6 rounded-3xl rounded-tl-none border-2 border-white/10">
                      <div className="flex gap-2">
                        <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 h-2 bg-moon-gold rounded-full" />
                        <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} className="w-2 h-2 bg-moon-gold rounded-full" />
                        <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }} className="w-2 h-2 bg-moon-gold rounded-full" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Suggestions */}
              <div className="px-10 py-6 bg-black/80 border-t-2 border-white/5">
                <div className="flex flex-wrap gap-3">
                  {SUGGESTIONS.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(s)}
                      className="text-xs font-black uppercase tracking-widest bg-white/5 hover:bg-moon-gold text-white/60 hover:text-black border-2 border-white/10 hover:border-moon-gold px-5 py-2.5 rounded-xl transition-all"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-10 bg-black">
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                  className="flex items-center gap-6 p-3 glass-obsidian border-2 border-moon-gold/20 rounded-3xl"
                >
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="TRANSMIT MESSAGE..."
                    className="flex-1 bg-transparent border-none focus:outline-none text-white text-sm font-bold tracking-widest placeholder-white/20 px-4"
                  />
                  <button 
                    type="submit"
                    className="p-5 bg-moon-gold rounded-2xl text-black hover:scale-110 transition-transform shadow-lg shadow-moon-gold/20"
                  >
                    <Send size={24} />
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
