import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Briefcase } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check initial theme
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('light', savedTheme === 'light');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out flex justify-center py-4 px-6 ${
        isScrolled ? 'top-4' : 'top-0'
      }`}
    >
      <div 
        className={`w-full max-w-7xl flex items-center justify-between transition-all duration-500 px-6 py-3 ${
          isScrolled 
            ? 'glass rounded-full shadow-2xl shadow-black/20' 
            : 'bg-transparent border-b border-border-primary'
        }`}
      >
        {/* Circular Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-orange rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg shadow-brand-orange/30">
            <span className="text-white font-bold text-lg md:text-xl"><img src= {logo} alt="&lt;N&gt;" /></span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg md:text-xl font-bold tracking-tighter">CodeNexa</span>
            <span className="text-[8px] md:text-[10px] text-text-secondary uppercase tracking-widest font-medium">by Urbix</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`relative text-sm font-medium tracking-wide transition-colors hover:text-brand-orange ${
                location.pathname === link.path ? 'text-brand-orange' : 'text-text-secondary'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="activeLink"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-orange"
                />
              )}
            </Link>
          ))}
          
          <div className="h-6 w-[1.5px] bg-border-primary mx-2" />
          
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand-orange transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link 
            to="/contact"
            className="px-6 py-2 bg-brand-orange text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-all shadow-lg shadow-brand-orange/20 hover:scale-105 active:scale-95"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full glass flex items-center justify-center"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button 
            className="text-text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 glass rounded-3xl p-8 flex flex-col gap-6 md:hidden z-50"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-semibold hover:text-brand-orange transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 bg-brand-orange text-white rounded-2xl text-center font-bold"
            >
              Start Your Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
