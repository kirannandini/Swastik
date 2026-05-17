import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';
import ChatBot from './ChatBot';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-white shadow-sm py-4 border-b border-gray-200' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-brand flex items-center justify-center rounded-sm">
              <img 
                src="https://as1.ftcdn.net/v2/jpg/05/95/48/58/1000_F_595485800_NZ5WDyJDXbHSzre22hkLLyZf5lvI8U2w.jpg" 
                alt="Swastik Symbol" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="leading-none">
              <h1 className="text-lg font-extrabold text-brand-dark tracking-tight uppercase">Swastik</h1>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Ceramics & Co </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative ${
                  location.pathname === link.path ? 'text-brand border-b-2 border-brand pb-1' : 'text-gray-600 hover:text-brand'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="bg-brand text-white px-5 py-2 text-sm font-bold rounded-sm shadow-sm uppercase tracking-wide hover:bg-brand-dark transition-colors"
            >
              Inquiry
            </Link>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white border-b border-gray-100 py-8 px-6 flex flex-col space-y-6 md:hidden shadow-xl"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-bold uppercase tracking-widest ${
                    location.pathname === link.path ? 'text-brand' : 'text-gray-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-8">SWASTIK</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              Redefining comfort and elegance for your living spaces. From state-of-the-art cooling solutions to premium ceramic masterpieces.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold mb-8 text-brand">Products</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/products" className="hover:text-white transition-colors">Ceramic Collections</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Sanitaryware</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold mb-8 text-brand">Contact Us</h3>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start space-x-4">
                <MapPin size={18} className="text-brand shrink-0" />
                <span className="text-gray-400">600, No#600/35-35, Aurobindo Marg, Jayanagar 5th Block, Bangalore-560041, Karnataka<br />Near Raghavendra Swamy Temple</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={18} className="text-brand shrink-0" />
                <span className="text-gray-400">+91 9108315736</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={18} className="text-brand shrink-0" />
                <span className="text-gray-400">info@swastikac.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 text-center text-xs text-gray-500 tracking-widest uppercase">
          © 2024 SWASTIK AIRCONDITIONER & CERAMICS. ALL RIGHTS RESERVED.
        </div>
      </footer>
      
      <ChatBot />
    </div>
  );
}
