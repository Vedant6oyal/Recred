import { Reveal } from '../anim';

const btnBase =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-4';
export const btnWhatsApp = `${btnBase} bg-whatsapp text-ink shadow-[0_12px_30px_-12px_rgba(37,211,102,0.85)] hover:bg-[#3ee07c] focus-visible:ring-whatsapp/30`;
export const btnGhost = `${btnBase} border border-line bg-white text-ink hover:border-ink/25 focus-visible:ring-brand/20`;
export const btnDark = `${btnBase} bg-ink text-white hover:bg-ink-2 focus-visible:ring-brand/25`;

const TONES = { white: 'bg-white', mist: 'bg-mist' };

export function Section({ id, tone = 'white', className = '', children }) {
  return (
    <section id={id} className={`${TONES[tone]} py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-6">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className = '' }) {
  return (
    <Reveal y={8} className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </Reveal>
  );
}

export function Accent({ children }) {
  return <span className="font-serif font-normal italic tracking-normal text-brand">{children}</span>;
}

export function Heading({ eyebrow, title, intro, center = false, className = 'mb-12 sm:mb-16' }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <Reveal as="h2" delay={0.05} className="text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
        {title}
      </Reveal>
      {intro && (
        <Reveal as="p" delay={0.1} className={`mt-5 text-[17px] leading-relaxed text-muted ${center ? 'mx-auto max-w-2xl' : ''}`}>
          {intro}
        </Reveal>
      )}
    </div>
  );
}
