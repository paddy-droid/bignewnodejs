'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';
import FloatingCTAButton from './FloatingCTAButton';

const Header: React.FC = () => {
  // Initialize with false to ensure server and client match
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20); // Header background change
      setShowCTA(scrollPosition > window.innerHeight * 0.1); // CTA visibility
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case the page loads scrolled
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md h-20' : 'bg-transparent h-24'}`}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/Images/Fensterservice ROWO Fensterreparatur Tulln, Wien und Niederösterreich.png"
                alt="Fensterservice ROWO Logo"
                width={150}
                height={50}
                className="h-auto w-auto max-h-12"
                priority
              />
            </Link>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/leistungen" className="text-gray-600 hover:text-gray-900 transition-colors">Leistungen</Link>
                            <div className="relative" onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) { setIsServiceMenuOpen(false); } }}>
                              <button
                                onClick={() => setIsServiceMenuOpen(!isServiceMenuOpen)}
                                className="text-gray-600 hover:text-gray-900 transition-colors flex items-center group"
                              >
                                Serviceregionen <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-300 ${isServiceMenuOpen ? 'rotate-180' : ''}`} />
                              </button>
                              <AnimatePresence>
                                {isServiceMenuOpen && (
                                  <>
                                    {/* Backdrop Blur Effect */}
                                    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm z-10" onClick={() => setIsServiceMenuOpen(false)} />
                                    <motion.div
                                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                      animate={{ opacity: 1, y: 0, scale: 1 }}
                                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                      transition={{ duration: 0.2, ease: "easeOut" }}
                                      className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl z-20 overflow-hidden"
                                    >
                                      <div className="p-1">
                                        <motion.div
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          transition={{ delay: 0.1, duration: 0.3 }}
                                        >
                                          <Link href="/wien" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 rounded-lg transition-all duration-200" onClick={() => setIsServiceMenuOpen(false)}>
                                            <div className="flex items-center">
                                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                              Wien
                                            </div>
                                          </Link>
                                        </motion.div>
                                        <motion.div
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          transition={{ delay: 0.15, duration: 0.3 }}
                                        >
                                          <Link href="/tulln" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 rounded-lg transition-all duration-200" onClick={() => setIsServiceMenuOpen(false)}>
                                            <div className="flex items-center">
                                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                              Tulln
                                            </div>
                                          </Link>
                                        </motion.div>
                                        <motion.div
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          transition={{ delay: 0.2, duration: 0.3 }}
                                        >
                                          <Link href="/st-poelten" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 rounded-lg transition-all duration-200" onClick={() => setIsServiceMenuOpen(false)}>
                                            <div className="flex items-center">
                                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                              St. Pölten
                                            </div>
                                          </Link>
                                        </motion.div>
                                        <motion.div
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          transition={{ delay: 0.25, duration: 0.3 }}
                                        >
                                          <Link href="/krems" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 rounded-lg transition-all duration-200" onClick={() => setIsServiceMenuOpen(false)}>
                                            <div className="flex items-center">
                                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                              Krems
                                            </div>
                                          </Link>
                                        </motion.div>
                                        <motion.div
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          transition={{ delay: 0.3, duration: 0.3 }}
                                        >
                                          <Link href="/baden-bei-wien" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 rounded-lg transition-all duration-200" onClick={() => setIsServiceMenuOpen(false)}>
                                            <div className="flex items-center">
                                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                              Baden bei Wien
                                            </div>
                                          </Link>
                                        </motion.div>
                                        <motion.div
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          transition={{ delay: 0.35, duration: 0.3 }}
                                        >
                                          <Link href="/klosterneuburg" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 rounded-lg transition-all duration-200" onClick={() => setIsServiceMenuOpen(false)}>
                                            <div className="flex items-center">
                                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                              Klosterneuburg
                                            </div>
                                          </Link>
                                        </motion.div>
                                      </div>
                                    </motion.div>
                                  </>
                                )}
                              </AnimatePresence>
                            </div>
                            <Link href="/velux-reparatur" className="text-gray-600 hover:text-gray-900 transition-colors">Velux Reparatur</Link>
                            <Link href="/ueber-uns" className="text-gray-600 hover:text-gray-900 transition-colors">Über uns</Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</Link>
              <Link href="/kontakt" className="text-gray-600 hover:text-gray-900 transition-colors">Kontakt</Link>
              <Link href="/notdienst" className="text-red-600 font-semibold hover:text-red-800 transition-colors flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  24h Notdienst
              </Link>
              <a
                href="#"
                className="bg-green-500 text-white text-sm font-semibold px-4 py-2 md:px-6 rounded-md hover:bg-green-600 transition-colors flex items-center gap-1"
                aria-label="Geprüfter Fachbetrieb"
              >
                 ✅ Geprüfter Fachbetrieb
              </a>
            </div>

            <MobileMenu />
          </div>
        </div>
      </header>
      {isMounted && showCTA && <FloatingCTAButton />}
    </>
  );
};

export default Header;