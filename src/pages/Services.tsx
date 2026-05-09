import { motion } from 'framer-motion';
import { services } from '../components/ServiceGrid';
import SectionWrapper from '../components/SectionWrapper';
import { ArrowRight, CheckCircle2, Zap, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="pt-32 min-h-screen bg-bg-primary">
      {/* Header */}
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none">
          <span className="text-[10rem] md:text-[15rem] lg:text-[20rem] font-display font-black">EXPERT</span>
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8"
        >
          Our <span className="text-gradient">Services</span>
        </motion.h1>
        <p className="max-w-2xl mx-auto text-text-secondary text-base md:text-lg">
          We provide end-to-end technological solutions designed to catapult your business into the modern digital era. Solutions that are simple to use yet powerful in results.
        </p>
      </section>

      {/* Services List */}
      <SectionWrapper className="max-w-7xl mx-auto px-6 pb-24 space-y-24">
        {services.map((service, i) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Visual Part */}
            <div className="flex-1 w-full">
              <div className="relative group">
                <div className="absolute -inset-4 bg-brand-orange/10 blur-3xl rounded-full group-hover:bg-brand-orange/20 transition-all" />
                <div className="relative glass rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 aspect-video flex flex-col items-center justify-center border-brand-orange/10 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-orange/[0.02] opacity-50" />
                  <service.icon size={64} className="text-brand-orange mb-6 md:mb-8 md:size-20 animate-float" />
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-display font-bold mb-2">{service.count}</div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-text-secondary font-bold">Solutions Delivered</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Part */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 flex flex-col md:flex-row items-center gap-4 lg:justify-start">
                <span className="text-brand-orange text-4xl md:text-5xl">0{i + 1}</span>
                {service.title}
              </h2>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8">
                {service.details}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 justify-center lg:justify-start">
                    <CheckCircle2 className="text-brand-orange shrink-0" size={18} />
                    <span className="text-sm font-semibold">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start">
                <div className="glass px-6 py-3 rounded-full flex items-center gap-2">
                  <Zap className="text-brand-orange" size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">{service.impact.split(' ').slice(0, 3).join(' ')}</span>
                </div>
                <Link 
                  to="/contact" 
                  className="w-full sm:w-auto px-8 py-3 bg-brand-orange text-white rounded-full font-bold text-sm hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  Get Started <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="section-padding bg-bg-secondary/50">
        <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[4rem] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[100px]" />
          <Rocket className="text-brand-orange mx-auto mb-8 animate-bounce" size={64} />
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to Scale?</h2>
          <p className="text-lg text-text-secondary mb-12">
            Every big business success starts with a single smart decision. Let's make yours today.
          </p>
          <Link 
            to="/contact" 
            className="px-12 py-5 bg-brand-orange text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-brand-orange/30 inline-block"
          >
            Start Your Journey
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
}
