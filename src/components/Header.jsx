import { useState } from 'react';
import { motion } from 'framer-motion';

export const Header = ({ logo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-navy-900/95 backdrop-blur-md py-4 px-4 md:px-8 flex justify-between items-center border-b border-gold-500/20 shadow-2xl">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center"
      >
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <img 
            src={logo} 
            alt="Tremendous Voices Logo" 
            className="h-12 w-auto md:h-14 drop-shadow-lg hover:drop-shadow-xl transition-all" 
          />
        </motion.div>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-gold-500 font-medium">
        {['about', 'founders', 'leaders', 'programs', 'gallery', 'contact'].map((item) => (
          <motion.a 
            key={item}
            href={`#${item}`}
            className="relative group text-base tracking-wide capitalize"
            whileHover={{ color: '#FFD700' }}
          >
            {item}
            <motion.span 
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-500 to-tan-600 group-hover:w-full transition-all duration-300"
            />
          </motion.a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-gold-500 p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <motion.svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </motion.svg>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-navy-900/98 backdrop-blur-md md:hidden border-b border-gold-500/20"
        >
          <div className="flex flex-col gap-4 p-6 text-gold-500">
            {['about', 'founders', 'leaders', 'programs', 'gallery', 'contact'].map((item) => (
              <motion.a 
                key={item}
                href={`#${item}`}
                className="capitalize hover:text-gold-dust transition text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ x: 10 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Header;
