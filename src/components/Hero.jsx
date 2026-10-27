import { motion } from 'motion/react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { EASE, rise } from '../anim';
import { HERO_POINTS } from '../content';
import { waLink } from '../whatsapp';
import { Accent, btnGhost, btnWhatsApp } from './ui';
import { Brand } from './Logo';
import MatchEngine from './MatchEngine';
import WhatsAppIcon from './WhatsAppIcon';

const LINES = [
  <>The right lender.</>,
  <>The best terms.</>,
  <>
    At <Accent>lightning speed.</Accent>
  </>,
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_65%_at_50%_0%,#000_35%,transparent_100%)]"
      />
      <div aria-hidden className="absolute -right-56 -top-56 h-[40rem] w-[40rem] rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 pb-20 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-28 lg:pt-20">
        <div>
          <motion.div
            {...rise(0)}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-3.5 py-1.5 text-xs font-medium text-ink/80 shadow-sm backdrop-blur"
          >
            <Sparkles size={13} className="text-brand" /> AI-powered debt advisory for SMEs &amp; enterprises
          </motion.div>

          <h1 className="text-[42px] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-[62px]">
            {LINES.map((line, i) => (
              <motion.span
                key={i}
                className="block"
                initial={{ opacity: 0, y: 26, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.1 + i * 0.14 }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p {...rise(0.5)} className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
            <Brand /> is an AI-powered debt advisory platform that connects mid-market and large enterprises with the right lending partners. By combining proprietary AI with expert debt strategists, we match your financing requirements with the most suitable banks and NBFCs to secure the best possible terms.
          </motion.p>

          <motion.div {...rise(0.6)} className="mt-9 flex flex-wrap gap-3">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className={btnWhatsApp}>
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
            <a href="#how" className={btnGhost}>
              See how it works <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.ul {...rise(0.7)} className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink/75">
            {HERO_POINTS.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Check size={12} strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </motion.ul>
        </div>

        <MatchEngine />
      </div>
    </section>
  );
}
