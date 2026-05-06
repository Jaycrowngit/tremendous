import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProgramsSection = ({ flyerImage }) => {
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    department: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', department: '' });
      setShowVolunteerForm(false);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section id="programs" className="py-28 bg-gradient-to-b from-cream via-white to-cream px-4 md:px-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -mr-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl -ml-48"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-gold-500 font-serif text-sm tracking-widest uppercase block mb-4">Join Us</span>
          <h2
            className="text-5xl md:text-6xl font-serif text-navy-900 mb-6 border-b-4 border-gold-500 w-fit mx-auto pb-6"
          >
            Upcoming Events
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg italic max-w-2xl mx-auto mt-8 font-light"
          >
            "For God is the King of all the earth; sing praises with understanding." — Psalm 47:7
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Flyer Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl border-2 border-gold-500/30 cursor-pointer transition-shadow duration-300 group"
          >
            {/* Accent Top Border */}
            <div className="h-1 bg-gradient-to-r from-gold-500 to-tan-600"></div>
            
            <motion.img
              src={flyerImage}
              alt="Upcoming Program Flyer"
              className="w-full h-auto object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          {/* Interaction Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center h-full space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-500 font-serif text-sm tracking-widest uppercase block mb-4">Serving in Excellence</span>
              <h3
                className="text-4xl md:text-5xl font-serif font-bold text-navy-900 leading-tight"
              >
                Join the Sound of Worship
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-tan-600 mt-6"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed text-lg font-light"
            >
              Be a part of our next divine encounter. We are looking for passionate souls to serve in the vineyard. Whether you have a voice, technical skills, or a willing heart, there's a place for you in our ministry.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => setShowVolunteerForm(!showVolunteerForm)}
              whileHover={{ scale: 1.06, boxShadow: "0 15px 40px rgba(212, 175, 55, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-fit px-8 py-4 bg-gradient-to-r from-navy-900 to-navy-900/80 text-gold-500 text-lg font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <motion.span
                className="relative z-10 flex items-center gap-2"
                whileHover={{ gap: 8 }}
              >
                <span>{showVolunteerForm ? 'Close Registration' : 'Register as a Volunteer'}</span>
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ y: showVolunteerForm ? 4 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gold-500 to-tan-600"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                style={{ transformOrigin: 'left', zIndex: 0 }}
              />
            </motion.button>

            {/* Volunteer Form */}
            <AnimatePresence>
              {showVolunteerForm && (
                <motion.form
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="overflow-hidden bg-white p-8 rounded-2xl border-2 border-gold-500/30 space-y-6 shadow-xl"
                >
                  {/* Form Header */}
                  <div className="pb-6 border-b border-gold-500/20">
                    <h4 className="text-2xl font-serif text-navy-900 font-bold mb-2">Join Our Team</h4>
                    <p className="text-gray-600 text-sm">Fill in your details to volunteer with us</p>
                  </div>

                  <div>
                    <label className="block text-navy-900 font-semibold mb-3 text-sm tracking-wide uppercase">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full p-4 rounded-lg border-2 border-gold-500/20 focus:border-gold-500 focus:outline-none transition bg-cream/50 hover:bg-cream"
                    />
                  </div>

                  <div>
                    <label className="block text-navy-900 font-semibold mb-3 text-sm tracking-wide uppercase">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                      className="w-full p-4 rounded-lg border-2 border-gold-500/20 focus:border-gold-500 focus:outline-none transition bg-cream/50 hover:bg-cream"
                    />
                  </div>

                  <div>
                    <label className="block text-navy-900 font-semibold mb-3 text-sm tracking-wide uppercase">Department</label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 rounded-lg border-2 border-gold-500/20 focus:border-gold-500 focus:outline-none transition bg-cream/50 hover:bg-cream text-navy-900 font-medium"
                    >
                      <option value="">Select Department</option>
                      <option value="vocals">Vocals</option>
                      <option value="instrumentation">Instrumentation</option>
                      <option value="media">Technical/Media</option>
                      <option value="ushering">Ushering</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-lg font-bold text-center shadow-lg flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Thank you! We'll be in touch soon.
                    </motion.div>
                  ) : (
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-tan-600 to-gold-500 text-navy-900 py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-300 font-serif text-lg"
                    >
                      Submit Registration
                    </motion.button>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
