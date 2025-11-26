"use client";

import clsx from "clsx";
import Script from "next/script";
import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import type { ContactFormState } from "@/app/contact/actions";
import { sendContact } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle" };
const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-xl bg-accent-blue/90 py-3 text-sm font-semibold uppercase tracking-widest text-primary transition hover:bg-accent-blue disabled:opacity-60"
    >
      {pending ? "Envoi en cours..." : "Envoyer le message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(sendContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const isSuccess = state.status === "success";

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
              Nom
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-accent-blue"
              placeholder="Ex : Julien"
            />
          </div>
          <div>
            <label htmlFor="firstName" className="text-sm uppercase tracking-wide text-gray-400">
              Prénom
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-accent-blue"
              placeholder="Ex : Dupont"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="text-sm uppercase tracking-wide text-gray-400">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-accent-blue"
            placeholder="vous@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm uppercase tracking-wide text-gray-400">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-accent-blue"
            placeholder="+33 6 12 34 56 78"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm uppercase tracking-wide text-gray-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-accent-blue"
            placeholder="Parlez-moi de votre projet..."
          />
        </div>
        {recaptchaSiteKey ? (
          <div className="g-recaptcha" data-sitekey={recaptchaSiteKey} />
        ) : (
          <p className="text-sm text-amber-400">
            reCAPTCHA n&apos;est pas configuré, les envois ne seront pas protégés contre le spam.
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
