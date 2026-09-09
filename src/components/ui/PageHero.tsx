import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ChevronRightIcon, EarIcon, TargetIcon, UsersIcon } from 'lucide-react';
import { LOGO_URL } from '../../data/site';
import { Reveal } from './Reveal';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: React.ReactNode;
  image?: string;
  imageAlt?: string;
  actions?: React.ReactNode;
};

export function PageHero({ eyebrow, title, intro, image, imageAlt, actions }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-700 pb-16 pt-10 text-white sm:pb-20 sm:pt-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-500/30 blur-[1px]"
        style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
      
      <div className="relative mx-auto w-full max-w-content px-5 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-sm text-brand-100/70">
          <Link to="/" className="transition-colors duration-150 hover:text-accent-500">
            Home
          </Link>
          <ChevronRightIcon className="h-3.5 w-3.5" strokeWidth={2} />
          <span className="text-white">{eyebrow}</span>
        </nav>

        <div className={`grid items-center gap-10 ${image ? 'lg:grid-cols-12' : ''}`}>
          <div className={image ? 'lg:col-span-7' : 'max-w-3xl'}>
            <Reveal>
              <p className="mb-4 text-sm font-semibold text-accent-500">{eyebrow}</p>
              <h1 className="font-display text-3xl font-extrabold leading-[1.08] sm:text-4xl lg:text-[3.1rem]">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-100 sm:text-lg">
                {intro}
              </div>
            </Reveal>
            {actions ?
            <Reveal delay={0.12}>
                <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
              </Reveal> :
            null}
          </div>

          {image ?
          <Reveal delay={0.1} className="lg:col-span-5">
              <div className="overflow-hidden rounded-[28px] border border-white/15 bg-gradient-to-br from-brand-50 via-white to-accent-50 p-4 shadow-lift sm:p-5">
                <div className="rounded-[22px] border border-brand-100 bg-white p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <img
                      src={LOGO_URL}
                      alt={imageAlt ?? 'PARC logo'}
                      className="h-14 w-auto object-contain sm:h-16"
                      loading="lazy"
                      decoding="async" />
                    <span className="rounded-full bg-brand-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600">
                      Care Path
                    </span>
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="flex items-center justify-between rounded-2xl border border-brand-100 bg-brand-50 p-3">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-500">Assessment</p>
                        <p className="mt-1 font-display text-xl font-extrabold text-brand-700">Listen</p>
                      </div>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-600 shadow-ring">
                        <EarIcon className="h-5 w-5" strokeWidth={2} />
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border border-brand-100 bg-white p-3">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-500">Therapy</p>
                        <p className="mt-1 font-display text-xl font-extrabold text-brand-700">Grow</p>
                      </div>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-600 shadow-ring">
                        <TargetIcon className="h-5 w-5" strokeWidth={2} />
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border border-brand-100 bg-brand-50 p-3">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-500">Progress</p>
                        <p className="mt-1 font-display text-xl font-extrabold text-brand-700">Thrive</p>
                      </div>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-600 shadow-ring">
                        <UsersIcon className="h-5 w-5" strokeWidth={2} />
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl bg-gradient-to-r from-accent-100 via-white to-brand-50 p-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Child-first</span>
                      <ArrowRightIcon className="h-4 w-4 text-brand-500" strokeWidth={2} />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal> :
          null}
        </div>
      </div>
    </section>);

}