import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <p className="text-sm text-white/60">Let’s create something</p>
          <h3 className="text-3xl sm:text-4xl font-semibold text-white">Contact</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Your name" className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none border border-white/10 focus:border-white/30" />
              <input required type="email" placeholder="Email" className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none border border-white/10 focus:border-white/30" />
            </div>
            <input placeholder="Subject" className="mt-4 w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none border border-white/10 focus:border-white/30" />
            <textarea required rows="5" placeholder="Message" className="mt-4 w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none border border-white/10 focus:border-white/30" />
            <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-slate-900 shadow-lg shadow-white/20 hover:shadow-white/40"><Mail size={18} /> Send</button>
            {status && <p className="mt-3 text-sm text-green-300">{status}</p>}
          </motion.form>

          <motion.div className="rounded-3xl border border-white/10 bg-white/5 p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-white/80">Email</p>
            <a href="mailto:nishal@example.com" className="text-white font-medium">nishal@example.com</a>

            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white hover:bg-white/10"><Instagram size={18} /> Instagram</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white hover:bg-white/10"><Linkedin size={18} /> LinkedIn</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
