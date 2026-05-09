import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Tag, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import { insights } from '../data/insights';
import { useEffect } from 'react';

export default function Insights() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <SectionWrapper className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">The Knowledge Hub</h2>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8">
              Expert <span className="text-gradient">Insights</span>
            </h1>
            <p className="max-w-2xl mx-auto text-text-secondary text-lg">
              Exploring the intersection of business strategy and high-end technology. Your guide to thriving in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {insights.map((article, i) => (
              <motion.div 
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-[3rem] overflow-hidden group border-brand-orange/5"
              >
                <Link to={`/insights/${article.slug}`} className="block">
                  <div className="h-[300px] overflow-hidden relative border-b border-border-primary">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute top-6 left-6">
                      <div className="glass px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-orange">
                        {article.tag}
                      </div>
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-4 text-xs text-text-secondary mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {article.publishedAt}
                      </div>
                    </div>
                    <h2 className="text-3xl font-display font-bold mb-4 group-hover:text-brand-orange transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-text-secondary mb-8 leading-relaxed line-clamp-3">
                      {article.desc}
                    </p>
                    <div className="flex items-center gap-2 font-bold text-sm text-brand-orange group-hover:gap-4 transition-all">
                      Read Full Article <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
