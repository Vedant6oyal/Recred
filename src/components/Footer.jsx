import { NAV } from '../content';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">The right lender. The best terms. At lightning speed.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-2 text-sm text-muted">
          {NAV.map(({ label, href }) => (
            <a key={href} href={href} className="transition hover:text-ink">
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 pb-24 pt-6 text-xs leading-relaxed text-muted sm:px-6 md:flex-row md:justify-between md:pb-6">
          <p>© {new Date().getFullYear()} Recred. All rights reserved.</p>
          <p className="max-w-xl md:text-right">
            Recred is a debt advisory platform and does not lend. Credit decisions, sanction and disbursement rest with the
            lenders.
          </p>
        </div>
      </div>
    </footer>
  );
}
