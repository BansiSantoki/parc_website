import React from 'react';
import { motion } from 'framer-motion';
import {
  BabyIcon,
  CalendarCheckIcon,
  EarIcon,
  HeartHandshakeIcon,
  TargetIcon,
  UsersIcon } from
'lucide-react';
import { ButtonLink } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { LOGO_URL, images, whatsappLink } from '../../data/site';

const EASE = [0.23, 1, 0.32, 1] as const;

const trustIndicators = [
{ label: 'Pediatric-Focused Care', icon: BabyIcon },
{ label: 'Multidisciplinary Team', icon: UsersIcon },
{ label: 'Individualised Programs', icon: TargetIcon },
{ label: 'Family-Centred Approach', icon: HeartHandshakeIcon }];


export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white" aria-label="Introduction">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[70%] bg-brand-100/70"
        style={{ clipPath: 'ellipse(120% 100% at 70% 0%)' }} />
      
      <div className="relative mx-auto w-full max-w-content px-3 pb-16 pt-8 sm:px-8 sm:pb-20 lg:px-10 lg:pb-28 lg:pt-20">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1.5 text-[10px] font-semibold text-brand-600 shadow-ring sm:px-4 sm:text-xs">
                <EarIcon className="h-4 w-4" strokeWidth={2} />
                Pediatric Audiological Rehabilitation Center · Nashik
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-4 max-w-[8ch] break-words font-display text-[clamp(2.2rem,6vw,5rem)] font-bold leading-[0.85] tracking-[-0.05em] text-brand-700 sm:mt-6 sm:max-w-none lg:text-[3.6rem]">
                Helping Every Child{' '}
                <span className="relative inline-block align-baseline">
                  <span className="relative z-10">Hear, Communicate &amp; Grow.</span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-[0.1em] z-0 h-[0.18em] rounded-full bg-accent-500/60 sm:h-[0.28em]" />
                  
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 max-w-[22rem] text-[0.76rem] font-semibold leading-snug text-brand-500 sm:mt-6 sm:text-xl">
                Multidisciplinary pediatric audiology, speech, occupational therapy, sensory support,
                and special education in Nashik.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-4 max-w-[22rem] space-y-3 text-[0.78rem] leading-relaxed text-brand-800/75 sm:text-base">
                <p>
                  At PARC, we support children with hearing, speech, language, learning, sensory and
                  developmental needs through compassionate, child-centred care.
                </p>
                <p>
                  Every child is different, and so is every care plan. We work with families to build
                  practical support that fits daily life and long-term growth.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-6 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-start">
                <ButtonLink
                  to="/contact"
                  size="lg"
                  className="w-full justify-center sm:w-auto"
                  icon={<CalendarCheckIcon className="h-4 w-3" strokeWidth={2} />}>
                  Book an Assessment
                </ButtonLink>
                <ButtonLink
                  href={whatsappLink()}
                  external
                  variant="outline"
                  size="lg"
                  className="w-full justify-center sm:w-auto"
                  icon={<WhatsAppIcon className="h-4 w-4" />}>
                  WhatsApp PARC
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <ul className="mt-8 grid gap-x-5 gap-y-3 text-left sm:grid-cols-2">
                {trustIndicators.map(({ label, icon: Icon }) =>
                <li key={label} className="flex items-center gap-2.5 text-sm font-semibold text-brand-700">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-50 text-accent-700">
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                    {label}
                  </li>
                )}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>);

}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: EASE, delay: 0.1 }}
      className="relative">
      
      <div className="relative mx-auto w-full max-w-[21.5rem] overflow-hidden rounded-[28px] border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-accent-50 p-3 shadow-lift sm:max-w-none sm:p-6">
        <div className="rounded-[22px] border border-brand-100 bg-white p-3 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <img
              src={LOGO_URL}
              alt="PARC logo"
              className="h-14 w-auto object-contain sm:h-20"
              loading="eager"
              decoding="async" />
            <span className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-600">
              Nashik
            </span>
          </div>

          <div className="mt-4 overflow-hidden rounded-[22px] border border-brand-100 bg-brand-50 shadow-soft">
            <img
              src={images.hero}
              alt="Child receiving compassionate therapy support at PARC"
              className="h-56 w-full object-cover sm:h-64"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-brand-700 p-4 text-white shadow-soft">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-100/80">Care model</p>
              <p className="mt-3 font-display text-4xl font-extrabold leading-none">5</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-100/90">Disciplines. One coordinated plan.</p>
            </div>

            <div className="rounded-2xl border border-brand-100 bg-brand-50 p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-500">Listening</p>
              <div className="mt-3 rounded-xl bg-white p-3 shadow-ring">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <EarIcon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-brand-700">Hearing &amp; Listening</p>
                    <SoundWave />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[images.audiology, images.speech, images.ot].map((image, index) => (
              <div key={image} className="overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-ring">
                <img
                  src={image}
                  alt={['Audiology care', 'Speech therapy support', 'Occupational therapy support'][index]}
                  className="h-24 w-full object-cover sm:h-28"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl bg-gradient-to-r from-brand-100 via-accent-50 to-white p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-500">Support</p>
                <p className="mt-2 font-display text-2xl font-extrabold text-brand-700">Individualised care</p>
              </div>
              <div className="flex items-center gap-2 text-brand-700">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-ring">
                  <TargetIcon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-ring">
                  <HeartHandshakeIcon className="h-5 w-5" strokeWidth={2} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating sound-wave card */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        className="absolute -left-3 top-8 hidden rounded-2xl border border-brand-100 bg-white/95 px-4 py-3 shadow-lift backdrop-blur sm:block">
        
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-brand-600">
            <EarIcon className="h-4 w-4" strokeWidth={2} />
          </span>
          <div>
            <p className="text-xs font-semibold text-brand-700">Hearing &amp; Listening</p>
            <SoundWave />
          </div>
        </div>
      </motion.div>

      {/* Floating disciplines card */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-5 right-2 hidden rounded-2xl border border-brand-100 bg-white/95 px-5 py-4 shadow-lift backdrop-blur sm:block">
        
        <p className="font-display text-2xl font-extrabold text-brand-700">5</p>
        <p className="text-xs font-semibold text-brand-800/70">
          Disciplines. One
          <br /> connected plan.
        </p>
      </motion.div>

      <span
        aria-hidden="true"
        className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full border-[10px] border-accent-500/40" />
      
    </motion.div>);

}

function SoundWave() {
  const bars = [10, 18, 26, 16, 22, 12, 20];
  return (
    <div className="mt-1 flex h-6 items-end gap-1">
      {bars.map((height, index) =>
      <motion.span
        key={index}
        className="w-1 rounded-full bg-brand-400"
        animate={{ height: [height * 0.5, height, height * 0.6] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
          delay: index * 0.08
        }}
        style={{ height }} />

      )}
    </div>);

}