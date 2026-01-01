"use client";

import clsx from "clsx";
import Script from "next/script";
import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import type { ContactFormState } from "@/app/contact/actions";
import { sendContact } from "@/app/contact/actions";
import { useLanguage } from "@/lib/i18n";

const initialState: ContactFormState = { status: "idle" };
const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

function SubmitButton() {
  const { pending } = useFormStatus();
  const { t } = useLanguage();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-accent-blue via-accent-blue/90 to-accent-purple py-3 text-sm font-semibold uppercase tracking-widest text-primary shadow-lg shadow-accent-blue/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent-blue/50 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 shine-effect"
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {pending ? (
          <>
            <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            {t.contact.form.sending}
          </>
        ) : (
          t.contact.form.submit
        )}
      </span>
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(sendContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const isSuccess = state.status === "success";
  const { t } = useLanguage();

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <>
      {recaptchaSiteKey && <Script src="https://www.google.com/recaptcha/api.js" async defer />}
      <form
        ref={formRef}
        action={formAction}
        className={clsx(
          "card space-y-4 transition duration-300",
          isSuccess &&
          "border-green-400/50 shadow-[0_0_35px_rgba(16,185,129,0.35)] bg-gradient-to-br from-emerald-500/10 via-transparent to-green-600/10"
        )}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="lastName" className="text-sm uppercase tracking-wide text-gray-400">
              {t.contact.form.lastName}
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-accent-blue focus:bg-white/10 focus:shadow-lg focus:shadow-accent-blue/20"
              placeholder={t.contact.form.lastNamePlaceholder}
            />
          </div>
          <div>
            <label htmlFor="firstName" className="text-sm uppercase tracking-wide text-gray-400">
              {t.contact.form.firstName}
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-accent-blue focus:bg-white/10 focus:shadow-lg focus:shadow-accent-blue/20"
              placeholder={t.contact.form.firstNamePlaceholder}
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="text-sm uppercase tracking-wide text-gray-400">
            {t.contact.form.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-accent-blue focus:bg-white/10 focus:shadow-lg focus:shadow-accent-blue/20"
            placeholder={t.contact.form.emailPlaceholder}
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm uppercase tracking-wide text-gray-400">
            {t.contact.form.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-accent-blue focus:bg-white/10 focus:shadow-lg focus:shadow-accent-blue/20"
            placeholder={t.contact.form.phonePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm uppercase tracking-wide text-gray-400">
            {t.contact.form.message}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-accent-blue focus:bg-white/10 focus:shadow-lg focus:shadow-accent-blue/20 resize-none"
            placeholder={t.contact.form.messagePlaceholder}
          />
        </div>
        {recaptchaSiteKey ? (
          <div className="g-recaptcha" data-sitekey={recaptchaSiteKey} />
        ) : (
          <p className="text-sm text-amber-400">
            {t.contact.form.recaptchaWarning}
          </p>
        )}
        <SubmitButton />
        {state.status !== "idle" && state.message ? (
          <p
            role="status"
            aria-live="polite"
            className={`text-sm ${state.status === "error" ? "text-red-400" : "text-emerald-400"}`}
          >
            {state.message}
          </p>
        ) : null}
      </form>
    </>
  );
}
