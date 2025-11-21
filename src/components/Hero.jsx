import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-950"></div>
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
                Graphic Designer • Fresher
              </p>
              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent">Nishal Sam Prasath</span>
              </h2>
              <p className="mt-4 text-lg text-white/80 max-w-xl">
                I design playful, modern visuals and brand identities. I love mixing bold color, clean type, and interactive motion to tell stories.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow-lg shadow-white/20 hover:shadow-white/40 transition">View Work</a>
                <a href="#contact" className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition">Get in Touch</a>
              </div>
            </motion.div>

            <motion.ul className="mt-10 flex flex-wrap items-center gap-4 text-white/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              {['Branding', 'Logo', 'Posters', 'Social Media', 'Illustration'].map((chip) => (
                <li key={chip} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">{chip}</li>
              ))}
            </motion.ul>
          </div>

          <div className="relative h-[420px] lg:h-[560px]">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-rose-500/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
