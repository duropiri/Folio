import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("YOUR_PUBLIC_KEY");

export const EMAILJS_CONFIG = {
  SERVICE_ID: "YOUR_SERVICE_ID",
  TEMPLATE_ID: "YOUR_TEMPLATE_ID",
  PUBLIC_KEY: "YOUR_PUBLIC_KEY"
} as const; 