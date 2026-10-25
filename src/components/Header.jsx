import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { NAV } from '../content';
import Logo from './Logo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
        scrolled ? 'border-line bg-white/85 backdrop-blur-xl' : 'border-transparent bg-white'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-6">
        <a href="#top" aria-label="Recred home" className="rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/20">
          <Logo />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 text-sm text-muted md:flex">
          {NAV.map(({ label, href }) => (
            <a key={href} href={href} className="transition hover:text-ink">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition hover:bg-ink-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/25"
        >
          Get matched <ArrowRight size={15} />
        </a>
      </div>
    </header>
  );
}
