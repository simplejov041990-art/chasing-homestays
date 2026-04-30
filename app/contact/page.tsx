"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xdkownqo", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="pt-40 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-xs uppercase tracking-[0.2em] text-accent mb-6">Get In Touch</div>
        <h1 className="font-serif text-5xl md:text-7xl font-light leading-[0.95] tracking-tight mb-8">
          Let's chase <em className="text-accent">something great.</em>
        </h1>
        <p className="text-lg text-ink-soft max-w-2xl">
          Whether you're a homeowner exploring management or a guest with a question, we'd love to hear from you.
        </p>
      </section>

      <section className="px-6 md:px-12 max-w-3xl mx-auto pb-24">
        {submitted ? (
          <div className="bg-cream border border-ink/10 rounded p-12 text-center">
            <p className="font-serif italic text-3xl mb-3">Thank you.</p>
            <p className="text-ink-soft">We'll be in touch within one business day.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="First name" name="firstName" required />
              <Field label="Last name" name="lastName" required />
            </div>
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />

            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-ink-soft mb-2">
                I'm interested in
              </label>
              <select
                name="interest"
                className="w-full bg-transparent border-b border-ink/30 py-3 focus:outline-none focus:border-accent"
              >
                <option>Listing my property</option>
                <option>Booking a stay</option>
                <option>General inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-ink-soft mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                className="w-full bg-transparent border border-ink/20 rounded p-3 focus:outline-none focus:border-accent"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-ink text-bg px-8 py-4 rounded-full text-sm font-medium hover:bg-accent hover:text-ink transition-colors disabled:opacity-50"
            >
              {loading ? "Sending…" : "Send Message →"}
            </button>
          </form>
        )}
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-ink-soft mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-ink/30 py-3 focus:outline-none focus:border-accent"
      />
    </div>
  );
}
