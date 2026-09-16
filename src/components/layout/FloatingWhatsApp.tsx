import React from 'react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { whatsappLink } from '../../data/site';

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with PARC on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#1FA855] px-4 py-3.5 font-semibold text-white shadow-lift transition-[transform,background-color] duration-200 ease-premium hover:-translate-y-0.5 hover:bg-[#188F48] lg:bottom-8 lg:right-8">
      
      <WhatsAppIcon className="h-6 w-6" variant="inverse" />
      <span className="hidden text-sm sm:inline">WhatsApp PARC</span>
    </a>);

}