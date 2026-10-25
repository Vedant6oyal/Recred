import { motion } from 'motion/react';
import { EASE } from '../anim';
import { STEPS } from '../content';
import { Accent, Heading, Section } from './ui';

const GAP = 0.5;

export default function HowItWorks() {
  return (
    <Section id="how" tone="mist">
      <Heading
        center
        eyebrow="How it works"
        title={
          <>
            From requirement to sanction, in <Accent>three steps.</Accent>
          </>
        }
        intro="Proprietary AI does the heavy lifting. Seasoned debt strategists make the calls that matter."
      />

      <motion.div className="relative" initial="hidden" whileInView="show" viewport={{ once: true, margin: '-120px' }}>
        <div aria-hidden className="absolute left-[16.667%] right-[16.667%] top-7 hidden h-px bg-line lg:block">
          <motion.div
            className="h-full origin-left bg-brand"
            variants={{
              hidden: { scaleX: 0 },
              show: { scaleX: 1, transition: { duration: GAP * 2 + 0.4, ease: 'easeInOut', delay: 0.35 } },
            }}
          />
        </div>

        <ol className="grid gap-12 lg:grid-cols-3 lg:gap-8">
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <li key={title} className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
              {i < STEPS.length - 1 && (
                <div aria-hidden className="absolute -bottom-12 left-7 top-14 w-px bg-line lg:hidden">
                  <motion.div
                    className="h-full origin-top bg-brand"
                    variants={{
                      hidden: { scaleY: 0 },
                      show: { scaleY: 1, transition: { duration: 0.5, ease: 'easeInOut', delay: 0.45 + i * GAP } },
                    }}
                  />
                </div>
              )}
              <motion.span
                className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line bg-white text-brand shadow-[0_10px_30px_-12px_rgba(11,18,32,0.25)]"
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20, delay: 0.2 + i * GAP } },
                }}
              >
                <Icon size={22} />
              </motion.span>
              <motion.div
                className="pt-1 lg:pt-0"
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay: 0.35 + i * GAP } },
                }}
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Step 0{i + 1}</div>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted lg:mx-auto lg:max-w-xs">{desc}</p>
              </motion.div>
            </li>
          ))}
        </ol>
      </motion.div>
    </Section>
  );
}
