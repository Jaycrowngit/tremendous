import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProgramsSection = ({ flyerImage }) => {
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', department: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Save to localStorage
    const existingData = JSON.parse(localStorage.getItem('tremendous_volunteers') || '[]');
    const newEntry = {
      ...formData,
      date: new Date().toISOString(),
      id: Date.now().toString()
    };
    localStorage.setItem('tremendous_volunteers', JSON.stringify([...existingData, newEntry]));

    setTimeout(() => {
      setFormData({ name: '', phone: '', department: '' });
      setShowVolunteerForm(false);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section id="programs" className="py-24 md:py-32 bg-white px-4 md:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-gold-500/[0.03] to-transparent rounded-full -mr-64 -mt-64" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-semibold">Join Us</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-900 mt-3 mb-5">Upcoming Events</h2>
          <div className="h-[3px] w-16 bg-gradient-to-r from-gold-500 to-tan-600 mx-auto mb-8 rounded-full" />
          <p className="text-navy-900/40 text-base max-w-2xl mx-auto italic font-light">
            "For God is the King of all the earth; sing praises with understanding." — Psalm 47:7
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Flyer */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} whileHover={{ y: -8 }}
            className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.12)] border border-navy-900/5 transition-all duration-400 group">
            <div className="h-[3px] bg-gradient-to-r from-gold-500 to-tan-600" />
            <motion.img src={flyerImage} alt="Upcoming Program Flyer" className="w-full h-auto object-cover" whileHover={{ scale: 1.03 }} transition={{ duration: 0.5 }} />
          </motion.div>

          {/* Interaction */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex flex-col justify-center space-y-8">
            <div>
              <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-semibold block mb-4">Volunteers'</span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 leading-tight">Want To Part Of The Ministry</h3>
              <div className="h-[3px] w-14 bg-gradient-to-r from-gold-500 to-tan-600 mt-6 rounded-full" />
            </div>

            <p className="text-navy-900/50 leading-relaxed text-base font-light">
              Be a part of our next divine encounter. We are looking for passionate souls to serve in the vineyard. Whether you have a voice, technical skills, or a willing heart, there's a place for you.
            </p>

            <motion.button onClick={() => setShowVolunteerForm(!showVolunteerForm)} whileHover={{ scale: 1.04, boxShadow: '0 15px 40px rgba(0, 33, 71, 0.15)' }} whileTap={{ scale: 0.96 }}
              className="w-fit px-8 py-4 bg-gradient-to-r from-navy-900 to-navy-900/90 text-white text-sm font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center gap-2">
              {showVolunteerForm ? 'Close Registration' : 'Register as a Volunteer'}
              <motion.svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" animate={{ rotate: showVolunteerForm ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </motion.button>

            <AnimatePresence>
              {showVolunteerForm && (
                <motion.form initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }} onSubmit={handleSubmit}
                  className="overflow-hidden bg-white p-8 rounded-2xl border border-navy-900/8 space-y-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  <div className="pb-5 border-b border-navy-900/5">
                    <h4 className="text-xl font-serif text-navy-900 font-bold mb-1">Join Our Team</h4>
                    <p className="text-navy-900/40 text-sm">Fill in your details to volunteer with us</p>
                  </div>
                  {[
                    { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Enter your full name' },
                    { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: 'Enter your phone number' },
                  ].map(field => (
                    <div key={field.name}>
                      <label className="block text-navy-900/70 font-semibold mb-2 text-xs tracking-wide uppercase">{field.label}</label>
                      <input type={field.type} name={field.name} value={formData[field.name]} onChange={handleInputChange} placeholder={field.placeholder} required
                        className="w-full p-3.5 rounded-xl border border-navy-900/10 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10 transition bg-white hover:border-navy-900/20 text-navy-900 text-sm" />
                    </div>
                  ))}
                  <div>
                    <label className="block text-navy-900/70 font-semibold mb-2 text-xs tracking-wide uppercase">Department</label>
                    <select name="department" value={formData.department} onChange={handleInputChange} required
                      className="w-full p-3.5 rounded-xl border border-navy-900/10 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10 transition bg-white hover:border-navy-900/20 text-navy-900 text-sm">
                      <option value="">Select Department</option>
                      <option value="vocals">Vocals</option>
                      <option value="instrumentation">Instrumentation</option>
                      <option value="media">Technical/Media</option>
                      <option value="ushering">Ushering</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  {submitted ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full bg-emerald-50 text-emerald-700 border border-emerald-200 py-4 rounded-xl font-semibold text-center text-sm flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Thank you! We'll be in touch soon.
                    </motion.div>
                  ) : (
                    <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-gold-500 to-tan-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-sm">
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
