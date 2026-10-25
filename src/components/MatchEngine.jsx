import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'motion/react';
import { BadgeCheck, Check, LoaderCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { EASE, rise } from '../anim';
import { LENDERS, MATCH_SCENARIOS } from '../content';

const PHASES = [
  { at: 0, label: 'Reading your requirement' },
  { at: 900, label: 'AI scanning lenders' },
  { at: 2900, label: 'Experts shortlisting' },
  { at: 3900, label: '3 perfect matches' },
];
const CYCLE_MS = 8800;
const COLS = 4;
const C = { line: '#e6e8ee', brand: '#2f5bff', tint: '#eef2ff', white: '#ffffff' };
const label = 'text-[10px] font-semibold uppercase tracking-[0.16em] text-muted';

function nodeMotion(phase, picked, col) {
  if (phase === 1) {
    const flash = { duration: 0.7, delay: 0.12 + col * 0.36, times: [0, 0.35, 1] };
    return {
      animate: { borderColor: [C.line, C.brand, C.line], backgroundColor: [C.white, C.tint, C.white], opacity: 1, scale: 1 },
      transition: { borderColor: flash, backgroundColor: flash, default: { duration: 0.3 } },
    };
  }
  if (phase >= 2) {
    return {
      animate: picked
        ? { borderColor: C.brand, backgroundColor: C.tint, opacity: 1, scale: 1.04 }
        : { borderColor: C.line, backgroundColor: C.white, opacity: 0.35, scale: 0.97 },
      transition: { duration: 0.45, ease: EASE },
    };
  }
  return {
    animate: { borderColor: C.line, backgroundColor: C.white, opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: EASE },
  };
}

function FloatChip({ className, icon: Icon, y, duration, children }) {
  return (
    <motion.div
      aria-hidden
      className={`absolute z-10 hidden items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-xs font-medium shadow-[0_12px_30px_-12px_rgba(11,18,32,0.3)] xl:flex ${className}`}
      animate={{ y: [0, y, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Icon size={14} className="text-brand" /> {children}
    </motion.div>
  );
}

export default function MatchEngine() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduced = useReducedMotion();
  const [cycle, setCycle] = useState(0);
  const [phase, setPhase] = useState(0);
  const live = inView && !reduced;

  useEffect(() => {
    if (!live) return;
    setPhase(0);
    const timers = PHASES.slice(1).map(({ at }, i) => setTimeout(() => setPhase(i + 1), at));
    timers.push(
      setTimeout(() => {
        setPhase(0);
        setCycle((c) => c + 1);
      }, CYCLE_MS)
    );
    return () => timers.forEach(clearTimeout);
  }, [cycle, live]);

  const step = reduced ? 3 : phase;
  const done = step === 3;
  const scenario = MATCH_SCENARIOS[cycle % MATCH_SCENARIOS.length];
  const picks = scenario.matches.map((m) => m.at);

  return (
    <motion.div ref={ref} {...rise(0.35)} className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
      <div aria-hidden className="absolute -inset-6 -z-10 rounded-[40px] bg-linear-to-br from-brand/15 via-aqua/10 to-transparent blur-2xl" />
      <FloatChip className="-left-8 top-32" icon={Sparkles} y={-8} duration={6}>
        AI-scored
      </FloatChip>
      <FloatChip className="-right-7 bottom-40" icon={ShieldCheck} y={8} duration={7}>
        Expert-verified
      </FloatChip>

      <div
        role="img"
        aria-label="Illustration: Recred's AI scans lenders and its experts shortlist the three best-fit lenders for a sample loan requirement"
        className="rounded-[28px] border border-line bg-white p-5 shadow-[0_40px_100px_-45px_rgba(11,18,32,0.35)] sm:p-6"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand/50 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Recred Match Engine
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={step}
              className="inline-flex items-center gap-1.5 text-xs text-muted"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
            >
              {done ? (
                <Check size={13} strokeWidth={3} className="text-brand" />
              ) : (
                <LoaderCircle size={13} className="text-brand motion-safe:animate-spin" />
              )}
              {PHASES[step].label}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="mt-5">
          <div className={label}>Your requirement</div>
          <div key={cycle} className="mt-2.5 flex flex-wrap gap-1.5">
            {scenario.requirement.map((r, i) => (
              <motion.span
                key={r}
                className="rounded-full border border-line bg-mist px-2.5 py-1 text-xs font-medium"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE, delay: 0.1 + i * 0.12 }}
              >
                {r}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="mt-5 border-t border-line pt-5">
          <div className={label}>Lender universe</div>
          <div className="relative mt-3 grid grid-cols-4 gap-1.5 sm:gap-2">
            {LENDERS.map((l, i) => {
              const picked = picks.includes(i);
              const m = nodeMotion(step, picked, i % COLS);
              return (
                <motion.div
                  key={i}
                  initial={false}
                  animate={m.animate}
                  transition={m.transition}
                  className="relative flex items-center justify-center gap-1.5 rounded-xl border px-1 py-2.5 text-[10.5px] font-medium sm:text-xs"
                >
                  <l.icon size={13} className="hidden shrink-0 text-muted sm:block" />
                  <span className="truncate">{l.short}</span>
                  <AnimatePresence>
                    {step >= 2 && picked && (
                      <motion.span
                        className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-white"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 22 }}
                      >
                        <Check size={10} strokeWidth={3.5} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
            <AnimatePresence>
              {step === 1 && (
                <motion.div
                  key={`beam-${cycle}`}
                  aria-hidden
                  className="pointer-events-none absolute -inset-1 overflow-hidden rounded-xl"
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-transparent via-brand/15 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '400%' }}
                    transition={{ duration: 1.8, ease: 'linear' }}
                  >
                    <div className="absolute inset-y-0 left-1/2 w-px bg-brand/50" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-5 border-t border-line pt-5">
          <div className={label}>Best matches</div>
          <ul className="mt-3 space-y-2">
            {scenario.matches.map((m, i) => (
              <li key={i} className="overflow-hidden rounded-xl border border-line">
                <AnimatePresence mode="wait" initial={false}>
                  {done ? (
                    <motion.div
                      key={`m-${cycle}`}
                      className="flex h-[52px] items-center gap-3 px-3"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, ease: EASE, delay: i * 0.15 }}
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-[10px] font-semibold text-white">
                        {i + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="truncate text-sm font-semibold">{LENDERS[m.at].type}</span>
                          <span className="text-sm font-semibold tabular-nums text-brand">{m.score}%</span>
                        </div>
                        <div className="mt-1.5 flex items-center gap-2">
                          <span className="whitespace-nowrap text-[11px] text-muted">{m.note}</span>
                          <span className="h-1 flex-1 overflow-hidden rounded-full bg-line">
                            <motion.span
                              className="block h-full rounded-full bg-linear-to-r from-brand to-aqua"
                              initial={{ width: 0 }}
                              animate={{ width: `${m.score}%` }}
                              transition={{ duration: 0.9, ease: EASE, delay: 0.2 + i * 0.15 }}
                            />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="skeleton"
                      className="flex h-[52px] items-center gap-3 px-3"
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="h-5 w-5 rounded-full bg-mist" />
                      <span className="h-2.5 w-28 rounded-full bg-mist motion-safe:animate-pulse" />
                      <span className="ml-auto h-2.5 w-10 rounded-full bg-mist motion-safe:animate-pulse" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex h-5 items-center justify-between gap-3 text-xs">
          <AnimatePresence mode="wait" initial={false}>
            {done ? (
              <motion.span
                key="done"
                className="inline-flex items-center gap-1.5 font-semibold"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: EASE, delay: 0.6 }}
              >
                <BadgeCheck size={16} className="text-brand" /> Best terms secured
              </motion.span>
            ) : (
              <motion.span key="wip" className="truncate text-muted" exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                Evaluating appetite, pricing, tenor &amp; speed…
              </motion.span>
            )}
          </AnimatePresence>
          <span className="shrink-0 text-muted">{done ? `3 of ${LENDERS.length} shortlisted` : `${LENDERS.length} lenders`}</span>
        </div>
      </div>

      <p className="mt-4 text-center text-[11px] text-muted/80">Illustrative example only. Bank names are shown for illustration and do not imply any tie-up or endorsement.</p>
    </motion.div>
  );
}
