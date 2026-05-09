import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram, Music, Globe, ChevronRight, Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const columns = [
    { title: 'Company', items: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Work', href: '/portfolio' },
      { name: 'Services', href: '/services' },
      { name: 'Contact', href: '/contact' }
    ]},
    { title: 'Information', items: [
      { name: 'Insights', href: '/insights' },
      { name: 'Packages', href: '/#packages' },
      { name: 'FAQ', href: '/#faq' },
      { name: 'Privacy Policy', href: '#' }
    ]},
  ];

  const socialLinks = [
    { Icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-[#0077B5]" },
    { Icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-[#E4405F]" },
    { Icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-[#1877F2]" },
    { Icon: Music, href: "#", label: "TikTok", color: "hover:bg-black" },
    { Icon: Globe, href: "#", label: "Upwork", color: "hover:bg-[#14a800]" },
    { Icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-[#1DA1F2]" },
    { Icon: Github, href: "#", label: "GitHub", color: "hover:bg-[#333]" },
  ];

  return (
    <footer className="relative bg-[#020617] border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-orange/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Pre-Footer Action - Modernized Banner */}
        <div className="relative mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative glass-dark rounded-[3.5rem] md:rounded-[5rem] p-8 md:p-20 overflow-hidden border border-white/10"
          >
            {/* Immersive Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-150 h-150 bg-brand-orange/15 blur-[120px] -translate-y-1/2 translate-x-1/3 rounded-full animate-pulse" />
              <div className="absolute bottom-0 left-0 w-100 h-100 bg-blue-600/10 blur-[100px] translate-y-1/2 -translate-x-1/4 rounded-full" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-5 py-2 glass rounded-full text-brand-orange text-[10px] font-bold uppercase tracking-[0.3em] mb-2 border-brand-orange/20">
                  Ready to evolve?
                </div>
                <h3 className="text-4xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight">
                  Let's build something <br/>
                  <span className="relative">
                    <span className="text-gradient">extraordinary.</span>
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-orange/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="8" />
                    </svg>
                  </span>
                </h3>
                <p className="text-text-secondary text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                  Transforming visionary ideas into high-performance digital ecosystems. We don't just write code; we architect success stories.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-6 items-center lg:items-end">
                <motion.div whileHover={{ scale: 1.02 }} className="w-full sm:w-auto">
                  <Link 
                    to="/contact" 
                    className="w-full sm:w-auto px-12 py-6 bg-brand-orange text-white rounded-full font-bold flex items-center justify-center gap-4 hover:bg-white hover:text-brand-orange transition-all shadow-2xl shadow-brand-orange/30 text-xl group"
                  >
                    Start a Project
                    <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </motion.div>
                
                <div className="w-full max-w-md relative group">
                  <div className="absolute -inset-1 bg-linear-to-r from-brand-orange/50 to-blue-500/50 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative flex items-center gap-2 p-2 glass rounded-full overflow-hidden border-white/10 bg-[#020617]/80">
                    <input 
                      type="email" 
                      placeholder="Your enterprise email" 
                      className="flex-1 px-6 py-3 bg-transparent border-none outline-none text-white placeholder:text-text-secondary/40 text-sm"
                    />
                    <button className="h-12 px-6 bg-white/5 hover:bg-brand-orange hover:text-white rounded-full flex items-center gap-2 transition-all text-xs font-bold whitespace-nowrap">
                      Join Hub <Send size={14} />
                    </button>
                  </div>
                </div>
                
                <p className="text-[10px] uppercase font-bold tracking-widest text-text-secondary/40">
                  Trusted by 25+ global innovators
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center shadow-lg shadow-brand-orange/30">
                <span className="text-white font-display font-black text-xl"><img src= {logo} alt="C" /></span>
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter text-white">CodeNexa<span className="text-text-secondary/50 font-normal">.</span></span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Revolutionizing businesses through next-gen IT solutions. We craft digital ecosystems that drive real business growth for visionary owners.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ Icon, href, label, color }, i) => (
                <motion.a 
                  key={i} 
                  href={href} 
                  whileHover={{ y: -5 }}
                  aria-label={label}
                  title={label}
                  className={`w-10 h-10 glass rounded-xl flex items-center justify-center border-white/5 transition-all duration-300 ${color} hover:text-white hover:border-transparent`}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {columns.map((col, i) => (
            <div key={i} className="lg:col-span-2 space-y-8">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">{col.title}</h4>
              <ul className="space-y-4">
                {col.items.map((item, j) => (
                  <li key={j}>
                    <Link to={item.href} className="text-text-secondary hover:text-brand-orange flex items-center gap-2 group transition-colors text-sm">
                      <div className="w-1 h-1 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Global Presence */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">Global Hubs</h4>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start gap-4 p-5 glass rounded-3xl border-white/5 hover:border-brand-orange/20 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-orange mb-1">USA Office</div>
                  <div className="text-sm text-text-secondary leading-snug">242 Park Ville, Ave 2, Brooklyn, NY</div>
                  <div className="text-xs font-bold mt-2 text-text-primary">+1 929-244-9363</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 glass rounded-3xl border-white/5 hover:border-brand-orange/20 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-orange mb-1">Pakistan Office</div>
                  <div className="text-sm text-text-secondary leading-snug">Nawaz Chowk, Jhang Sadar, Punjab</div>
                  <div className="text-xs font-bold mt-2 text-text-primary">+92 0371-1467045</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-secondary text-xs">
            © {currentYear} CodeNexa. A subsidiary of Urbix. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-xs text-text-secondary">
              <Mail size={14} className="text-brand-orange" />
              codenexa.contact@gmail.com
            </div>
            <div className="hidden md:flex items-center gap-2 px-3 py-1 glass rounded-lg text-[10px] font-bold text-green-400">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              SYSTEMS ACTIVE
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
