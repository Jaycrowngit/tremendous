import { motion } from 'framer-motion';

export const ContactSection = () => {
  const socialLinks = [
    { icon: 'facebook', url: 'https://www.facebook.com/share/1AaQvxLZ8k/', label: 'Facebook' },
    { icon: 'instagram', url: 'https://www.instagram.com/horlardohkun?igsh=MWh0NXQzbzZmdndicw==', label: 'Instagram' },
    { icon: 'youtube', url: 'https://youtube.com/@oladokunbukunmi9561?si=-xcf-01JyBXxgpDD', label: 'YouTube' },
    { icon: 'tiktok', url: 'https://www.tiktok.com/@highbeekay55?_r=1&_t=ZS-96Bxb2jSxNd', label: 'TikTok' },
  ];

  const contactItems = [
    { title: 'Email', value: 'bukunmi1993@gmail.com', href: 'mailto:bukunmi1993@gmail.com',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
    { title: 'Phone', value: '+1 234 810 456 2816 or +234 706 894 5031', href: 'tel:+23408104562816',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /> },
    { title: 'Location', value: 'Ibadan, Oyo State, Nigeria', href: '#',
      icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></> },

  ];

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Top CTA Section — White */}
      <div className="py-20 bg-white px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
          <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-semibold">Stay Connected</span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mt-3 mb-5">Thank You for Visiting</h2>
          <div className="h-[3px] w-16 bg-gradient-to-r from-gold-500 to-tan-600 mx-auto mb-6 rounded-full" />
          <p className="text-navy-900/40 text-lg italic font-light mb-2">"May your life be a continuous song of praise."</p>
          <p className="text-gold-500 text-sm font-serif tracking-widest">— Psalm 47:7</p>
        </motion.div>
      </div>

      {/* Contact Info — Subtle cream band */}
      <div className="py-16 bg-gradient-to-b from-cream/40 to-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactItems.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.6 }} viewport={{ once: true }} whileHover={{ y: -5 }}
              className="text-center group">
              <div className="w-14 h-14 bg-gradient-to-br from-gold-500/10 to-gold-500/5 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-gold-500/15 group-hover:to-gold-500/10 transition-all duration-300">
                <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
              </div>
              <h3 className="text-navy-900 text-sm font-semibold tracking-wide uppercase mb-2">{item.title}</h3>
              {item.href ? (
                <a href={item.href} className="text-navy-900/50 hover:text-gold-500 transition-colors text-sm font-light">{item.value}</a>
              ) : (
                <p className="text-navy-900/50 text-sm font-light">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Bottom — Navy */}
      <div className="bg-navy-900 py-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((link, i) => (
              <motion.a key={i} href={link.url} title={link.label} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white/10 hover:bg-gold-500/20 rounded-full flex items-center justify-center transition-colors duration-300">
                {link.icon === 'facebook' && <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>}
                {link.icon === 'instagram' && <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>}
                {link.icon === 'youtube' && <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>}
                {link.icon === 'tiktok' && <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24"><path d="M9 2a7 7 0 00-7 7v6a7 7 0 007 7h6a7 7 0 007-7v-6a7 7 0 00-7-7h-1V9h1a5 5 0 015 5v6a5 5 0 01-5 5H9a5 5 0 01-5-5v-6a5 5 0 015-5h1V2z" /></svg>}
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/40 text-xs">&copy; 2026 Tremendous Voices Music Ministry. All rights reserved.</p>
            <p className="mt-2 text-white/25 italic text-xs">"Sing to the Lord, all the earth; proclaim good news of His salvation." — Psalm 96:2</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
