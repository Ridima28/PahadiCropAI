import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf, Cpu, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#footer' },
];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-md shadow-emerald-500/25">
              <Leaf size={16} className="text-white" />
            </div>
            <div>
              <span className="font-heading font-bold text-base text-foreground">PahadiCrop</span>
              <span className="text-[10px] bg-gradient-to-r from-emerald-600 to-sky-500 bg-clip-text text-transparent font-semibold ml-1">AI</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-400 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
        <button className="px-3 py-1.5 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
        Login</button>
            </Link>
            <Link to="/chat">
        <button className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white shadow-md shadow-emerald-500/20 transition">

                Get Started
                <ChevronRight size={14} className="ml-1" />
              </button>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-400 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 flex gap-3">
                <Link to="/login" className="flex-1">
            <button className="w-full px-3 py-2 text-sm font-medium rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Login</button>
                </Link>
                <Link to="/chat" className="flex-1">
            <button className="w-full px-3 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-500 hover:to-emerald-600 transition">
            Get Started</button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}