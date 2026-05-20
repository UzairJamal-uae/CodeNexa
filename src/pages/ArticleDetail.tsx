import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { insights } from '../data/insights';
import { useEffect } from 'react';

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = insights.find(a => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/" className="text-brand-orange hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-100 flex items-end">
        <div className="absolute inset-0 z-0">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-bg-primary via-bg-primary/50 to-transparent" />
        </div>
        
        <div className="container max-w-7xl mx-auto px-6 relative z-10 pb-16">
          <Link to="/insights" className="inline-flex items-center gap-2 text-brand-orange font-bold mb-8 hover:-translate-x-2 transition-transform">
            <ArrowLeft size={18} /> Back to Insights
          </Link>
          <div className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs mb-4">{article.tag}</div>
          <h1 className="text-4xl md:text-7xl font-display font-bold leading-tight max-w-4xl">{article.title}</h1>
        </div>
      </section>

      {/* Content */}
      <SectionWrapper className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <div className="flex items-center gap-6 text-sm text-text-secondary border-b border-border-primary pb-8">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {article.publishedAt}
              </div>
              <div className="w-1 h-1 rounded-full bg-border-primary" />
              <span>By CodeNexa Strategy Team</span>
            </div>

            <div className="prose prose-invert prose-xl max-w-none">
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed italic font-light">
                "{article.fullContent}"
              </p>
              
              <div className="my-16 h-px bg-linear-to-r from-brand-orange/50 via-transparent to-transparent" />
              
              <h3 className="text-3xl font-display font-bold mb-8 text-white">Why This Matters</h3>
              <p className="text-text-secondary leading-relaxed mb-12">
                The shift towards high-end automation and digital transformation isn't just a choice; it's the defining factor of whether a brand will exist in the next decade. At CodeNexa, we help owners bridge this gap with precision and care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass p-8 md:p-12 rounded-[3rem] border-brand-orange/5">
                <h3 className="text-xl font-bold uppercase tracking-widest text-brand-orange mb-8">Impact Facts</h3>
                <div className="space-y-6">
                  {article.facts.map((fact, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="text-brand-orange" size={20} />
                      </div>
                      <p className="text-sm font-semibold leading-relaxed">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass p-8 md:p-12 rounded-[3rem] border-brand-orange/5">
                <h3 className="text-xl font-bold uppercase tracking-widest text-brand-orange mb-8">Implementation</h3>
                <div className="space-y-6">
                  {article.examples.map((ex, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-text-primary/5 flex items-center justify-center shrink-0">
                        <span className="text-brand-orange font-bold text-sm">0{i + 1}</span>
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed">{ex}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="glass p-10 rounded-[3rem] bg-brand-orange text-white">
              <h3 className="text-2xl font-display font-bold mb-4">Start Your Story</h3>
              <p className="text-white/80 mb-8 text-sm leading-relaxed">
                Inspired by these insights? Let's discuss how we can apply these modern principles to your business.
              </p>
              <Link to="/contact" className="w-full py-4 bg-white text-brand-orange rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all">
                Let's Talk <ArrowRight size={18} />
              </Link>
            </div>

            <div className="glass p-10 rounded-[3rem] border-brand-orange/10">
              <h3 className="text-xl font-display font-bold mb-6">Related Articles</h3>
              <div className="space-y-6">
                {insights.filter(a => a.slug !== slug).slice(0, 3).map(related => (
                  <Link key={related.slug} to={`/insights/${related.slug}`} className="group block">
                    <div className="text-[10px] text-brand-orange font-bold uppercase tracking-widest mb-1">{related.tag}</div>
                    <h4 className="text-sm font-bold group-hover:text-brand-orange transition-colors line-clamp-2 leading-snug">
                      {related.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
