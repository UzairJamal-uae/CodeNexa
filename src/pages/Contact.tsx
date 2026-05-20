import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Coffee, Globe } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

export default function Contact() {
  const offices = [
    {
      country: "USA",
      address: "242 Park Ville, Ave 2, Brooklyn, NY",
      phone: "+1 929-244-9363",
      email: "codenexa.contact@gmail.com"
    },
    {
      country: "Pakistan",
      address: "Nawaz Chowk, Jhang Sadar, Punjab",
      phone: "+92 0371-1467045",
      email: "codenexa.contact@gmail.com"
    }
  ];

  return (
    <div className="pt-32 min-h-screen">
      <SectionWrapper className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Info */}
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8">
              Let's <span className="text-gradient">Talk</span>
            </h1>
            <p className="text-base md:text-lg text-zinc-400 mb-12 max-w-md">
              Whether you have a specific project in mind or just want to explore how technology can boost your business, we're here to help.
            </p>

            <div className="space-y-8 md:space-y-12">
              {offices.map((office) => (
                <div key={office.country} className="flex flex-col gap-6 p-6 md:p-8 glass rounded-[2rem] md:rounded-[2.5rem] border-brand-orange/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center">
                      <Globe size={20} className="text-brand-orange" />
                    </div>
                    <h3 className="text-xl font-display font-bold">{office.country} Office</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 text-zinc-400">
                      <MapPin className="text-brand-orange shrink-0 mt-1" size={18} />
                      <span className="text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-start gap-4 text-zinc-400">
                      <Phone className="text-brand-orange shrink-0" size={18} />
                      <span className="text-sm font-mono tracking-tight">{office.phone}</span>
                    </div>
                    <div className="flex items-start gap-4 text-zinc-400">
                      <Mail className="text-brand-orange shrink-0" size={18} />
                      <span className="text-sm">{office.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form / Coffee */}
          <div className="flex flex-col gap-8">
            <div className="glass p-6 md:p-14 rounded-4xl md:rounded-[3.5rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-orange/10 blur-[50px]" />
              
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-orange rounded-xl md:rounded-2xl flex items-center justify-center">
                  <Coffee size={20} className="text-white md:size-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold italic">Free Virtual Coffee</h3>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Consultation Session</p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-4">Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 md:py-4 focus:border-brand-orange outline-none transition-all text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-4">Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 md:py-4 focus:border-brand-orange outline-none transition-all text-sm" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-4">Project Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 md:py-4 focus:border-brand-orange outline-none transition-all appearance-none cursor-pointer text-sm">
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>AI Integration</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-4">Message</label>
                  <textarea rows={4} placeholder="How can we help?" className="w-full bg-white/5 border border-white/10 rounded-3xl md:rounded-4xl px-6 py-3 md:py-4 focus:border-brand-orange outline-none transition-all resize-none text-sm" />
                </div>

                <button className="w-full py-4 md:py-5 bg-brand-orange text-white rounded-full font-bold text-base md:text-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-orange/20">
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>

            <div className="glass p-6 md:p-8 rounded-3xl md:rounded-4xl border-dashed border-white/20 text-center">
              <p className="text-zinc-500 text-xs md:text-sm">
                Prefer a direct meeting? <a href="https://calendly.com/uzairjamal-dev/30min" target="_blank"><button className="text-brand-orange font-bold hover:underline">Click here</button></a> to book via Calendly.
              </p>
            </div>
          </div>

        </div>
      </SectionWrapper>
    </div>
  );
}
