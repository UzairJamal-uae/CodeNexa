import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, MessageSquare, Mail, 
  Clock, Target, Cpu, ShieldCheck, Zap, Plus, X 
} from 'lucide-react';
import { useState, useEffect } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { packages } from '../data/packages';

export default function PackageDetail() {
  const { slug } = useParams<{ slug: string }>();
  const pkg = packages.find(p => p.slug === slug);
  const [showContactOptions, setShowContactOptions] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Package Not Found</h1>
          <Link to="/" className="text-brand-orange hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const contactOptions = [
    {
      name: "WhatsApp",
      icon: MessageSquare,
      color: "bg-[#25D366]",
      action: () => window.open(`https://wa.me/1234567890?text=I'm interested in the ${pkg.name} package`, '_blank'),
      desc: "Instant Chat"
    },
    {
      name: "Email",
      icon: Mail,
      color: "bg-brand-orange",
      action: () => window.location.href = `mailto:hello@codenexa.com?subject=Inquiry: ${pkg.name} Package`,
      desc: "Official Inquiry"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className={`relative py-20 md:py-32 overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-10`} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 blur-[100px] pointer-events-none" />
        
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-orange font-bold mb-12 hover:-translate-x-2 transition-transform">
            <ArrowLeft size={18} /> Back to Home
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 glass px-6 py-2 rounded-full mb-8">
                <pkg.icon className="text-brand-orange" size={24} />
                <span className="text-sm font-bold uppercase tracking-widest leading-none">{pkg.name}</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-display font-bold leading-tight mb-6">
                {pkg.tagline}
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-10 max-w-xl">
                {pkg.description}
              </p>
              <div className="text-3xl font-display font-bold text-brand-orange mb-12">
                {pkg.price}
              </div>
              <button 
                onClick={() => setShowContactOptions(true)}
                className="px-12 py-5 bg-brand-orange text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-brand-orange/30"
              >
                Get Started with {pkg.name}
              </button>
            </div>
            
            <div className="relative group">
              <div className={`absolute -inset-4 bg-gradient-to-br ${pkg.color} blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity`} />
              <div className="relative glass p-10 md:p-16 rounded-[4rem] border-brand-orange/10 backdrop-blur-3xl">
                <h3 className="text-2xl font-display font-bold mb-8">What's Included</h3>
                <div className="space-y-5">
                  {pkg.features.map((feature, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.5 }}
                      className="flex gap-5 items-start group/item p-4 -mx-4 rounded-3xl hover:bg-white/5 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover/item:bg-brand-orange group-hover/item:text-white group-hover/item:shadow-lg group-hover/item:shadow-brand-orange/20 transition-all duration-300">
                        <feature.icon size={22} className="transition-transform group-hover/item:scale-110" />
                      </div>
                      <div className="pt-1 flex flex-col items-start text-left">
                        <span className="text-lg font-bold text-text-primary group-hover/item:text-brand-orange transition-colors leading-tight">
                          {feature.text}
                        </span>
                        <p className="text-xs text-text-secondary mt-1 opacity-0 group-hover/item:opacity-100 transition-all duration-500 font-medium uppercase tracking-wider">
                          Premium Feature Included
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-12 pt-12 border-t border-white/5 flex items-center gap-4 text-text-secondary">
                  <Clock size={20} className="text-brand-orange" />
                  <span className="font-bold">Delivery Time: {pkg.deliveryTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <SectionWrapper className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          <div className="lg:col-span-12 space-y-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center">
                    <Target className="text-brand-orange" size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold">Ideal For</h3>
                </div>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {pkg.bestFor}
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center">
                    <Zap className="text-brand-orange" size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold">Why This Package?</h3>
                </div>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {pkg.whyChoose}
                </p>
              </div>
            </div>

            <div className="glass p-10 md:p-20 rounded-[3rem] md:rounded-[5rem] relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[80px]" />
               <div className="flex flex-col md:flex-row gap-12 items-center">
                 <div className="flex-1 space-y-8 text-center md:text-left">
                   <h3 className="text-3xl md:text-4xl font-display font-bold">Technical Specifications</h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {pkg.technicalSpecs.map((spec, i) => (
                       <div key={i} className="flex items-center gap-3 p-4 glass rounded-2xl">
                         <div className="w-2 h-2 rounded-full bg-brand-orange" />
                         <span className="text-sm font-bold uppercase tracking-tight">{spec}</span>
                       </div>
                     ))}
                   </div>
                 </div>
                 <div className="w-full md:w-1/3 flex flex-col items-center gap-6 p-10 glass rounded-[3rem] bg-brand-orange text-white">
                   <div className="text-center">
                     <p className="text-sm uppercase tracking-widest mb-2 font-bold text-white/80">Ready to start?</p>
                     <h4 className="text-2xl font-display font-bold">Let's build your vision.</h4>
                   </div>
                   <button 
                     onClick={() => setShowContactOptions(true)}
                     className="w-full py-4 bg-white text-brand-orange rounded-full font-bold hover:scale-105 transition-all text-lg"
                   >
                     Book Now
                   </button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Modal */}
      <AnimatePresence>
        {showContactOptions && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactOptions(false)}
              className="absolute inset-0 bg-bg-primary/95 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg glass p-10 md:p-16 rounded-[4rem] border-brand-orange/20 shadow-2xl"
            >
              <button 
                onClick={() => setShowContactOptions(false)}
                className="absolute top-6 right-6 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-brand-orange rounded-3xl mx-auto flex items-center justify-center mb-8 shadow-2xl shadow-brand-orange/30">
                  <MessageSquare size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">Choose Your Path</h3>
                <p className="text-text-secondary">How would you like to start the conversation about the <strong>{pkg.name}</strong> package?</p>
              </div>

              <div className="grid gap-6">
                {contactOptions.map((opt) => (
                  <button 
                    key={opt.name}
                    onClick={opt.action}
                    className="flex items-center justify-between p-8 glass rounded-[2.5rem] group hover:border-brand-orange transition-all text-left"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-14 h-14 ${opt.color} rounded-2xl flex items-center justify-center text-white shadow-xl`}>
                        <opt.icon size={24} />
                      </div>
                      <div>
                        <div className="text-xl font-bold">{opt.name}</div>
                        <div className="text-sm text-text-secondary">{opt.desc}</div>
                      </div>
                    </div>
                    <ArrowLeft className="rotate-180 text-brand-orange group-hover:translate-x-2 transition-transform" />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
