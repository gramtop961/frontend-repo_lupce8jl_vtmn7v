import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(99,102,241,0.2),transparent_35%),radial-gradient(circle_at_100%_0%,rgba(236,72,153,0.15),transparent_35%),radial-gradient(circle_at_50%_120%,rgba(244,63,94,0.15),transparent_40%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-10 text-center text-white/60">
        © {new Date().getFullYear()} Nishal Sam Prasath — All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
