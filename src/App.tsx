import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Insights from './pages/Insights';
import ArticleDetail from './pages/ArticleDetail';
import PackageDetail from './pages/PackageDetail';
import ProjectDetail from './pages/ProjectDetail';
import ChatAssistant from './components/ChatAssistant';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-brand-orange selection:text-white bg-bg-primary text-text-primary overflow-x-hidden">
        <Navbar />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<ArticleDetail />} />
              <Route path="/packages/:slug" element={<PackageDetail />} />
              <Route path="/portfolio/:id" element={<ProjectDetail />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}
