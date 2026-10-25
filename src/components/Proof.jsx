import { CountUp, Reveal, Stagger, StaggerItem } from '../anim';
import { CLIENTS, STATS } from '../content';

const statBorder = (i) => (i % 2 ? 'border-l border-line' : i ? 'lg:border-l lg:border-line' : '');

export default function Proof() {
  return (
    <section aria-label="Track record" className="border-y border-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16">
        <Reveal as="p" className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Our team’s track record
        </Reveal>
        <Stagger as="dl" className="mt-10 grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {STATS.map(({ value, label }, i) => (
            <StaggerItem key={label} className={`flex flex-col-reverse px-3 text-center ${statBorder(i)}`}>
              <dt className="mt-2 text-sm text-muted">{label}</dt>
              <dd className="text-[34px] font-semibold tracking-[-0.03em] tabular-nums sm:text-5xl">
                <CountUp value={value} delay={0.1 + i * 0.1} />
              </dd>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div className="border-t border-line py-10 sm:py-12">
        <Reveal as="p" className="px-5 text-center text-sm text-muted">
          Our team has worked with
        </Reveal>
        <div className="marquee mask-fade-x mt-7 overflow-hidden">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((copy) => (
              <ul key={copy} aria-hidden={copy ? true : undefined} className="flex shrink-0 items-center">
                {CLIENTS.map((c) => (
                  <li key={c.name} className="mx-6 flex h-14 w-32 shrink-0 items-center justify-center sm:mx-8 sm:w-36">
                    <img
                      src={c.logo}
                      alt={copy ? '' : c.name}
                      decoding="async"
                      className="max-h-full max-w-full object-contain opacity-60 mix-blend-multiply grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
