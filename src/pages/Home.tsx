import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Coffee, ShieldCheck, Zap, Users2, Globe2, 
  Plus, Minus, Star, Gift, MessageSquareWarning, Send,
  Instagram, Linkedin, Twitter, ExternalLink,
  Rocket, Globe, Cpu, Award, Layout, CheckCircle2
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceGrid from '../components/ServiceGrid';
import SectionWrapper from '../components/SectionWrapper';
import VideoTestimonialSlider from '../components/VideoTestimonialSlider';
import ProjectSlider from '../components/ProjectSlider';
import { insights } from '../data/insights';
import { packages } from '../data/packages';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currency, setCurrency] = useState<'USD' | 'PKR'>('USD');

  const stats = [
    { label: 'Success Solutions', value: '1000+', icon: Zap },
    { label: 'International Clients', value: '500+', icon: Users2 },
    { label: 'Years Experience', value: '6+', icon: ShieldCheck },
    { label: 'Global Reach', value: '25+', icon: Globe2 },
  ];

  const faqs = [
    {
      q: "Is custom software only for giant corporations?",
      a: "Absolutely not. In fact, small businesses save more money in the long run by automating manual tasks. We build 'one step at a time'—starting with exactly what you need now to increase your profit, then growing as you do."
    },
    {
      q: "I'm worried about technology becoming outdated too fast.",
      a: "We hear you. That's why we build using 'future-ready' tech. We don't just build a tool; we give you a foundation that's ready for the AI revolution. You won't have to rebuild from scratch in two years."
    },
    {
      q: "How will this actually make my daily life easier?",
      a: "Imagine reclaiming 10 hours a week because your software handles your inventory, client bookings, and invoicing automatically. Our clients often tell us they finally have time to 'work on their business' instead of 'in' it."
    },
    {
      q: "Why should I pick you over a cheaper freelancer?",
      a: "Freelancers often disappear. CodeNexa (by Urbix) is a professional agency. You get a direct line to our team, a clear roadmap, and the peace of mind that we're here for the long haul to support your growth."
    }
  ];

  return (
    <div className="relative overflow-hidden bg-bg-primary text-text-primary">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/10 blur-[150px] rounded-full -z-10 animate-pulse" />
      <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] bg-brand-orange/5 blur-[120px] rounded-full -z-10" />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 section-padding overflow-hidden">
        {/* Background Text Effect */}
        <div className="absolute -top-10 -right-20 pointer-events-none select-none opacity-[0.02] transform rotate-12">
          <span className="text-[15rem] md:text-[25rem] lg:text-[30rem] font-display font-black tracking-tighter">NEXA</span>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-float">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
              <span className="text-[10px] font-semibold tracking-wider uppercase text-text-secondary">1000+ Successful Projects</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] md:leading-[0.9] mb-6">
              Building Solutions. <br />
              <span className="text-gradient">Empowering Futures.</span>
            </h1>
            
            <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-xl mb-10 mx-auto lg:mx-0 px-4 md:px-0">
              CodeNexa is your premiere partner for advanced IT solutions. From AI integrations to full-cycle software development, we bring your vision to life with precision and modern tech.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="/contact"><button className="w-full sm:w-auto px-8 py-4 bg-brand-orange text-white rounded-full font-bold text-base md:text-lg hover:scale-105 transition-all shadow-2xl shadow-brand-orange/20 flex items-center justify-center gap-3 group">
                Start a Project
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button></a>
              <a href="#services" className="w-full sm:w-auto px-8 py-4 glass rounded-full font-bold text-base md:text-lg hover:bg-text-primary/10 transition-all font-display flex items-center justify-center">
                Our Services
              </a>
            </div>
          </motion.div>

          {/* Hero UI Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square glass rounded-[4rem] overflow-hidden p-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-linear-to-br from-brand-orange/20 to-transparent" />
              <div className="relative z-10 w-full h-full border-2 border-dashed border-border-primary rounded-[3rem] p-12 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="w-16 h-16 bg-brand-orange rounded-3xl flex items-center justify-center shadow-2xl shadow-brand-orange/40">
                    <Zap className="text-white fill-white" size={32} />
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-display font-bold">99.9%</div>
                    <div className="text-xs text-text-secondary uppercase tracking-widest font-medium">Uptime Excellence</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-2 w-3/4 bg-text-primary/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      transition={{ duration: 2, delay: 1 }}
                      className="h-full bg-brand-orange" 
                    />
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold uppercase tracking-wider text-text-secondary">Innovation Index</span>
                    <span className="text-brand-orange font-bold uppercase tracking-widest">A+ Ranking</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="glass p-4 rounded-2xl">
                    <div className="text-[10px] text-text-secondary uppercase mb-1 font-bold tracking-widest">Efficiency</div>
                    <div className="text-xl font-bold font-display">+140%</div>
                  </div>
                  <div className="glass p-4 rounded-2xl border-brand-orange/30">
                    <div className="text-[10px] text-text-secondary uppercase mb-1 font-bold tracking-widest">Growth</div>
                    <div className="text-xl font-bold font-display">3.2x</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <SectionWrapper className="bg-bg-secondary/50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] glass transition-all"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-text-primary/5 rounded-xl mx-auto flex items-center justify-center mb-4 md:mb-6">
                <stat.icon className="text-brand-orange" size={20} />
              </div>
              <div className="text-2xl md:text-4xl font-display font-bold mb-2">{stat.value}</div>
              <div className="text-[10px] text-text-secondary uppercase tracking-[0.2em] font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* NEW: What We Bring to Your Table */}
      <SectionWrapper className="section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-orange/20 blur-3xl rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                alt="Business Meeting" 
                className="relative rounded-[3rem] shadow-2xl z-10 border border-border-primary"
              />
              <div className="absolute -bottom-8 -right-8 glass p-8 rounded-3xl z-20 shadow-xl hidden md:block">
                <div className="text-3xl font-display font-bold text-brand-orange italic">25% +</div>
                <div className="text-xs text-text-secondary uppercase tracking-widest font-bold">Profit Increase</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Let's Discuss</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-8">What We Bring <br /><span className="text-gradient">To Your Table</span></h3>
            <div className="space-y-8">
              {[
                { title: "Smarter Savings", desc: "We replace expensive manual labor with smart automation that works 24/7 without complaining." },
                { title: "Direct Lead Flow", desc: "No more guessing where your next client comes from. We build systems that fetch them for you." },
                { title: "Zero Tech Stress", desc: "You run the business, we run the engines. We handle all the updates so you stay ahead." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-orange rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-brand-orange/20">
                    <span className="font-bold text-white">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Services Section */}
      <SectionWrapper id="services" className="section-padding scroll-mt-24">
        <div className="absolute top-1/2 left-0 pointer-events-none select-none opacity-[0.01]">
          <span className="text-[25rem] font-display font-black tracking-tighter">SERVICES</span>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 text-balance">
            <div className="max-w-2xl">
              <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
              <h3 className="text-5xl md:text-6xl font-display font-bold">Everything You Need <br />to Grow Digitally.</h3>
            </div>
            <p className="max-w-md text-text-secondary">
              From websites and mobile apps to custom software and AI-powered solutions, We provide the technology your business needs, all under one roof.
            </p>
          </div>
          <ServiceGrid />
        </div>
      </SectionWrapper>

      {/* Featured Projects Section */}
      <SectionWrapper className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="max-w-2xl px-6 md:px-0">
                <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Our Work</h2>
                <h3 className="text-4xl md:text-6xl font-display font-bold">Featured <span className="text-gradient">Projects</span></h3>
                <p className="text-text-secondary mt-6 text-base md:text-lg">We don't just build software; we craft digital ecosystems that drive real business growth for owners like you.</p>
              </div>
              <div className="px-6 md:px-0">
                <Link 
                  to="/portfolio" 
                  className="group inline-flex items-center gap-3 text-lg font-bold hover:text-brand-orange transition-colors"
                >
                  View Full Portfolio <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          <ProjectSlider />
        </div>
      </SectionWrapper>

      {/* Video Testimonials Section */}
      <SectionWrapper className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Client Stories</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-4">Hear From The <br /><span className="text-gradient">Business Owners</span></h3>
            <p className="text-text-secondary max-w-xl mx-auto">See how real businesses are scaling with our custom solutions.</p>
          </div>
          <VideoTestimonialSlider />
        </div>
      </SectionWrapper>

      {/* FAQ / Concens Section */}
      <SectionWrapper className="section-padding bg-bg-secondary/30 relative">
        <div className="absolute inset-0 bg-brand-orange/[0.02] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Straight Talk</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-4">You've Got Questions,</h3>
            <p className="text-text-secondary">We have honest, business-first answers.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border-b border-border-primary transition-all duration-300 ${openFaq === index ? 'pb-8' : 'pb-4'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between py-4 text-left transition-colors group"
                >
                  <span className={`text-xl font-bold pr-8 transition-colors ${openFaq === index ? 'text-brand-orange' : 'text-text-primary group-hover:text-brand-orange'}`}>{faq.q}</span>
                  <div className={`shrink-0 w-6 h-6 flex items-center justify-center transition-all ${openFaq === index ? 'rotate-180 text-brand-orange' : 'text-text-secondary group-hover:text-brand-orange'}`}>
                    {openFaq === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="text-text-secondary leading-relaxed pt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Review us and get Discount Section */}
      <SectionWrapper className="section-padding">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          <div className="flex-1 glass p-12 rounded-[3.5rem] relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-orange/20 blur-[80px] group-hover:bg-brand-orange/30 transition-all" />
            <Gift className="text-brand-orange mb-8" size={64} />
            <h3 className="text-4xl font-display font-bold mb-6">Review Us & Get <span className="text-brand-orange">15% Discount</span></h3>
            <p className="text-text-secondary mb-8 leading-relaxed max-w-md">
              Your feedback fuels our innovation. Rate your experience with CodeNexa on Google My Business or Social Media and unlock a direct discount on your next service module or maintenance plan.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Star, label: "GMB Link", url: "#" },
                { icon: Instagram, label: "Instagram", url: "#" },
                { icon: Linkedin, label: "LinkedIn", url: "#" }
              ].map((social) => (
                <a key={social.label} href={social.url} className="px-6 py-3 glass rounded-full flex items-center gap-2 hover:border-brand-orange transition-all text-sm font-bold">
                  <social.icon size={16} className="text-brand-orange" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3 glass p-12 rounded-[3.5rem] flex flex-col justify-center bg-brand-orange text-white">
            <MessageSquareWarning className="mb-6" size={48} />
            <h4 className="text-2xl font-display font-bold mb-4">Improve Us</h4>
            <p className="text-white/80 text-sm mb-8">
              Found a bug or have a suggestion? We value your direct complaints and recommendations to make CodeNexa even better for you.
            </p>
            <form className="space-y-4">
              <input type="text" placeholder="Your Recommendation" className="w-full bg-white/15 border border-white/20 rounded-2xl px-6 py-3 placeholder:text-white/50 outline-none focus:bg-white/20 transition-all text-sm" />
              <button className="w-full py-4 bg-white text-brand-orange rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-neutral-100 transition-colors">
                Submit Feedback
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </SectionWrapper>

      {/* Virtual Coffee Section */}
      <SectionWrapper className="section-padding relative overflow-hidden">
        <div className="max-w-5xl mx-auto glass rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/20 blur-[80px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-orange rounded-2xl md:rounded-3xl mx-auto flex items-center justify-center mb-8 md:mb-10 shadow-2xl shadow-brand-orange/40 animate-float">
              <Coffee size={32} className="text-white md:size-10" />
            </div>
            
            <h2 className="text-3xl md:text-6xl font-display font-bold mb-6 md:mb-8">
              Have a <span className="text-gradient">Virtual Coffee</span> With Us
            </h2>
            
            <p className="text-sm md:text-lg text-text-secondary mb-8 md:mb-12 px-4">
              Let's brainstorm your next big project over a free virtual meeting. 30 minutes of free consultation to discuss your vision, strategy, and technical roadmap.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="https://calendly.com/uzairjamal-dev/30min" target="_blank"><button className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-brand-orange text-white rounded-full font-bold text-base md:text-lg hover:scale-105 transition-all shadow-2xl shadow-brand-orange/30">
                Book My Meeting
              </button></a>
              <div className="flex -space-x-3 md:-space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-4 border-bg-primary overflow-hidden bg-text-primary/10">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=expert${i}`} alt="Specialist" />
                  </div>
                ))}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-4 border-bg-primary bg-brand-orange flex items-center justify-center text-[10px] md:text-xs font-bold text-white">
                  +12
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Insights Section */}
      <SectionWrapper className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">Revolutionizing Business <br />Through Technology</h3>
            <p className="text-text-secondary max-w-xl mx-auto">
              Our articles explore how modern trends can make your business smoother, more fruitful, and future-proof.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {insights.slice(0, 2).map((article, i) => (
              <motion.div 
                key={article.slug}
                whileHover={{ y: -10 }}
                className="glass rounded-[3rem] overflow-hidden group cursor-pointer"
              >
                <Link to={`/insights/${article.slug}`} className="block">
                  <div className="h-[300px] overflow-hidden relative border-b border-border-primary">
                    <div className="absolute inset-0 bg-brand-orange/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-6 left-6 px-4 py-1 glass rounded-full text-xs font-bold uppercase tracking-wider text-white">
                      {article.tag}
                    </div>
                  </div>
                  <div className="p-10">
                    <h4 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-brand-orange transition-colors">{article.title}</h4>
                    <p className="text-text-secondary mb-8 leading-relaxed">{article.desc}</p>
                    <div className="flex items-center gap-2 font-bold text-sm text-brand-orange">
                      Read Article <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/insights" 
              className="inline-flex items-center gap-3 px-10 py-5 glass rounded-full font-bold text-lg hover:bg-brand-orange hover:text-white transition-all shadow-xl hover:shadow-brand-orange/20"
            >
              View More Articles
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </SectionWrapper>
      
      {/* Packages Section */}
      <SectionWrapper className="section-padding bg-text-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-6">
            <div className="max-w-2xl">
              <h2 className="text-brand-orange font-bold uppercase tracking-[0.3em] text-sm mb-4">Investment Plans</h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold">Scaling Your <span className="text-gradient">Vision</span></h3>
              <p className="text-text-secondary mt-6 text-lg italic">"For exact pricing for your project, contact us. Remember, top-tier development isn't an expense it's the fuel for your next 10x growth phase."</p>
            </div>
            
            {/* Currency Switcher */}
            <div className="flex items-center gap-3 glass p-2 rounded-2xl border-brand-orange/10">
              <span className="text-[10px] font-bold uppercase text-text-secondary px-2">Currency</span>
              <div className="flex bg-bg-primary rounded-xl p-1 shadow-inner relative">
                <button 
                  onClick={() => setCurrency('USD')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all relative z-10 ${currency === 'USD' ? 'text-white' : 'text-text-secondary hover:text-text-primary'}`}
                >
                  USD $
                </button>
                <button 
                  onClick={() => setCurrency('PKR')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all relative z-10 ${currency === 'PKR' ? 'text-white' : 'text-text-secondary hover:text-text-primary'}`}
                >
                  PKR ₨
                </button>
                <motion.div 
                  initial={false}
                  animate={{ x: currency === 'USD' ? 0 : '100%' }}
                  className="absolute top-1 left-1 bottom-1 w-[calc(50%-4px)] bg-brand-orange rounded-lg shadow-lg z-0"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mb-20">
            {packages.map((pkg, i) => {
              const displayPrice = currency === 'USD' 
                ? pkg.price 
                : pkg.basePrice 
                  ? `From ₨ ${(pkg.basePrice * 280).toLocaleString()}` 
                  : pkg.price;

              return (
                <motion.div 
                  key={pkg.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group relative h-full"
                >
                  <Link to={`/packages/${pkg.slug}`} className="block h-full">
                    <div className={`relative h-full glass rounded-[3rem] p-10 md:p-12 border-brand-orange/5 hover:border-brand-orange/20 transition-all duration-500 overflow-hidden flex flex-col`}>
                      {/* Background glow */}
                      <div className={`absolute -top-10 -right-10 w-40 h-40 bg-linear-to-br ${pkg.color} blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity`} />
                      
                      <div className="mb-10 relative">
                        <div className={`w-16 h-16 bg-linear-to-br ${pkg.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl`}>
                          <pkg.icon size={30} />
                        </div>
                        <h4 className="text-3xl font-display font-bold group-hover:text-brand-orange transition-colors duration-300">{pkg.name}</h4>
                        <motion.p 
                          key={currency}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-brand-orange text-sm font-bold mt-2 uppercase tracking-widest"
                        >
                          {displayPrice}
                        </motion.p>
                      </div>

                      <p className="text-text-secondary mb-10 leading-relaxed font-medium">
                        {pkg.description}
                      </p>

                      <div className="space-y-4 mb-12 flex-grow">
                        {pkg.features.slice(0, 4).map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-3">
                            <feature.icon size={16} className="text-brand-orange shrink-0" />
                            <span className="text-sm font-semibold opacity-80">{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-8 border-t border-white/5 mt-auto">
                        <div className="flex items-center justify-between font-bold text-sm">
                          <span className="text-text-primary group-hover:text-brand-orange transition-colors">See Package Details</span>
                          <ArrowRight size={18} className="text-brand-orange -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Budget Estimate CTA */}
          <div className="px-6">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="relative glass p-8 md:p-16 rounded-[4rem] border-brand-orange/20 overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                <div className="max-w-2xl text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1 glass rounded-full text-brand-orange text-xs font-bold uppercase tracking-widest mb-6"> No Cost Estimate </div>
                  <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">Discuss what you can get best in your budget</h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Not sure which package fits your current needs? Let's have a 15-minute discovery call to get a free estimate for your desired system.
                  </p>
                </div>
                <div className="shrink-0">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-4 px-12 py-6 bg-brand-orange text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-brand-orange/30 group/btn"
                  >
                    Get Free Estimate
                    <ArrowRight size={24} className="group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
