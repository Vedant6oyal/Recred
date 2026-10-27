import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import { EASE, Reveal } from '../anim';
import { PROBLEM } from '../content';
import { Brand, LogoMark } from './Logo';
import { Accent, Heading, Section } from './ui';

const VIEW = { once: true, margin: '-80px' };
const list = (delay) => ({ hidden: {}, show: { transition: { staggerChildren: 0.32, delayChildren: delay } } });
const row = 'flex items-center gap-3.5 border-b border-line py-4 last:border-0';

export default function Problem() {
  return (
    <Section id="problem">
      <Heading
        eyebrow="The problem"
        title={
          <>
            Raising debt shouldn’t be <Accent>guesswork.</Accent>
          </>
        }
        intro={<>Mid-size and large companies often lack an efficient way to identify the most suitable lenders and secure the best possible borrowing terms. <Brand /> changes that.</>}
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Reveal className="rounded-3xl border border-line bg-mist p-7 sm:p-9">
          <div className="text-sm font-semibold text-muted">The usual way</div>
          <motion.ul className="mt-4" initial="hidden" whileInView="show" viewport={VIEW} variants={list(0.3)}>
            {PROBLEM.usual.map((t) => (
              <motion.li key={t} className={row} variants={{ hidden: {}, show: {} }}>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-white text-muted">
                  <X size={14} />
                </span>
                <span className="relative text-[15px] sm:text-base">
                  <motion.span variants={{ hidden: { opacity: 1 }, show: { opacity: 0.45, transition: { duration: 0.4 } } }}>
                    {t}
                  </motion.span>
                  <motion.span
                    aria-hidden
                    className="absolute left-0 top-1/2 h-[1.5px] w-full origin-left bg-ink/60"
                    variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.5, ease: EASE } } }}
                  />
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </Reveal>

        <Reveal
          delay={0.1}
          className="rounded-3xl border border-brand/25 bg-white p-7 shadow-[0_30px_80px_-40px_rgba(47,91,255,0.45)] sm:p-9"
        >
          <div className="flex items-center gap-2 text-sm font-semibold text-brand">
            <LogoMark size={20} /> <span className="text-ink">The</span>&nbsp;<Brand />&nbsp;<span className="text-ink">way</span>
          </div>
          <motion.ul className="mt-4" initial="hidden" whileInView="show" viewport={VIEW} variants={list(1.1)}>
            {PROBLEM.recred.map((t) => (
              <motion.li key={t} className={row} variants={{ hidden: {}, show: {} }}>
                <motion.span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-white"
                  variants={{
                    hidden: { opacity: 0, scale: 0.4 },
                    show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 20 } },
                  }}
                >
                  <Check size={14} strokeWidth={3} />
                </motion.span>
                <motion.span
                  className="text-[15px] font-medium sm:text-base"
                  variants={{ hidden: { opacity: 0.25 }, show: { opacity: 1, transition: { duration: 0.4 } } }}
                >
                  {t}
                </motion.span>
              </motion.li>
            ))}
          </motion.ul>
        </Reveal>
      </div>
    </Section>
  );
}
