import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, Award, Users, 
  ExternalLink, Calendar, Briefcase, Star,
  LineChart, Workflow, Target, Zap, Clock
} from 'lucide-react';
import { useEffect } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-brand-orange hover:underline font-bold">Return to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent" />
        </div>
        
        <div className="container max-w-7xl mx-auto px-6 relative z-10 pb-16">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-white glass px-6 py-2 rounded-full mb-8 hover:bg-brand-orange transition-all">
            <ArrowLeft size={18} /> Back to Portfolio
          </Link>
          
          <div className="max-w-4xl">
            <div className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs mb-4">{project.category}</div>
            <h1 className="text-5xl md:text-8xl font-display font-bold leading-none mb-8">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4">
              {project.tags.map(tag => (
                <span key={tag} className="px-5 py-2 glass rounded-full text-xs font-bold uppercase tracking-wider text-white">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="container max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass p-6 rounded-3xl border-white/5 flex flex-col items-center text-center">
            <Briefcase className="text-brand-orange mb-3" size={24} />
            <div className="text-[10px] uppercase font-bold text-text-secondary tracking-widest mb-1">Client</div>
            <div className="font-bold">{project.client}</div>
          </div>
          <div className="glass p-6 rounded-3xl border-white/5 flex flex-col items-center text-center">
            <Star className="text-brand-orange mb-3" size={24} />
            <div className="text-[10px] uppercase font-bold text-text-secondary tracking-widest mb-1">Rating</div>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={10} className="fill-brand-orange text-brand-orange" />
              ))}
            </div>
          </div>
          <div className="glass p-6 rounded-3xl border-white/5 flex flex-col items-center text-center">
            <Calendar className="text-brand-orange mb-3" size={24} />
            <div className="text-[10px] uppercase font-bold text-text-secondary tracking-widest mb-1">Timeline</div>
            <div className="font-bold">8-12 Weeks</div>
          </div>
          <div className="glass p-6 rounded-3xl bg-brand-orange text-white flex flex-col items-center text-center">
            <ExternalLink className="mb-3" size={24} />
            <div className="text-[10px] uppercase font-bold text-white/70 tracking-widest mb-1">Status</div>
            <div className="font-bold">LIVE</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <SectionWrapper className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-8 space-y-20">
            {/* Overview */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-display font-bold">Project Overview</h2>
              <p className="text-xl text-text-secondary leading-relaxed font-light italic border-l-4 border-brand-orange pl-8">
                "{project.fullDesc}"
              </p>
            </div>

            {/* Challenge vs Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="glass p-10 rounded-[3rem] border-brand-orange/5 bg-red-400/5">
                <div className="w-12 h-12 rounded-2xl bg-red-400/10 flex items-center justify-center mb-6">
                  <Target className="text-red-400" size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">The Challenge</h3>
                <p className="text-text-secondary leading-relaxed">{project.challenge}</p>
              </div>
              <div className="glass p-10 rounded-[3rem] border-brand-orange/5 bg-brand-orange/5">
                <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-6">
                  <Zap className="text-brand-orange" size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Our Solution</h3>
                <p className="text-text-secondary leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Results Grid */}
            <div className="space-y-8">
              <h3 className="text-2xl font-display font-bold flex items-center gap-3">
                <LineChart className="text-brand-orange" size={24} />
                Key Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.results.map((result, i) => (
                  <div key={i} className="glass p-8 rounded-[2rem] border-brand-orange/10 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-brand-orange transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
                    <CheckCircle2 className="text-brand-orange mb-4" size={24} />
                    <div className="text-lg font-bold leading-tight">{result}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Features */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8">
            <div className="glass p-8 md:p-10 rounded-[3rem] border-brand-orange/10">
              <h3 className="text-xl font-display font-bold mb-10 flex items-center gap-3">
                <Workflow className="text-brand-orange" size={20} />
                Core Features
              </h3>
              <ul className="space-y-6">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-orange transition-colors">
                      <CheckCircle2 size={12} className="text-brand-orange group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass p-8 md:p-10 rounded-[3rem] bg-brand-orange text-white">
              <h3 className="text-xl font-display font-bold mb-4">Want similar results?</h3>
              <p className="text-white/80 text-sm mb-8 leading-relaxed">Let's discuss how we can build a high-performance system for your business.</p>
              {project.liveUrl ? (
  <a
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full py-4 bg-white text-brand-orange rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl"
  >
    Live Preview
  </a>
) : (
  <button
    disabled
    className="w-full py-4 bg-gray-300 text-gray-600 rounded-full font-bold cursor-not-allowed"
  >
    No Live Link Available
  </button>
)}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
