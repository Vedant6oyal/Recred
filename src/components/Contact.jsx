import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Reveal } from '../anim';
import { CONTACT, LOAN_SIZES, NEEDS } from '../content';
import { composeMessage, telHref, waLink } from '../whatsapp';
import { Accent, Heading, Section, btnWhatsApp } from './ui';
import WhatsAppIcon from './WhatsAppIcon';

const legend = 'text-xs font-semibold uppercase tracking-[0.16em] text-muted';

const DETAILS = [
  { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: 'Phone', value: CONTACT.phone, href: telHref(CONTACT.phone) },
  { icon: MapPin, label: 'Office', value: CONTACT.office },
];

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/20 ${
        active ? 'border-ink bg-ink text-white' : 'border-line bg-white text-ink hover:border-ink/30'
      }`}
    >
      {children}
    </button>
  );
}

export default function Contact() {
  const [size, setSize] = useState(null);
  const [need, setNeed] = useState(null);
  const message = composeMessage(need, size);

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Heading
            eyebrow="Contact"
            title={
              <>
                Let’s find your <Accent>perfect lender.</Accent>
              </>
            }
            intro="WhatsApp is the fastest way to reach us. Tell us what you need and a debt strategist will take it from there."
            className="mb-10"
          />
          <Reveal delay={0.1} className="space-y-3">
            <div className={legend}>Prefer email or a call?</div>
            {DETAILS.map(({ icon: Icon, label, value, href }) => {
              const Row = href ? 'a' : 'div';
              return (
                <Row
                  key={label}
                  href={href}
                  className={`flex items-center gap-4 rounded-2xl border border-line bg-white px-5 py-4 ${href ? 'transition hover:border-ink/25' : ''}`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist">
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted">{label}</span>
                    <span className="block truncate text-[15px] font-medium">{value}</span>
                  </span>
                  {href && <ArrowUpRight size={16} className="ml-auto shrink-0 text-muted" />}
                </Row>
              );
            })}
          </Reveal>
        </div>

        <Reveal
          delay={0.15}
          className="self-start rounded-[28px] border border-line bg-white p-6 shadow-[0_40px_100px_-50px_rgba(11,18,32,0.35)] sm:p-9"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-whatsapp text-white">
              <WhatsAppIcon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">Start on WhatsApp</h3>
              <p className="mt-1 text-sm text-muted">Pick what fits and we’ll pre-fill your message.</p>
            </div>
          </div>

          <fieldset className="mt-8">
            <legend className={legend}>Loan size</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {LOAN_SIZES.map((s) => (
                <Chip key={s} active={size === s} onClick={() => setSize(size === s ? null : s)}>
                  {s}
                </Chip>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className={legend}>What do you need?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {NEEDS.map((n) => (
                <Chip key={n.label} active={need === n} onClick={() => setNeed(need === n ? null : n)}>
                  {n.label}
                </Chip>
              ))}
            </div>
          </fieldset>

          <div className="mt-8 rounded-2xl bg-mist p-4">
            <div className={legend}>Your message</div>
            <p className="mt-2 text-[15px] leading-relaxed" aria-live="polite">
              {message}
            </p>
          </div>

          <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className={`${btnWhatsApp} mt-5 w-full py-4`}>
            <WhatsAppIcon /> Continue on WhatsApp
          </a>
          <p className="mt-3 text-center text-xs text-muted">Opens WhatsApp with your message ready to send.</p>
        </Reveal>
      </div>
    </Section>
  );
}
