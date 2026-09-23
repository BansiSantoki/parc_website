import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingWhatsApp } from './FloatingWhatsApp';

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-brand-50">
      <div className="mx-auto flex w-full max-w-[440px] flex-1 flex-col overflow-x-hidden bg-brand-50 sm:max-w-[440px] lg:max-w-none">
        <Navbar />
        <main id="main" className="flex-1 overflow-x-hidden">
          <Outlet />
        </main>
        <Footer />
      </div>
      <FloatingWhatsApp />
    </div>);

}