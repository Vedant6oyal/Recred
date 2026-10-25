import { motion } from 'motion/react';
import { waLink } from '../whatsapp';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Recred on WhatsApp"
      className="group fixed z-[60] flex items-center gap-3 rounded-full focus-visible:outline-none"
      style={{ right: 'max(1.25rem, env(safe-area-inset-right))', bottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 1 }}
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:block">
        Chat with us
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_14px_34px_-10px_rgba(37,211,102,0.75)] ring-whatsapp/30 transition duration-300 group-hover:scale-105 group-focus-visible:ring-4">
        <span aria-hidden className="absolute inset-0 rounded-full bg-whatsapp animate-ping-slow" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </span>
    </motion.a>
  );
}
