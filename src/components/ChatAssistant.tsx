import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2, Minimize2, Maximize2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm your CodeNexa assistant. How can I help you grow your business today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [...messages, { role: 'user', content: userMessage }].map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        })),
        config: {
          systemInstruction: `You are 'Nexa', the AI assistant for CodeNexa (a subsidiary of Urbix). 
          CodeNexa is a professional technology agency that builds custom websites, mobile apps, and business software.
          
          YOUR VOICE/TONE:
          - Friendly, professional, and business-focused.
          - Avoid technical jargon. Instead of saying 'API integration', say 'connecting your tools'. Instead of 'Frontend/Backend', say 'what your customers see and how your business runs'.
          - Focus on ROI, saving time, and increasing profit.
          
          YOUR GOALS:
          1. Answer questions about CodeNexa's services (Web, Mobile Apps, Custom Software, AI Bots).
          2. Help business owners understand HOW technology can solve their specific problems (e.g., manual work, slow sales).
          3. Encourage users to visit the '/services' page or '/contact' page for a free consultation.
          
          COMPANY INFO:
          - Location: Brooklyn, NY, USA.
          - Specialty: Making tech simple for business owners.
          - Motto: "We build the future, one line of code at a time."`,
          temperature: 0.7,
        }
      });

      const assistantMessage = response.text || "I'm sorry, I'm having a bit of trouble connecting right now. Could you try again?";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I'm experiencing a technical hiccup. Please feel free to reach out via our contact page for immediate help!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? '80px' : 'calc(100vh - 120px)'
            }}
            style={{ maxHeight: isMinimized ? '80px' : '550px' }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`glass w-[calc(100vw-2rem)] sm:w-[350px] md:w-[400px] rounded-[2rem] shadow-2xl border-brand-orange/20 flex flex-col overflow-hidden mb-4 transition-all duration-300`}
          >
            {/* Header */}
            <div className="bg-brand-orange p-6 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={24} />
                </div>
                <div>
                  <div className="font-bold">Nexa Assistant</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-80">Online | Powered by AI</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            {!isMinimized && (
              <>
                <div 
                  ref={scrollRef}
                  className="flex-grow overflow-y-auto p-6 space-y-4 scroll-smooth"
                >
                  {messages.map((m, i) => (
                    <div 
                      key={i} 
                      className={`flex ${m.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                    >
                      <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                        m.role === 'assistant' 
                          ? 'bg-bg-secondary text-text-primary rounded-tl-none' 
                          : 'bg-brand-orange text-white rounded-tr-none'
                      }`}>
                        {m.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-bg-secondary p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                        <Loader2 size={14} className="animate-spin text-brand-orange" />
                        <span className="text-xs text-text-secondary italic">Nexa is thinking...</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Input */}
                <div className="p-4 border-t border-border-primary bg-bg-primary/50">
                  <div className="flex gap-2">
                    <input 
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Ask me anything..."
                      className="flex-grow glass border-none rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-brand-orange outline-none"
                    />
                    <button 
                      onClick={handleSend}
                      disabled={isLoading}
                      className="w-10 h-10 bg-brand-orange text-white rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                    >
                      <Send size={18} />
                    </button>
                  </div>
                  <p className="text-[9px] text-center text-text-secondary mt-3 uppercase tracking-tighter opacity-50">
                    Your AI partner for business growth
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-xl shadow-brand-orange/30 relative group"
      >
        <div className="absolute -inset-2 bg-brand-orange/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        {isOpen ? <X size={28} className="relative z-10" /> : <MessageSquare size={28} className="relative z-10" />}
      </motion.button>
    </div>
  );
}
