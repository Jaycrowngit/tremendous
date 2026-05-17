import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProgramsSection = ({ flyerImage }) => {
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    dateOfBirth: '',
    birthdayMonth: '',
    state: '',
    currentStay: '',
    phoneNumber: '',
    whatsappContact: '',
    department: '',
    vocalInstrumentalist: '',
    instrument: '',
    musicMinistryDuration: '',
    choirBandExperience: '',
    church: '',
    joinInspiration: '',
    rehearsalAvailability: '',
    spiritualLeadership: '',
    expectations: '',
    musicalTraining: '',
    additionalInfo: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCloseSuccess = () => {
    setFormData({
      fullName: '',
      age: '',
      dateOfBirth: '',
      birthdayMonth: '',
      state: '',
      currentStay: '',
      phoneNumber: '',
      whatsappContact: '',
      department: '',
      vocalInstrumentalist: '',
      instrument: '',
      musicMinistryDuration: '',
      choirBandExperience: '',
      church: '',
      joinInspiration: '',
      rehearsalAvailability: '',
      spiritualLeadership: '',
      expectations: '',
      musicalTraining: '',
      additionalInfo: '',
    });
    setShowVolunteerForm(false);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "29e74b1a-1411-4688-90f0-af3fe21598a6",
          ...formData,
          subject: `New Volunteer Registration: ${formData.fullName}`,
          from_name: "Tremendous Voices Portal",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        
        // Keep local backup for Admin Page
        const existingData = JSON.parse(localStorage.getItem('tremendous_volunteers') || '[]');
        const newEntry = {
          ...formData,
          date: new Date().toISOString(),
          id: Date.now().toString()
        };
        localStorage.setItem('tremendous_volunteers', JSON.stringify([...existingData, newEntry]));
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Submission failed. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
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
          <motion.div id="volunteer-section" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex flex-col justify-center space-y-8">
            <div>
              <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-semibold block mb-4">Volunteers'</span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 leading-tight">Want To Be Part Of The Ministry</h3>
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
                  className="overflow-hidden bg-white p-8 rounded-2xl border border-navy-900/8 space-y-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] max-h-[80vh] overflow-y-auto">
                  <div className="pb-5 border-b border-navy-900/5 bg-white">
                    <h4 className="text-xl font-serif text-navy-900 font-bold mb-1">Join Our Team</h4>
                    <p className="text-navy-900/40 text-sm">Fill in your details to volunteer with us</p>
                  </div>

                  {/* Instructions */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="bg-gold-500/8 border border-gold-500/20 rounded-xl p-4 mb-2"
                  >
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-11-1a1 1 0 11-2 0 1 1 0 012 0zM10 7a1 1 0 100-2 1 1 0 000 2zm5 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-navy-900/70 text-sm font-semibold mb-2">Please Complete All Fields</p>
                        <p className="text-navy-900/50 text-xs leading-relaxed">
                          Take your time filling out this comprehensive form. Your responses help us understand your background, skills, and commitment to the ministry. Required fields are marked with an asterisk (*). After submission, join our WhatsApp group link That popup on your screen to stay connected with the team.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-navy-900/70 font-semibold mb-2 text-xs tracking-wide uppercase">What is your full name? *</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Enter your full name" required
                      className="w-full p-3.5 rounded-xl border border-navy-900/10 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10 transition bg-white hover:border-navy-900/20 text-navy-900 text-sm" />
                  </div>

                  {/* Age */}
                  <div>
                    <label className="block text-navy-900/70 font-semibold mb-2 text-xs tracking-wide uppercase">How old are you? *</label>
                    <input type="number" name="age" value={formData.age} onChange={handleInputChange} placeholder="Enter your age" required
                      className="w-full p-3.5 rounded-xl border border-navy-900/10 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10 transition bg-white hover:border-navy-900/20 text-navy-900 text-sm" />
                  </div>

                  {/* Date of Birth and Birthday Month */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-navy-900/70 font-semibold mb-2 text-xs tracking-wide uppercase">Date of Birth *</label>
                      <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} required
                        className="w-full p-3.5 rounded-xl border border-navy-900/10 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10 transition bg-white hover:border-navy-900/20 text-navy-900 text-sm" />
                    </div>
                    <div>
                      <label className="block text-navy-900/70 font-semibold mb-2 text-xs tracking-wide uppercase">Birthday Month *</label>
                      <select name="birthdayMonth" value={formData.birthdayMonth} onChange={handleInputChange} required
                        className="w-full p-3.5 rounded-xl border border-navy-900/10 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10 transition bg-white hover:border-navy-900/20 text-navy-900 text-sm">
                        <option value="">Select Month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                    </div>
                  </div>

                  {/* State */}
                  <div>
                    <label className="block text-navy-900/70 font-semibold mb-2 text-xs tracking-wide uppercase">Which state are you from? *</label>
                    <input type="text" name="state" value={formData.state} onChange={handleInputChange} placeholder="Enter your state" required
                      className="w-full p-3.5 rounded-xl border border-navy-900/10 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10 transition bg-white hover:border-navy-900/20 text-navy-900 text-sm" />
                  </div>

                  {/* Current Stay */}
                  <div>
                    <label className="block text-navy-900/70 font-semibold mb-2 text-xs tracking-wide uppercase">Where do you currently stay? *</label>
                    <input type="text" name="currentStay" value={formData.currentStay} onChange={handleInputChange} placeholder="Enter your current location" required
                      className="w-full p-3.5 rounded-xl border border-navy-900/10 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10 transition bg-white hover:border-navy-900/20 text-navy-900 text-sm" />
                  </div>

                  {/* Phone and WhatsApp */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-navy-900/70 font-semibold mb-2 text-xs tracking-wide uppercase">Phone Number *</label>
                      <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="Enter phone number" required
                        className="w-full p-3.5 rounded-xl border border-navy-900/10 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10 transition bg-white hover:border-navy-900/20 text-navy-900 text-sm" />
                    </div>
                    <div>
                      <label className="block text-navy-900/70 font-semibold mb-2 text-xs tracking-wide uppercase">WhatsApp Contact *</label>
                      <input type="tel" name="whatsappContact" value={formData.whatsappContact} onChange={handleInputChange} placeholder="Enter WhatsApp number" required
                        className="w-full p-3.5 rounded-xl border border-navy-900/10 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10 transition bg-white hover:border-navy-900/20 text-navy-900 text-sm" />
                    </div>
                  </div>

                  {/* Department */}
                  <div>
                    <label className="block text-navy-900/70 font-semibold mb-2 text-xs tracking-wide uppercase">Which department are you interested in? *</label>
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

                  {/* Vocalist or Instrumentalist */}
                  <div>
                    <label className="block text-navy-900/70 font-semibold mb-2 text-xs tracking-wide uppercase">Are you a vocalist or instrumentalist? *</label>
                    <select name="vocalInstrumentalist" value={formData.vocalInstrumentalist} onChange={handleInputChange} required
                      className="w-full p-3.5 rounded-xl border border-navy-900/10 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10 transition bg-white hover:border-navy-900/20 text-navy-900 text-sm">
                      <option value="">Select Option</option>
                      <option value="Vocalist">Vocalist</option>
                      <option value="Instrumentalist">Instrumentalist</option>
                      <option value="Both">Both</option>
                    </select>
                  </div>

                  {/* Instrument */}
                  <div>
                    <label className="block text-navy-900/70 font-semibold mb-2 text-xs tracking-wide uppercase">Which instrument do you play?</label>
                    <input type="text" name="instrument" value={formData.instrument} onChange={handleInputChange} placeholder="e.g., Piano, Guitar, Drums"
                      className="w-full p-3.5 rounded-xl border border-navy-900/10 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10 transition bg-white hover:border-navy-900/20 text-navy-900 text-sm" />
                  </div>

                  {/* Music Ministry Duration */}
                  <div>
                    <label className="block text-navy-900/70 font-semibold mb-2 text-xs tracking-wide uppercase">How long have you been in music ministry? *</label>
                    <input type="text" name="musicMinistryDuration" value={formData.musicMinistryDuration} onChange={handleInputChange} placeholder="e.g., 2 years, 5 months" required
                      className="w-full p-3.5 rounded-xl border border-navy-900/10 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10 transition bg-white hover:border-navy-900/20 text-navy-900 text-sm" />
                  </div>

                  {/* Choir/Band Experience */}
                  <div>
                    <label className="block text-navy-900/70 font-semibold mb-2 text-xs tracking-wide uppercase">Do you have previous choir or band experience? *</label>
                    <select name="choirBandExperience" value={formData.choirBandExperience} onChange={handleInputChange} required
                      className="w-full p-3.5 rounded-xl border border-navy-900/10 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10 transition bg-white hover:border-navy-900/20 text-navy-900 text-sm">
                      <option value="">Select Option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  {/* Church */}
                  <div>
                    <label className="block text-navy-900/70 font-semibold mb-2 text-xs tracking-wide uppercase">What church do you attend? *</label>
                    <input type="text" name="church" value={formData.church} onChange={handleInputChange} placeholder="Enter your church name" required
                      className="w-full p-3.5 rounded-xl border border-navy-900/10 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10 transition bg-white hover:border-navy-900/20 text-navy-900 text-sm" />
                  </div>

                  {/* Join Inspiration */}
                  <div>
                    <label className="block text-navy-900/70 font-semibold mb-2 text-xs tracking-wide uppercase">What inspired you to join the music ministry? *</label>
                    <textarea name="joinInspiration" value={formData.joinInspiration} onChange={handleInputChange} rows="3" required
                      className="w-full p-3.5 rounded-xl border border-navy-900/10 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10 transition bg-white hover:border-navy-900/20 text-navy-900 text-sm resize-none" />
                  </div>

                  {/* Rehearsal Availability */}
                  <div>
                    <label className="block text-navy-900/70 font-semibold mb-2 text-xs tracking-wide uppercase">Are you available for rehearsals and church programs regularly? *</label>
                    <select name="rehearsalAvailability" value={formData.rehearsalAvailability} onChange={handleInputChange} required
                      className="w-full p-3.5 rounded-xl border border-navy-900/10 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10 transition bg-white hover:border-navy-900/20 text-navy-900 text-sm">
                      <option value="">Select Option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Sometimes">Sometimes</option>
                    </select>
                  </div>

                  {/* Spiritual Leadership */}
                  <div>
                    <label className="block text-navy-900/70 font-semibold mb-2 text-xs tracking-wide uppercase">Are you willing to work under spiritual leadership and correction? *</label>
                    <select name="spiritualLeadership" value={formData.spiritualLeadership} onChange={handleInputChange} required
                      className="w-full p-3.5 rounded-xl border border-navy-900/10 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10 transition bg-white hover:border-navy-900/20 text-navy-900 text-sm">
                      <option value="">Select Option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  {/* Expectations */}
                  <div>
                    <label className="block text-navy-900/70 font-semibold mb-2 text-xs tracking-wide uppercase">What are your expectations from the ministry? *</label>
                    <textarea name="expectations" value={formData.expectations} onChange={handleInputChange} rows="3" required
                      className="w-full p-3.5 rounded-xl border border-navy-900/10 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10 transition bg-white hover:border-navy-900/20 text-navy-900 text-sm resize-none" />
                  </div>

                  {/* Musical Training */}
                  <div>
                    <label className="block text-navy-900/70 font-semibold mb-2 text-xs tracking-wide uppercase">Do you have any special musical training or skills? *</label>
                    <textarea name="musicalTraining" value={formData.musicalTraining} onChange={handleInputChange} rows="3" required
                      className="w-full p-3.5 rounded-xl border border-navy-900/10 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10 transition bg-white hover:border-navy-900/20 text-navy-900 text-sm resize-none" />
                  </div>

                  {/* Additional Info */}
                  <div>
                    <label className="block text-navy-900/70 font-semibold mb-2 text-xs tracking-wide uppercase">Is there anything important you would like us to know about you?</label>
                    <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleInputChange} rows="3" placeholder="Any other skills that might be useful to the ministry apart from music, or any special circumstances we should be aware of?"
                      className="w-full p-3.5 rounded-xl border border-navy-900/10 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10 transition bg-white hover:border-navy-900/20 text-navy-900 text-sm resize-none" />
                  </div>

                  {submitted ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full bg-emerald-50 text-emerald-700 border border-emerald-200 py-6 rounded-xl shadow-sm">
                      <div className="flex items-start gap-3 px-4">
                        <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        <div className="flex-1">
                          <p className="font-semibold text-sm md:text-base mb-3">Thank you for your interest!</p>
                          <p className="text-xs md:text-sm mb-4 text-emerald-600">Join our WhatsApp group to get connected with the ministry. We will get in touch with you on the platform and provide you with further details about rehearsals and upcoming programs.</p>
                          <div className="flex flex-col sm:flex-row gap-3 items-start">
                            <a href="https://chat.whatsapp.com/JEUriMDV5Mj3mxMtp8W97T" target="_blank" rel="noopener noreferrer" 
                              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-300 hover:shadow-md">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.75 5.404 2.177 7.707l-2.313 8.4a.75.75 0 00.935.927l8.206-2.257a9.842 9.842 0 007.745-9.486c0-5.432-4.424-9.844-9.835-9.844z" /></svg>
                              Join WhatsApp Group
                            </a>
                            <button onClick={handleCloseSuccess} 
                              className="px-4 py-2 bg-emerald-200 text-emerald-700 text-xs font-semibold rounded-lg hover:bg-emerald-300 transition-all duration-300">
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 text-sm ${isSubmitting ? 'bg-navy-900/10 text-navy-900/40 cursor-not-allowed' : 'bg-gradient-to-r from-gold-500 to-tan-600 text-white hover:shadow-lg'}`}>
                      {isSubmitting ? 'Sending...' : 'Submit Registration'}
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
