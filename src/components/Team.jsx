import { motion } from 'motion/react';
import { BadgeCheck, Check } from 'lucide-react';
import { EASE, Reveal, Stagger, StaggerItem } from '../anim';
import { TEAM } from '../content';
import { Brand, withBrand } from './Logo';
import { Accent, Heading, Section } from './ui';

export default function Team() {
  const [lead, ...rest] = TEAM;
  return (
    <Section id="team" tone="mist">
      <Heading
        eyebrow="Our team"
        title={
          <>
            The strategists behind <Accent>every match.</Accent>
          </>
        }
        intro={<>Our AI finds the options. Our people secure the terms. <Brand /> is backed by a team of 20+ debt strategists and credit experts, led by Mr. R.K. Goyal.</>}
      />

      <Reveal className="grid grid-cols-1 overflow-hidden rounded-[28px] border border-line bg-white lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative aspect-[4/5] overflow-hidden bg-mist lg:aspect-auto lg:min-h-[560px]">
          <motion.img
            src={lead.photo}
            alt={`${lead.name}, ${lead.role} at ReCred`}
            className="absolute inset-0 h-full w-full object-cover object-[50%_15%]"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: EASE }}
          />
        </div>
        <div className="p-7 sm:p-10 lg:p-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand">
            <BadgeCheck size={14} /> {lead.role}
          </span>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{lead.name}</h3>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted sm:text-base">
            {lead.bio.map((p) => (
              <p key={p.slice(0, 32)}>{withBrand(p)}</p>
            ))}
          </div>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {lead.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm font-medium">
                <Check size={16} className="mt-0.5 shrink-0 text-brand" /> {p}
              </li>
            ))}
          </ul>
          <blockquote className="mt-8 border-t border-line pt-6 font-serif text-2xl italic leading-snug sm:text-[28px]">
            “{lead.quote}”
          </blockquote>
        </div>
      </Reveal>

      {rest.length > 0 && (
        <Stagger className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((m) => (
            <StaggerItem key={m.name} className="overflow-hidden rounded-3xl border border-line bg-white">
              <img src={m.photo} alt={`${m.name}, ${m.role} at ReCred`} className="aspect-[4/5] w-full object-cover object-top" />
              <div className="p-5">
                <div className="font-semibold">{m.name}</div>
                <div className="mt-0.5 text-sm text-muted">{m.role}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      )}
    </Section>
  );
}
