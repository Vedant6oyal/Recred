import { useId } from 'react';

export function LogoMark({ size = 30 }) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#2f5bff" />
          <stop offset="1" stopColor="#19c3e6" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="#0b1220" />
      <path d="M9.5 21.5C14.5 21.5 13.5 10.5 22.5 10.5" fill="none" stroke={`url(#${id})`} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="9.5" cy="21.5" r="3" fill="#fff" />
      <circle cx="22.5" cy="10.5" r="3" fill={`url(#${id})`} />
    </svg>
  );
}

export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="text-[20px] font-semibold tracking-[-0.03em]">
        Re<span className="text-brand">cred</span>
      </span>
    </span>
  );
}
