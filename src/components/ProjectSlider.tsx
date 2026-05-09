import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectSlider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1)),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          
          {/* Main Visual */}
          <div className="w-full lg:w-3/5 relative aspect-[16/10] md:aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden glass group">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7, ease: "circOut" }}
                className="absolute inset-0"
              >
                <img 
                  src={projects[index].image} 
                  alt={projects[index].title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-8 left-8 right-8 z-10">
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">{projects[index].category}</div>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">{projects[index].title}</h3>
              </motion.div>
            </div>
            
            {/* Nav Arrows Floating - Desktop */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 z-20 flex justify-between pointer-events-none hidden md:flex">
              <button 
                onClick={prev}
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all pointer-events-auto shadow-2xl"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={next}
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all pointer-events-auto shadow-2xl"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Details & Controls */}
          <div className="w-full lg:w-2/5 space-y-8 text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="inline-block p-1 rounded-2xl bg-brand-orange/10 border border-brand-orange/20">
                  <div className="px-4 py-1 text-[10px] font-bold uppercase tracking-tighter text-brand-orange">Project Focus</div>
                </div>
                <h4 className="text-2xl md:text-3xl font-display font-bold">{projects[index].title} Success Story</h4>
                <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                  {projects[index].desc} We helped our client achieve measurable results through a tailored digital approach.
                </p>
                <Link 
                  to={`/portfolio/${projects[index].id}`} 
                  className="inline-flex items-center gap-2 text-brand-orange font-bold group hover:underline"
                >
                  View full case study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="flex gap-2">
                {projects.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setIndex(i)}
                    className={`h-2 transition-all rounded-full ${index === i ? 'w-10 bg-brand-orange' : 'w-2 bg-text-primary/10'}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="pt-8">
              <Link 
                to="/portfolio" 
                className="w-full md:w-auto px-10 py-5 bg-brand-orange text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-brand-orange/30 inline-flex items-center justify-center gap-3"
              >
                Explore All Projects
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
