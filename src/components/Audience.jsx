import { motion } from 'motion/react';
import { CountUp, EASE, Reveal, Stagger, StaggerItem } from '../anim';
import { AUDIENCES, LOAN_TYPES } from '../content';
import { Accent, Heading, Section } from './ui';

const pos = (cr) => (Math.log10(cr) / 3) * 100;
const FROM = pos(10);
const TO = pos(250);
const VIEW = { once: true, margin: '-60px' };

export default function Audience() {
  return (
    <Section id="who">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Heading
            eyebrow="Who it’s for"
            title={
              <>
                Built for businesses raising <Accent>₹10 Cr to ₹250 Cr.</Accent>
              </>
            }
            intro="SMEs, mid-market companies and large enterprises across sectors, whether you are raising fresh debt or refinancing an existing loan."
            className="mb-9"
          />
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Debt we arrange
          </Reveal>
          <Stagger className="mt-4 flex flex-wrap gap-2" stagger={0.05}>
            {LOAN_TYPES.map((t) => (
              <StaggerItem key={t} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium">
                {t}
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal
          delay={0.1}
          className="rounded-[28px] border border-line bg-white p-6 shadow-[0_40px_100px_-50px_rgba(11,18,32,0.3)] sm:p-9"
        >
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em]">
            <span className="text-muted">Ticket size</span>
            <span className="text-brand">Our sweet spot</span>
          </div>

          <div className="mt-6 flex flex-wrap items-baseline gap-x-3 text-[40px] font-semibold tracking-[-0.03em] tabular-nums sm:text-5xl">
            <CountUp value="₹10 Cr" duration={1.2} />
            <span className="text-lg font-normal tracking-normal text-muted">to</span>
            <CountUp value="₹250 Cr" duration={1.6} />
          </div>

          <div className="relative mt-12">
            <div className="h-2 rounded-full bg-line" />
            <motion.div
              className="absolute top-0 h-2 origin-left rounded-full bg-linear-to-r from-brand to-aqua"
              style={{ left: `${FROM}%`, width: `${TO - FROM}%` }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={VIEW}
              transition={{ duration: 1.4, ease: EASE, delay: 0.3 }}
            />
            {[FROM, TO].map((p, i) => (
              <motion.span
                key={p}
                className="absolute -top-1 h-4 w-4 rounded-full border-[3px] border-white bg-brand shadow-[0_2px_8px_rgba(47,91,255,0.5)]"
                style={{ left: `calc(${p}% - 8px)` }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={VIEW}
                transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.3 + i * 1.3 }}
              />
            ))}
          </div>
          <div className="relative mt-3 h-5 text-xs font-semibold">
            <span className="absolute -translate-x-1/2" style={{ left: `${FROM}%` }}>
              ₹10 Cr
            </span>
            <span className="absolute -translate-x-1/2" style={{ left: `${TO}%` }}>
              ₹250 Cr
            </span>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {AUDIENCES.map(({ title, desc }) => (
              <div key={title} className="rounded-2xl bg-mist p-4">
                <div className="text-[15px] font-semibold">{title}</div>
                <div className="mt-1 text-sm text-muted">{desc}</div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted">
            Larger requirement?{' '}
            <a href="#contact" className="font-medium text-brand hover:underline">
              Let’s talk.
            </a>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
