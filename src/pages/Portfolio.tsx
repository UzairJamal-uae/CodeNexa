import { motion } from 'framer-motion';
import { ExternalLink, Star, Filter, Layout, Smartphone, Bot, Cpu } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoTestimonialSlider from '../components/VideoTestimonialSlider';
import { projects } from '../data/projects';

const categories = ["All", "Web", "Mobile", "AI", "Enterprise"];

const reviews = [
  { name: "Sarah Johnson", role: "CEO, TechFlow", comment: "CodeNexa transformed our outdated system into a high-performance machine. The AI integration alone saved us 40% in man-hours.", rating: 5 },
  { name: "Michael Chen", role: "Product Manager, Apex", comment: "The custom CRM they built for us is a game-changer. Finally, a tool that actually works with our workflow, not against it.", rating: 5 },
  { name: "Elena Rodriguez", role: "Founder, GreenLeaf", comment: "Exceptional communication and technical prowess. They delivered our telehealth platform 2 weeks ahead of schedule.", rating: 5 }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 min-h-screen bg-bg-primary">
      {/* Header */}
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none">
          <span className="text-[10rem] md:text-[20rem] lg:text-[25rem] font-display font-black">WORK</span>
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8"
        >
          Our <span className="text-gradient">Portfolio</span>
        </motion.h1>
        <p className="max-w-2xl mx-auto text-text-secondary text-base md:text-lg px-4">
          20+ successful projects across 4 continents. Explore how we've helped business owners save time and increase profits through reliable tools.
        </p>
      </section>

      {/* Filter */}
      <div className="max-w-7xl mx-auto px-6 mb-16 overflow-x-auto no-scrollbar">
        <div className="flex justify-center md:flex-wrap gap-3 md:gap-4 min-w-max md:min-w-0 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm transition-all flex items-center gap-2 whitespace-nowrap ${
                activeCategory === cat 
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20' 
                  : 'glass hover:bg-text-primary/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <SectionWrapper className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass rounded-[2.5rem] overflow-hidden group cursor-pointer border-transparent hover:border-brand-orange transition-all"
            >
              <Link to={`/portfolio/${project.id}`} className="block">
                <div className="h-64 relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand-orange flex items-center justify-center text-white">
                      <ExternalLink size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 glass rounded-full text-[10px] uppercase font-bold text-white backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold mb-1 group-hover:text-brand-orange transition-colors">{project.title}</h3>
                      <div className="text-brand-orange text-xs font-bold uppercase tracking-widest">{project.category}</div>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={12} className="text-brand-orange fill-brand-orange" />
                      ))}
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="mt-6 pt-6 border-t border-border-primary flex justify-between items-center text-xs">
                    <span className="text-text-secondary">Client: <span className="text-text-primary font-bold">{project.client}</span></span>
                    <button className="text-brand-orange font-bold hover:underline">View Case Study</button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Video Testimonials */}
      <SectionWrapper className="section-padding bg-bg-secondary/30 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-orange/[0.01] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Video Case Studies</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold">Real Impact, <span className="text-gradient">Real Voices</span></h3>
          </div>
          <VideoTestimonialSlider />
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="section-padding bg-bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 text-balance">
            <h2 className="text-4xl md:text-6xl font-display font-bold">What Business Owners <br /> <span className="text-gradient">Say About Us</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {reviews.map((rev, i) => (
              <div key={i} className="glass p-12 rounded-[3.5rem] relative">
                <div className="absolute -top-6 left-12 w-12 h-12 bg-brand-orange rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand-orange/30">
                  <Star fill="white" size={20} />
                </div>
                <p className="text-text-secondary italic mb-8 leading-relaxed">"{rev.comment}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center font-bold text-brand-orange">
                    {rev.name[0]}
                  </div>
                  <div>
                    <div className="font-bold">{rev.name}</div>
                    <div className="text-xs text-text-secondary">{rev.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
