import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Smartphone, Globe, Bot, Cpu, 
  Database, ShieldCheck, TrendingUp, Search, 
  Settings, HeartPulse, ExternalLink, X, ArrowRight,
  CheckCircle2, Box, Layers, Zap
} from 'lucide-react';

export const services = [
  { 
    id: "web",
    icon: Globe, 
    title: "Websites that Sell", 
    desc: "Custom-built websites designed to turn visitors into leads and customers.",
    details: "We don't just build websites; we build growth tools. Your site will be easy for your team to manage and even easier for your customers to use, ensuring you never miss a sale.",
    benefits: ["Google Search Ready", "Works on All Phones", "Super Fast Loading", "Secure for Payments"],
    impact: "Helps businesses attract more local and global customers instantly.",
    packages: ["Startup Ready: $2k+", "Business Pro: $5k+", "Enterprise: Custom"],
    count: "150+"
  },
  { 
    id: "app",
    icon: Smartphone, 
    title: "Mobile Business Apps", 
    desc: "Put your business directly in your customers' pockets with a custom app.",
    details: "Engage your customers where they spend most of their time—on their phones. We build simple, powerful apps that make booking, buying, or browsing a breeze for your clients.",
    benefits: ["Easy to Use", "Works Offline", "Direct Notifications", "Safe and Secure"],
    impact: "Keep your customers coming back with a dedicated icon on their phone.",
    packages: ["Basic App: $4k+", "Pro App: $10k+", "Custom: Scale"],
    count: "80+"
  },
  { 
    id: "software",
    icon: Code2, 
    title: "Custom Business Software", 
    desc: "Software built specifically for your unique workflow and business goals.",
    details: "Stop struggling with complicated tools that don't fit your needs. We build software that works exactly the way you do, helping your team get more done in less time.",
    benefits: ["Saves Staff Time", "Protects Your Data", "Easy to Learn", "Grows With You"],
    impact: "Cuts down on daily manual work so you can focus on growing.",
    packages: ["Single Tool: $3k+", "Business Suite: $15k+", "Custom Platfrom"],
    count: "50+"
  },
  { 
    id: "ai-bot",
    icon: Bot, 
    title: "24/7 Smart Assistants", 
    desc: "AI-powered bots that answer customers while you sleep.",
    details: "Customer service shouldn't stop when you do. Our smart AI bots handle common questions, book appointments, and qualify leads round the clock.",
    benefits: ["Always Online", "Instant Answers", "Books Appointments", "Saves Wages"],
    impact: "Improve customer satisfaction by providing answers in seconds, not hours.",
    packages: ["Standard: $1k+", "Advanced: $3k+", "Pro Assistant: $7k+"],
    count: "200+"
  },
  { 
    id: "ai-api",
    icon: Cpu, 
    title: "AI Business Integration", 
    desc: "Make your existing systems smarter and faster with modern AI.",
    details: "We help you use tools like Gemini to automate tedious tasks, predict trends, and analyze your business data without you lifting a finger.",
    benefits: ["Automatic Tasks", "Smart Predictions", "Clear Insights", "Saves Hours Weekly"],
    impact: "Convert your confusing spreadsheets into clear, smart business moves.",
    packages: ["Basic Connect: $2k+", "Full AI Suite: $8k+", "Custom"],
    count: "120+"
  },
  { 
    id: "data",
    icon: Database, 
    title: "Unified Data View", 
    desc: "See all your business numbers in one simple, clear dashboard.",
    details: "Stop jumping between 10 different apps. We bring all your sales, customer, and inventory data into one place so you can see the big picture clearly.",
    benefits: ["All-in-One View", "See Sales Daily", "Reduce Costly Errors", "Easy Reporting"],
    impact: "Allows you to see exactly where your money is going in real-time.",
    packages: ["Single Dashboard: $2k+", "Full View: $6k+", "Custom"],
    count: "95%"
  },
  { 
    id: "marketing",
    icon: TrendingUp, 
    title: "Digital Growth", 
    desc: "Targeted strategies that get your brand in front of the right buyers.",
    details: "We don't just 'post' on social media. We create data-backed growth plans that target your ideal customers, making sure your marketing budget actually brings in money, not just likes.",
    benefits: ["Targeted Local Ads", "Clear ROI Tracking", "Better Brand Identity", "Direct Sales Feed"],
    impact: "Provides a reliable stream of new customer inquiries every month.",
    packages: ["Social Kick: $1.5k/mo", "Growth Engine: $4k/mo", "Dominator: Custom"],
    count: "3x ROI"
  },
  { 
    id: "seo",
    icon: Search, 
    title: "Be the First Answer", 
    desc: "Get found on Google and new AI tools when customers are looking to buy.",
    details: "When people ask their phones or Google for a service you provide, we make sure you're the first one they see. We optimize for traditional search and the new era of AI answer engines.",
    benefits: ["Top Google Rank", "Free Web Traffic", "Builds Trust", "AI Assistant Ready"],
    impact: "Builds a long-term flow of free customers that never stops.",
    packages: ["SEO Audit: $1k", "Growth SEO: $2k/mo", "Total SEO: $4k/mo"],
    count: "#1 Rank"
  },
  { 
    id: "erp",
    icon: Settings, 
    title: "Business Management Systems", 
    desc: "One central system to run every part of your complex operation.",
    details: "Built for businesses that are outgrowing simple spreadsheets. We build one massive, easy-to-use system that tracks your staff, your customers, and your money perfectly.",
    benefits: ["Tracks All Sales", "Manages Inventory", "Automated Invoices", "Staff Scheduling"],
    impact: "Gives you complete control over your business from your phone or computer.",
    packages: ["Startup ERP: $8k+", "Scaling Suite: $12k+", "Custom"],
    count: "40+"
  },
  { 
    id: "telehealth",
    icon: HeartPulse, 
    title: "Remote Medical Systems", 
    desc: "Safe, easy-to-use digital platforms for doctors and therapists.",
    details: "Specialized platforms built for patient privacy and ease of use. Connect with your patients securely through high-quality video and manage records with zero stress.",
    benefits: ["100% HIPAA Private", "Secure Video Calls", "Easy Bookings", "Digital Records"],
    impact: "Allows you to serve patients from anywhere, increasing reach by 60%.",
    packages: ["Clinic Suite: $10k+", "Health Network: $25k+", "Scale"],
    count: "Global"
  },
];

export default function ServiceGrid() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  if (selectedService) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="detail"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="w-full glass rounded-[3rem] p-8 md:p-16 relative min-h-[600px] flex flex-col items-center justify-center text-center"
        >
          <button 
            onClick={() => setSelectedService(null)}
            className="absolute top-8 right-8 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all z-20"
          >
            <X size={24} />
          </button>

          <div className="max-w-4xl w-full">
            <div className="w-20 h-20 bg-brand-orange/20 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-brand-orange/30">
              <selectedService.icon className="text-brand-orange" size={40} />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">{selectedService.title}</h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-12">
              {selectedService.details}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {selectedService.benefits.map((benefit) => (
                <div key={benefit} className="glass p-6 rounded-2xl flex flex-col items-center gap-3">
                  <CheckCircle2 className="text-brand-orange" size={24} />
                  <span className="text-sm font-bold tracking-tight">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
              <div className="glass p-8 rounded-[2rem] bg-brand-orange/5">
                <h4 className="flex items-center gap-2 font-display font-bold text-xl mb-4">
                  <Zap className="text-brand-orange" size={20} />
                  Efficiency Impact
                </h4>
                <p className="text-text-secondary">{selectedService.impact}</p>
              </div>
              <div className="glass p-8 rounded-[2rem]">
                <h4 className="flex items-center gap-2 font-display font-bold text-xl mb-4 text-brand-orange">
                  <Layers size={20} />
                  Package Estimates
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedService.packages.map(p => (
                    <span key={p} className="px-4 py-2 bg-text-primary/5 rounded-full text-xs font-bold">{p}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-6">
              <button className="px-10 py-5 bg-brand-orange text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-brand-orange/20 flex items-center gap-2 group">
                Consult for {selectedService.title}
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={() => setSelectedService(null)}
                className="px-10 py-5 glass rounded-full font-bold text-lg hover:bg-text-primary/10 transition-all font-display"
              >
                Back to Services
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          id={service.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          onClick={() => {
            setSelectedService(service);
            window.scrollTo({ top: document.getElementById('services')?.offsetTop || 0, behavior: 'smooth' });
          }}
          className="glass p-8 rounded-3xl group cursor-pointer hover:border-brand-orange transition-all relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
            <ExternalLink size={20} className="text-brand-orange" />
          </div>
          
          <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors">
            <service.icon className="text-brand-orange group-hover:text-white transition-colors" size={28} />
          </div>
          
          <h3 className="text-2xl font-display font-bold mb-3">{service.title}</h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-6">
            {service.desc}
          </p>
          
          <div className="pt-6 border-t border-border-primary flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-widest text-text-secondary">Focus Reach</span>
            <span className="text-lg font-display font-bold text-brand-orange">{service.count}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
