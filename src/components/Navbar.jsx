import { Menu, Mail, Download } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-rose-500 animate-pulse" />
            <div>
              <p className="text-sm text-white/70 leading-none">Portfolio</p>
              <h1 className="text-white font-semibold leading-none">Nishal Sam Prasath</h1>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-white/80 hover:text-white transition">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 font-medium shadow/30 shadow-white/20 hover:shadow-white/40 transition shadow"
            >
              <Mail size={18} /> Contact
            </a>
            <a
              href="#" download
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-white font-medium shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 transition"
            >
              <Download size={18} /> Resume
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="mt-2 flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md md:hidden">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-xl px-3 py-2 text-white/90 hover:bg-white/10">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="rounded-xl px-3 py-2 text-white/90 hover:bg-white/10 inline-flex items-center gap-2">
              <Mail size={18} /> Contact
            </a>
            <a href="#" download className="rounded-xl px-3 py-2 text-white/90 hover:bg-white/10 inline-flex items-center gap-2">
              <Download size={18} /> Resume
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
