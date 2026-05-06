import { motion } from 'framer-motion';

export const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const socialLinks = [
    { icon: 'facebook', url: '#', label: 'Facebook' },
    { icon: 'instagram', url: '#', label: 'Instagram' },
    { icon: 'youtube', url: '#', label: 'YouTube' },
    { icon: 'twitter', url: '#', label: 'Twitter' },
  ];

  return (
    <footer id="contact" className="py-28 bg-gradient-to-b from-navy-900 via-navy-900 to-navy-900/95 text-white px-4 md:px-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-tan-600 mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Thank You for Visiting
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gold-dust italic font-light mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            "May your life be a continuous song of praise."
          </motion.p>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-gold-500 to-tan-600 mx-auto mb-3"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <p className="text-gold-500/80 mt-4 font-serif">— Psalm 47:7</p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {/* Email */}
          <motion.div 
            variants={itemVariants} 
            className="group text-center"
            whileHover={{ y: -8 }}
          >
            <motion.div 
              className="flex justify-center mb-6"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <div className="bg-gradient-to-br from-gold-500/30 to-tan-600/20 rounded-full p-5 group-hover:from-gold-500/40 group-hover:to-tan-600/30 transition-all duration-300 border border-gold-500/30">
                <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </motion.div>
            <h3 className="text-gold-500 text-lg font-serif font-bold mb-3">Email</h3>
            <a href="mailto:contact@tremendousvoices.com" className="text-gray-300 hover:text-gold-dust transition duration-300 font-light">
              contact@tremendousvoices.com
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div 
            variants={itemVariants} 
            className="group text-center"
            whileHover={{ y: -8 }}
          >
            <motion.div 
              className="flex justify-center mb-6"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <div className="bg-gradient-to-br from-gold-500/30 to-tan-600/20 rounded-full p-5 group-hover:from-gold-500/40 group-hover:to-tan-600/30 transition-all duration-300 border border-gold-500/30">
                <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </motion.div>
            <h3 className="text-gold-500 text-lg font-serif font-bold mb-3">Phone</h3>
            <a href="tel:+1234567890" className="text-gray-300 hover:text-gold-dust transition duration-300 font-light">
              +1 (234) 567-890
            </a>
          </motion.div>

          {/* Location */}
          <motion.div 
            variants={itemVariants} 
            className="group text-center"
            whileHover={{ y: -8 }}
          >
            <motion.div 
              className="flex justify-center mb-6"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <div className="bg-gradient-to-br from-gold-500/30 to-tan-600/20 rounded-full p-5 group-hover:from-gold-500/40 group-hover:to-tan-600/30 transition-all duration-300 border border-gold-500/30">
                <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </motion.div>
            <h3 className="text-gold-500 text-lg font-serif font-bold mb-3">Location</h3>
            <p className="text-gray-300 font-light">City Name, State, Country</p>
          </motion.div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              title={link.label}
              whileHover={{ scale: 1.1, color: '#FFD700' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-500/20 hover:bg-gold-500/40 p-4 rounded-full transition-colors duration-300"
            >
              {link.icon === 'facebook' && (
                <svg className="w-6 h-6 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              )}
              {link.icon === 'instagram' && (
                <svg className="w-6 h-6 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.521 17.17c-1.887 1.887-5.057 1.887-6.944 0-1.887-1.887-1.887-5.057 0-6.944 1.887-1.887 5.057-1.887 6.944 0 1.887 1.887 1.887 5.057 0 6.944m1.414-8.586a4 4 0 11-8 0 4 4 0 018 0m1.06-5.656a1 1 0 11-2 0 1 1 0 012 0" />
                </svg>
              )}
              {link.icon === 'youtube' && (
                <svg className="w-6 h-6 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              )}
              {link.icon === 'twitter' && (
                <svg className="w-6 h-6 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              )}
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent my-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm"
        >
          <p>&copy; 2024 Tremendous Voices Music Ministry. All rights reserved.</p>
          <p className="mt-2 italic text-gold-500">
            "Sing to the Lord, all the earth; proclaim good news of His salvation from day to day." — Psalm 96:2
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default ContactSection;
