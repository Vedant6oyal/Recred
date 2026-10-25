import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'motion/react';

export const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: true, margin: '-60px' };

export const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE, delay },
});

export function Reveal({ children, className, delay = 0, y = 20, as = 'div' }) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </Comp>
  );
}

export function Stagger({ children, className, stagger = 0.08, delay = 0, as = 'div' }) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </Comp>
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function StaggerItem({ children, className, as = 'div' }) {
  const Comp = motion[as];
  return (
    <Comp className={className} variants={itemVariants}>
      {children}
    </Comp>
  );
}

const splitValue = (value) => {
  const m = value.match(/^(\D*)([\d,]+)(.*)$/);
  if (!m) return null;
  return { prefix: m[1], target: Number(m[2].replace(/,/g, '')), suffix: m[3] };
};

export function CountUp({ value, duration = 1.8, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduced = useReducedMotion();
  const parts = splitValue(value);

  useEffect(() => {
    if (!parts || !inView || reduced) return;
    const { prefix, target, suffix } = parts;
    const controls = animate(0, target, {
      duration,
      delay,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${prefix}${Math.round(v).toLocaleString('en-IN')}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduced, value]);

  if (!parts) return <span>{value}</span>;
  return <span ref={ref}>{reduced ? value : `${parts.prefix}0${parts.suffix}`}</span>;
}
