import React, { useState } from 'react';
import { CheckCircle2Icon, PhoneIcon, SendIcon } from 'lucide-react';
import { Section, SectionHeading } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { ButtonLink } from '../ui/Button';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { site, whatsappLink } from '../../data/site';

const concernOptions = [
'Hearing',
'Speech',
'Language',
'Development',
'Sensory',
'Occupational Therapy',
'Learning',
'Behaviour / Participation',
'Hearing Aid / Cochlear Implant',
'Other'];


type FormState = {
  childName: string;
  childAge: string;
  parentName: string;
  mobile: string;
  concern: string;
};

const empty: FormState = { childName: '', childAge: '', parentName: '', mobile: '', concern: '' };

export function EnquiryForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof FormState) => (
  event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
  {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.childName.trim()) nextErrors.childName = "Please enter your child's name";
    if (!form.childAge.trim()) nextErrors.childAge = "Please enter your child's age";
    if (!form.parentName.trim()) nextErrors.parentName = 'Please enter your name';
    if (!/^[0-9+\s-]{8,15}$/.test(form.mobile.trim()))
    nextErrors.mobile = 'Please enter a valid mobile number';
    if (!form.concern) nextErrors.concern = 'Please select your main concern';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const message = [
    'Hello PARC, I would like to enquire about my child.',
    `Child's Name: ${form.childName}`,
    `Child's Age: ${form.childAge}`,
    `Parent / Guardian: ${form.parentName}`,
    `Mobile: ${form.mobile}`,
    `Main Concern: ${form.concern}`].
    join('\n');

    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <Section tone="white" id="enquiry">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="Enquiry"
            title="Talk to Our Team"
            description={
            <p>
                Share a few details and your enquiry will open in WhatsApp, ready to send to the PARC
                team.
              </p>
            } />
          

          <Reveal delay={0.06}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-8 rounded-panel border border-brand-100 bg-brand-50 p-6 shadow-ring sm:p-8">
              
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="childName"
                  label="Child's Name"
                  value={form.childName}
                  onChange={update('childName')}
                  error={errors.childName}
                  autoComplete="off" />
                
                <Field
                  id="childAge"
                  label="Child's Age"
                  value={form.childAge}
                  onChange={update('childAge')}
                  error={errors.childAge}
                  placeholder="e.g. 3 years 4 months" />
                
                <Field
                  id="parentName"
                  label="Parent / Guardian Name"
                  value={form.parentName}
                  onChange={update('parentName')}
                  error={errors.parentName}
                  autoComplete="name" />
                
                <Field
                  id="mobile"
                  label="Mobile Number"
                  type="tel"
                  value={form.mobile}
                  onChange={update('mobile')}
                  error={errors.mobile}
                  autoComplete="tel" />
                

                <div className="sm:col-span-2">
                  <label htmlFor="concern" className="block text-sm font-semibold text-brand-700">
                    What is your main concern?
                  </label>
                  <select
                    id="concern"
                    value={form.concern}
                    onChange={update('concern')}
                    aria-invalid={Boolean(errors.concern)}
                    aria-describedby={errors.concern ? 'concern-error' : undefined}
                    className={`mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm text-brand-800 transition-colors duration-150 focus:border-brand-500 ${
                    errors.concern ? 'border-red-500' : 'border-brand-200'}`
                    }>
                    
                    <option value="">Select a concern</option>
                    {concernOptions.map((option) =>
                    <option key={option} value={option}>
                        {option}
                      </option>
                    )}
                  </select>
                  {errors.concern ?
                  <p id="concern-error" className="mt-2 text-sm font-medium text-red-600">
                      {errors.concern}
                    </p> :
                  null}
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1FA855] px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-[transform,background-color,box-shadow] duration-200 ease-premium hover:-translate-y-0.5 hover:bg-[#188F48] hover:shadow-lift sm:w-auto">
                
                <SendIcon className="h-5 w-5" strokeWidth={2} />
                Send Enquiry on WhatsApp
              </button>

              {sent ?
              <p
                role="status"
                className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#188F48]">
                
                  <CheckCircle2Icon className="h-4 w-4" strokeWidth={2.5} />
                  WhatsApp opened in a new tab — press send to reach our team.
                </p> :
              null}
            </form>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <aside className="flex h-full flex-col justify-between rounded-panel bg-brand-700 p-7 text-white sm:p-9">
              <div>
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1FA855]">
                  <WhatsAppIcon className="h-7 w-7" variant="inverse" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-extrabold leading-tight">
                  Prefer to simply message us?
                </h3>
                <p className="mt-4 text-base leading-relaxed text-brand-100">
                  Send a message on WhatsApp with your concern and our team will guide you on the right
                  first step for your child.
                </p>

                <ul className="mt-6 space-y-2.5 text-sm text-brand-100/85">
                  <li>Ask which assessment may be appropriate</li>
                  <li>Check appointment availability</li>
                  <li>Understand what to expect on your first visit</li>
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <ButtonLink
                  href={whatsappLink()}
                  external
                  variant="accent"
                  size="lg"
                  icon={<WhatsAppIcon className="h-5 w-5" />}>
                  
                  WhatsApp PARC
                </ButtonLink>
                <ButtonLink
                  href={site.phoneHref}
                  variant="ghost"
                  size="lg"
                  icon={<PhoneIcon className="h-5 w-5" strokeWidth={2} />}>
                  
                  Call {site.phoneDisplay}
                </ButtonLink>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </Section>);

}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
};

function Field({ id, label, value, onChange, error, type = 'text', placeholder, autoComplete }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-brand-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm text-brand-800 placeholder:text-brand-800/40 transition-colors duration-150 focus:border-brand-500 ${
        error ? 'border-red-500' : 'border-brand-200'}`
        } />
      
      {error ?
      <p id={`${id}-error`} className="mt-2 text-sm font-medium text-red-600">
          {error}
        </p> :
      null}
    </div>);

}