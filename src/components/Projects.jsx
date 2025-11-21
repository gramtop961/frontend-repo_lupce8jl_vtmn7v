import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Vibrant Branding Pack',
    tags: ['Branding', 'Logo', 'Guidelines'],
    image: 'https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Poster Series: Neon Nights',
    tags: ['Poster', 'Print', 'Typography'],
    image: 'https://images.unsplash.com/photo-1543989173-830bb761870a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQb3N0ZXIlMjBTZXJpZXMlM0ElMjBOZW9uJTIwTmlnaHRzfGVufDB8MHx8fDE3NjM3MDA4ODB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Social Media Pack',
    tags: ['Social', 'Campaign', 'Reels Covers'],
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Illustration: Playful Worlds',
    tags: ['Illustration', 'Character', 'Vector'],
    image: 'https://images.unsplash.com/photo-1685521885141-89c83b12ca65?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbGx1c3RyYXRpb24lM0ElMjBQbGF5ZnVsJTIwV29ybGRzfGVufDB8MHx8fDE3NjM3MDA4ODB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_100%_40%,rgba(244,63,94,0.15),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-sm text-white/60">Selected Work</p>
            <h3 className="text-3xl sm:text-4xl font-semibold text-white">Projects</h3>
          </div>
          <a href="#contact" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white hover:bg-white/10">Request a project</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-white">{p.title}</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs text-white/70 rounded-full border border-white/10 bg-white/5 px-2 py-1">{t}</span>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-slate-950/70 to-transparent" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
