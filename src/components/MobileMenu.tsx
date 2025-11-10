"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Phone, ChevronDown, Home, Wrench, MapPin, Settings, User, MessageSquare, AlertCircle } from 'lucide-react'; // Import icons
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu className="h-6 w-6 text-gray-600" />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-50 flex flex-col p-6 md:hidden"
            style={{ backgroundColor: 'white !important' }}
            onClick={(e) => {
              // Close menu if the click target is the overlay itself
              if (e.target === e.currentTarget) {
                setIsMenuOpen(false);
              }
            }}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex justify-end"
            >
              <button onClick={() => setIsMenuOpen(false)}>
                <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
            <nav className="flex flex-col items-center space-y-6 mt-8 flex-grow">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                <Link href="/" className="text-xl text-gray-800 hover:text-blue-600 transition-colors flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                  <Home className="h-5 w-5" />
                  Home
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Link href="/leistungen" className="text-xl text-gray-800 hover:text-blue-600 transition-colors flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                  <Wrench className="h-5 w-5" />
                  Leistungen
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.25 }}
              >
                <Link href="/spezialleistungen" className="text-xl text-gray-800 hover:text-blue-600 transition-colors flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                  <Settings className="h-5 w-5" />
                  Spezialleistungen
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div>
                  <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="text-xl text-gray-800 hover:text-blue-600 transition-colors flex items-center gap-3">
                    <MapPin className="h-5 w-5" />
                    Serviceregionen <ChevronDown className={`h-5 w-5 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center space-y-4 mt-4 overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.2, delay: 0.05 }}
                        >
                          <Link href="/wien" className="text-lg text-gray-600 hover:text-blue-600 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            Wien
                          </Link>
                        </motion.div>
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                        >
                          <Link href="/tulln" className="text-lg text-gray-600 hover:text-blue-600 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            Tulln
                          </Link>
                        </motion.div>
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.2, delay: 0.15 }}
                        >
                          <Link href="/st-poelten" className="text-lg text-gray-600 hover:text-blue-600 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            St. Pölten
                          </Link>
                        </motion.div>
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.2, delay: 0.2 }}
                        >
                          <Link href="/krems" className="text-lg text-gray-600 hover:text-blue-600 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            Krems
                          </Link>
                        </motion.div>
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.2, delay: 0.25 }}
                        >
                          <Link href="/baden-bei-wien" className="text-lg text-gray-600 hover:text-blue-600 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            Baden bei Wien
                          </Link>
                        </motion.div>
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.2, delay: 0.3 }}
                        >
                          <Link href="/klosterneuburg" className="text-lg text-gray-600 hover:text-blue-600 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            Klosterneuburg
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.35 }}
              >
                <Link href="/velux-reparatur" className="text-xl text-gray-800 hover:text-blue-600 transition-colors flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                  <Settings className="h-5 w-5" />
                  Velux Reparatur
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Link href="/ueber-uns" className="text-xl text-gray-800 hover:text-blue-600 transition-colors flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                  <User className="h-5 w-5" />
                  Über uns
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.45 }}
              >
                <Link href="/blog" className="text-xl text-gray-800 hover:text-blue-600 transition-colors flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                  <MessageSquare className="h-5 w-5" />
                  Blog
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Link href="/kontakt" className="text-xl text-gray-800 hover:text-blue-600 transition-colors flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                  <MessageSquare className="h-5 w-5" />
                  Kontakt
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.55 }}
              >
                <Link href="/notdienst" className="text-xl text-red-600 font-semibold hover:text-red-800 transition-colors flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                  <AlertCircle className="h-5 w-5" />
                  24h Notdienst
                </Link>
              </motion.div>
            </nav>

            {/* Ensure text color is dark for readability */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="flex flex-col items-center space-y-4 mb-8 text-gray-800"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#" // Replace with actual link for Geprüfter Fachbetrieb
                className="w-full text-center bg-green-500 text-white text-sm font-semibold px-4 py-3 rounded-md hover:bg-green-600 transition-colors flex items-center gap-2 justify-center"
                aria-label="Geprüfter Fachbetrieb"
                onClick={() => setIsMenuOpen(false)}
              >
                 ✅ Geprüfter Fachbetrieb
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Kostenlose Anfahrt bis 30.09.2025"
                className="w-full bg-blue-500 text-white px-4 py-3 rounded-md text-sm font-semibold hover:bg-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kostenlose Anfahrt bis 30.09.2025
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;