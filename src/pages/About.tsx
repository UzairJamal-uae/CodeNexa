import { motion } from 'framer-motion';
import { Users, Target, Rocket, Award, ExternalLink } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';

export default function About() {
  const team = [
    {
      name: "Uzair Jamal",
      role: "Founder / CEO",
      image: img1,
      website: "uzairjamal.netlify.app",
      bio: "Visionary technologist dedicated to revolutionizing the IT landscape through CodeNexa."
    },
    {
      name: "Munazza Batool",
      role: "Co-Founder / COO",
      image: img2,
      bio: "Operational mastermind ensuring excellence in service delivery and client satisfaction."
    }
  ];

  return (
    <div className="pt-32 min-h-screen">
      {/* Hero Header */}
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none">
          <span className="text-[10rem] md:text-[15rem] lg:text-[20rem] font-display font-black">URBIX</span>
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8"
        >
          Our <span className="text-gradient">Story</span>
        </motion.h1>
        <p className="max-w-2xl mx-auto text-zinc-400 text-base md:text-lg px-4">
          CodeNexa, a subsidiary of <strong>Urbix</strong>, was founded with a single mission: to empower businesses through unparalleled technological innovation.
        </p>
      </section>

      {/* Philosophy Section */}
      <SectionWrapper className="section-padding bg-brand-gray/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { icon: Target, title: "Our Mission", desc: "To bridge the gap between complex technology and practical business success through smart, scalable IT solutions." },
            { icon: Rocket, title: "Our Vision", desc: "To be the global benchmark for excellence in AI integration, software development, and digital transformation." },
            { icon: Award, title: "Our Values", desc: "Integrity, innovation, and impact. We don't just build products; we build long-term value for our partners." }
          ].map((item, i) => (
            <div key={i} className="glass p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] text-center group hover:border-brand-orange transition-all">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-orange transition-colors">
                <item.icon className="text-brand-orange group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-4">{item.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Leadership Section */}
      <SectionWrapper className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold">The Minds Behind <br /> <span className="text-gradient">CodeNexa</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <motion.div 
                key={member.name}
                whileHover={{ y: -10 }}
                className="glass p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] flex flex-col md:flex-row gap-8 md:gap-10 items-center border-brand-orange/10"
              >
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-brand-orange/10 p-2 border-2 border-dashed border-brand-orange/30 shrink-0">
                  <div className="w-full h-full rounded-full bg-zinc-800 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-1">{member.name}</h3>
                  <div className="text-brand-orange font-semibold uppercase tracking-wider text-[10px] md:text-sm mb-4">{member.role}</div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  {member.website && (
                    <a 
                      href={`https://${member.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-zinc-300 hover:text-brand-orange transition-colors font-semibold text-sm"
                    >
                      Visit Profile <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
