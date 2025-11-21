import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="text-3xl sm:text-4xl font-semibold text-white">About</h3>
          <p className="mt-4 text-white/80 leading-relaxed">
            I'm a fresh graphic designer driven by curiosity and a love for visual storytelling. I enjoy exploring color, type, and motion to craft designs that feel modern and playful. I’m actively looking for opportunities to collaborate with creative teams and grow as a designer.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-white/80">
            {[
              'Adobe Photoshop',
              'Illustrator',
              'Figma',
              'Canva',
              'Brand Identity',
              'Social Media Creatives',
            ].map((s) => (
              <li key={s} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">{s}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img src="https://images.unsplash.com/photo-1509960645955-d9d4a2fe08f4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZXNpZ25lciUyMGF0JTIwd29ya3xlbnwwfDB8fHwxNzYzNzAwODgxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Designer at work" className="w-full h-[360px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/10 to-rose-500/20 mix-blend-overlay" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
