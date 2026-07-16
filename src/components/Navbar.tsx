import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Método', href: '#metodo' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Capacidades', href: '#capacidades' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-exec origin-left z-50"
        style={{ scaleX }}
      />
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 h-[72px] flex items-center bg-white/80 backdrop-blur-md border-b border-gray-200`}
      >
        <div className="max-w-[1240px] w-full mx-auto px-5 md:px-6 flex items-center justify-between">
          <a href="#" className="font-display font-bold text-xl tracking-tight text-night">
            Israel Torres
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-exec transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-night"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="absolute top-[72px] left-0 w-full bg-white border-b border-gray-200 shadow-sm md:hidden">
            <div className="px-5 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 font-medium py-3 border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
