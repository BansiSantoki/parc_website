import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarCheckIcon, ChevronDownIcon, MenuIcon, MessageCircleIcon, XIcon } from 'lucide-react';
import { LogoLink } from '../brand/Logo';
import { ButtonLink } from '../ui/Button';
import { navItems, primaryNav, serviceNav, whatsappLink } from '../../data/site';

const EASE = [0.23, 1, 0.32, 1] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isServiceRoute = serviceNav.some((item) => item.to === location.pathname);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-[background-color,box-shadow,border-color] duration-200 ease-premium ${
      scrolled || menuOpen ?
      'border-b border-brand-100 bg-white/95 shadow-soft backdrop-blur-md' :
      'border-b border-transparent bg-white/70 backdrop-blur-sm'}`
      }>
      
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white">
        
        Skip to content
      </a>

      <div className="mx-auto flex w-full max-w-content items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10">
        <LogoLink height={60} />

        <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
          {primaryNav.slice(0, 2).map((item) =>
          <TopLink key={item.to} to={item.to} label={item.label} />
          )}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}>
            
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-150 ${
              isServiceRoute ? 'bg-brand-100 text-brand-700' : 'text-brand-800/80 hover:bg-brand-50'}`
              }>
              
              Services
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform duration-200 ease-premium ${servicesOpen ? 'rotate-180' : ''}`}
                strokeWidth={2} />
              
            </button>

            <AnimatePresence>
              {servicesOpen ?
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                transition={{ duration: 0.18, ease: EASE }}
                className="absolute left-0 top-full w-[22rem] origin-top rounded-panel border border-brand-100 bg-white p-2 shadow-lift">
                
                  <ul>
                    {serviceNav.map((item) =>
                  <li key={item.to}>
                        <Link
                      to={item.to}
                      className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-brand-800/85 transition-colors duration-150 hover:bg-brand-50 hover:text-brand-600">
                      
                          {item.label}
                        </Link>
                      </li>
                  )}
                  </ul>
                </motion.div> :
              null}
            </AnimatePresence>
          </div>

          {primaryNav.slice(2).map((item) =>
          <TopLink key={item.to} to={item.to} label={item.label} />
          )}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={whatsappLink()}
            external
            variant="outline"
            className="hidden lg:inline-flex"
            icon={<MessageCircleIcon className="h-4 w-4" strokeWidth={2} />}>
            
            WhatsApp Us
          </ButtonLink>
          <ButtonLink
            to="/contact"
            variant="primary"
            className="hidden sm:inline-flex"
            icon={<CalendarCheckIcon className="h-4 w-4" strokeWidth={2} />}>
            
            Book an Assessment
          </ButtonLink>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-200 bg-white text-brand-700 transition-colors duration-150 hover:bg-brand-50 xl:hidden">
            
            {menuOpen ?
            <XIcon className="h-5 w-5" strokeWidth={2} /> :

            <MenuIcon className="h-5 w-5" strokeWidth={2} />
            }
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ?
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: EASE }}
          className="fixed inset-x-0 top-[68px] z-40 max-h-[calc(100vh-68px)] overflow-y-auto border-t border-brand-100 bg-white px-5 pb-10 pt-4 shadow-lift xl:hidden">
          
            <nav aria-label="Mobile navigation">
              <ul className="space-y-1">
                {navItems.map((item, index) =>
              <motion.li
                key={item.to}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, ease: EASE, delay: Math.min(index * 0.02, 0.2) }}>
                
                    <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                  `block rounded-2xl px-4 py-3 text-base font-semibold transition-colors duration-150 ${
                  isActive ? 'bg-brand-100 text-brand-700' : 'text-brand-800/85 hover:bg-brand-50'}`

                  }>
                  
                      {item.label}
                    </NavLink>
                  </motion.li>
              )}
              </ul>
            </nav>

            <div className="mt-6 grid gap-3">
              <ButtonLink
              to="/contact"
              size="lg"
              className="w-full"
              icon={<CalendarCheckIcon className="h-5 w-5" strokeWidth={2} />}>
              
                Book an Assessment
              </ButtonLink>
              <ButtonLink
              href={whatsappLink()}
              external
              variant="outline"
              size="lg"
              className="w-full"
              icon={<MessageCircleIcon className="h-5 w-5" strokeWidth={2} />}>
              
                WhatsApp PARC
              </ButtonLink>
            </div>
          </motion.div> :
        null}
      </AnimatePresence>
    </header>);

}

function TopLink({ to, label }: {to: string;label: string;}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
      `rounded-full px-3 py-2 text-sm font-medium transition-colors duration-150 ${
      isActive ? 'bg-brand-100 text-brand-700' : 'text-brand-800/80 hover:bg-brand-50'}`

      }>
      
      {label}
    </NavLink>);

}