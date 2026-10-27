import { CONTACT, WHATSAPP_MESSAGE } from './content';

export const waLink = (text = WHATSAPP_MESSAGE) =>
  `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;

export const telHref = (phone) => `tel:${phone.replace(/[^\d+]/g, '')}`;

export const composeMessage = (need, size) =>
  need || size
    ? `Hi ReCred, I’m looking for ${need ? need.text : 'debt financing'}${size ? ` of ${size}` : ''} for my company. Please get in touch.`
    : WHATSAPP_MESSAGE;
