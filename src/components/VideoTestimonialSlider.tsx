import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ChevronLeft, ChevronRight, Quote, User, X, Star } from 'lucide-react';
import michelet from '../assets/michelet.png';

const testimonials = [
  {
    id: 1,
    name: "Michele Ross",
    role: "CEO of MKM Vault",
    videoThumbnail: michelet,
    quote: "CodeNexa didn't just build us a Website, they gave us a proper Brand Identity. The whole experience was eye-opening.",
    videoUrl: "/videos/michael.mp4" // Placeholder video
  },
  {
    id: 2,
    name: "Dr. Amara Malik",
    role: "Founder, CareFlow TeleHealth",
    videoThumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    quote: "As a medical professional, security was my #1 concern. CodeNexa's HIPAA-compliant platform is seamless and my patients love it.",
    videoUrl: "https://vjs.zencdn.net/v/oceans.mp4"
  },
  {
    id: 3,
    name: "Robert Stirling",
    role: "CEO, Stirling Real Estate",
    videoThumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    quote: "The AI bot they built handles my property inquiries while I sleep. It's like having a 24/7 staff member for a fraction of the cost.",
    videoUrl: "https://vjs.zencdn.net/v/oceans.mp4"
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "Marketing Head, Nova Fashion",
    videoThumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    quote: "Our website traffic doubled within 3 months of the SEO/AEO optimization. They really understand the business side of tech.",
    videoUrl: "https://vjs.zencdn.net/v/oceans.mp4"
  }
];

export default function VideoTestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  
  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative w-full overflow-hidden py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 flex justify-between pointer-events-none px-2 md:px-0">
          <button 
            onClick={prev}
            className="w-10 h-10 md:w-14 md:h-14 glass rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all pointer-events-auto md:-translate-x-1/2 shadow-xl"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="w-10 h-10 md:w-14 md:h-14 glass rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all pointer-events-auto md:translate-x-1/2 shadow-xl"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex gap-8 overflow-visible px-4 md:px-0">
          <AnimatePresence mode="popLayout">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="w-full flex flex-col lg:flex-row gap-8 md:gap-12 items-center"
            >
              {/* Video Player Card */}
              <div className="w-full lg:w-3/5 h-[300px] md:h-[450px] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden glass group">
                {isPlaying === testimonials[currentIndex].id ? (
                  <div className="w-full h-full bg-black flex items-center justify-center overflow-hidden">
                    <video 
                      autoPlay 
                      controls 
                      className="w-full h-full object-cover"
                      src={testimonials[currentIndex].videoUrl}
                    />
                    <button 
                      onClick={() => setIsPlaying(null)}
                      className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-4 glass rounded-full hover:bg-red-500 transition-colors text-white z-30"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ) : (
                  <>
                    <img 
                      src={testimonials[currentIndex].videoThumbnail} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    <button 
                      onClick={() => setIsPlaying(testimonials[currentIndex].id)}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-2xl shadow-brand-orange/40 hover:scale-110 transition-transform animate-float"
                    >
                      <Play fill="white" size={28} className="md:size-8" />
                    </button>
                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-10">
                      <div className="flex items-center gap-1 mb-2">
                        {[1,2,3,4,5].map(s => <Star key={s} size={12} className="fill-brand-orange text-brand-orange" />)}
                      </div>
                      <div className="text-lg md:text-xl font-display font-bold">Video Success Story</div>
                    </div>
                  </>
                )}
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-2/5 space-y-6 md:space-y-8 text-center lg:text-left">
                <Quote size={48} className="text-brand-orange/20 mx-auto lg:mx-0 md:size-64" />
                <p className="text-xl md:text-3xl font-display font-bold leading-tight italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div className="flex items-center gap-4 md:gap-6 justify-center lg:justify-start">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl glass p-1 border-brand-orange/20 shrink-0">
                    <img 
                      src={testimonials[currentIndex].videoThumbnail} 
                      className="w-full h-full object-cover rounded-lg md:rounded-xl"
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold">{testimonials[currentIndex].name}</h4>
                    <p className="text-brand-orange text-[10px] md:text-sm font-bold uppercase tracking-widest">{testimonials[currentIndex].role}</p>
                  </div>
                </div>

                <div className="flex gap-2 justify-center lg:justify-start">
                  {testimonials.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setCurrentIndex(i)}
                      className={`h-1.5 transition-all rounded-full ${currentIndex === i ? 'w-8 bg-brand-orange' : 'w-2 bg-text-primary/10'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
