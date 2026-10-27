export function LogoMark({ size = 30 }) {
  return <img src="/logo-mark.png" alt="" aria-hidden="true" height={size} style={{ height: size, width: 'auto' }} className="shrink-0" />;
}

export function Brand() {
  return (
    <span className="font-semibold tracking-[-0.03em]">
      <span className="text-ink">Re</span>
      <span className="text-brand">Cred</span>
    </span>
  );
}

export const withBrand = (text) =>
  text.split(/(Recred)/gi).map((part, i) => (/^recred$/i.test(part) ? <Brand key={i} /> : part));

export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={28} />
      <span className="text-[20px] font-semibold tracking-[-0.03em]">
        <Brand />
      </span>
    </span>
  );
}
