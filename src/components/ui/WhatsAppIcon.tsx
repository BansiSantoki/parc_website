import React from 'react';

const WHATSAPP_ICON_URL = `${import.meta.env.BASE_URL}whatsapp.png`;

type WhatsAppIconProps = {
  className?: string;
  variant?: 'brand' | 'inverse';
  title?: string;
};

export function WhatsAppIcon({ className = '', variant = 'brand', title }: WhatsAppIconProps) {
  void variant;

  return (
    <img
      src={WHATSAPP_ICON_URL}
      alt={title ?? ''}
      aria-hidden={title ? undefined : true}
      className={className}
      loading="eager"
      decoding="async" />
  );
}