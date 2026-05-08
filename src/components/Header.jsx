import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = ({ logo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Founder', href: '#founders' },
    { label: 'Leaders', href: '#leaders' },
    { label: 'Programs', href: '#programs' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-white/97 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] border-b border-gold-500/10'
          : 'py-5 bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-2 sm:gap-3"
        >
          <img
            src={logo}
            alt="Tremendous Voices Logo"
            className={`transition-all duration-300 drop-shadow-sm ${
              scrolled ? 'h-8 sm:h-10' : 'h-10 sm:h-12 md:h-14'
            }`}
          />
          <div className="block">
            <p className={`font-serif font-bold leading-tight transition-all duration-300 ${
              scrolled ? 'text-sm sm:text-base' : 'text-base sm:text-lg'
            } text-navy-900`}>
              Tremendous
            </p>
            <p className={`transition-all duration-300 ${
              scrolled ? 'text-[8px]' : 'text-[9px] sm:text-[10px]'
            } tracking-[0.2em] sm:tracking-[0.25em] uppercase text-gold-500 font-semibold`}>
              Voices Ministry
            </p>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium tracking-wide text-navy-900/70 hover:text-navy-900 transition-colors duration-300 group"
              whileHover={{ y: -1 }}
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-gold-500 to-tan-600 group-hover:w-3/4 transition-all duration-300 rounded-full" />
            </motion.a>
          ))}
          <motion.a
          icon="whatsapp"
            href="https://chat.whatsapp.com/B5yKMsaeJXU7ggWZK05k8V"
            whileHover={{ scale: 1.04, boxShadow: '0 8px 25px rgba(212, 175, 55, 0.25)' }}
            whileTap={{ scale: 0.96 }}
            className="ml-4 px-6 py-2.5 bg-gradient-to-r from-navy-900 to-navy-900/90 text-gold-500 text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            Join Our Community
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-navy-900/5 hover:bg-navy-900/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.div className="flex flex-col gap-1.5 w-5">
            <motion.span
              className="block h-[2px] bg-navy-900 rounded-full origin-center"
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 5 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-[2px] bg-navy-900 rounded-full"
              animate={{ opacity: mobileMenuOpen ? 0 : 1, scaleX: mobileMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[2px] bg-navy-900 rounded-full origin-center"
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? -5 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white/98 backdrop-blur-xl border-t border-gold-500/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-navy-900/80 hover:text-navy-900 hover:bg-gold-500/5 transition-all font-medium text-[15px]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gold-500 to-tan-600" />
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="https://chat.whatsapp.com/B5yKMsaeJXU7ggWZK05k8V"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 mx-4 px-6 py-3 bg-gradient-to-r from-navy-900 to-navy-900/90 text-gold-500 text-sm font-semibold rounded-full text-center shadow-md"
              >
            Join Our Community
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;
