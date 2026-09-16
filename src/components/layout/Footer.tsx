import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheckIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { LogoMark } from '../brand/Logo';
import { ButtonLink } from '../ui/Button';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { serviceNav, site, whatsappLink } from '../../data/site';

const quickLinks = [
{ label: 'Home', to: '/' },
{ label: 'About PARC', to: '/about' },
{ label: 'Services', to: '/pediatric-audiology' },
{ label: 'Assessment', to: '/child-development-assessment' },
{ label: 'Parent Resources', to: '/parent-resources' },
{ label: 'Blogs', to: '/blog' },
{ label: 'Contact', to: '/contact' }];


export function Footer() {
  return (
    <footer className="bg-brand-700 text-brand-100">
      <div className="mx-auto w-full max-w-content px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <LogoMark height={92} />
            <p className="mt-5 font-display text-lg font-bold text-white">{site.fullName}</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-accent-500">{site.tagline}</p>
            <ButtonLink
              to="/contact"
              variant="accent"
              className="mt-6"
              icon={<CalendarCheckIcon className="h-4 w-4" strokeWidth={2} />}>
              
              Book an Assessment
            </ButtonLink>
          </div>

          <nav className="lg:col-span-2" aria-label="Quick links">
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((item) =>
              <li key={item.label}>
                  <Link
                  to={item.to}
                  className="text-brand-100/80 transition-colors duration-150 hover:text-accent-500">
                  
                    {item.label}
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <nav className="lg:col-span-3" aria-label="Services">
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {serviceNav.map((item) =>
              <li key={item.to}>
                  <Link
                  to={item.to}
                  className="text-brand-100/80 transition-colors duration-150 hover:text-accent-500">
                  
                    {item.label === 'Hearing Aids & Cochlear Implant Rehabilitation' ?
                  'Hearing Rehabilitation' :
                  item.label}
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Contact
            </h2>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" strokeWidth={2} />
                <span className="text-brand-100/80">
                  {site.addressLines.map((line) =>
                  <span key={line} className="block">
                      {line}
                    </span>
                  )}
                </span>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" strokeWidth={2} />
                <a
                  href={site.phoneHref}
                  className="text-brand-100/80 transition-colors duration-150 hover:text-accent-500">
                  
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0" variant="inverse" />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-brand-100/80 transition-colors duration-150 hover:text-accent-500">
                  
                  WhatsApp PARC
                </a>
              </li>
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" strokeWidth={2} />
                <a
                  href={site.emailHref}
                  className="break-all text-brand-100/80 transition-colors duration-150 hover:text-accent-500">
                  
                  {site.emailDisplay}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-brand-100/50">
              Contact details shown are placeholders pending confirmation.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-brand-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 PARC – Pediatric Audiological Rehabilitation Center. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="transition-colors duration-150 hover:text-accent-500">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors duration-150 hover:text-accent-500">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}