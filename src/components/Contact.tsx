"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, MapPin, Phone, AlertCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import {
  siteConfig,
  getPhoneDisplay,
  getPhoneHref,
} from "@/data/portfolio";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!FORMSPREE_ENDPOINT) {
      setLoading(false);
      setError(
        `Email delivery is not configured yet. Please email me directly at ${siteConfig.email} or call ${getPhoneDisplay()}.`
      );
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong while sending your message. Please try again or email me directly."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedSection id="contact" className="section-padding section-alt">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="mb-4 font-display text-lg font-semibold text-heading">
                Let&apos;s Connect
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm text-body transition-colors hover:text-heading"
                >
                  <div className="rounded-lg bg-slate-100 p-2 text-heading dark:bg-slate-800">
                    <Mail size={18} />
                  </div>
                  {siteConfig.email}
                </a>
                <a
                  href={getPhoneHref()}
                  className="flex items-center gap-3 text-sm text-body transition-colors hover:text-heading"
                >
                  <div className="rounded-lg bg-slate-100 p-2 text-heading dark:bg-slate-800">
                    <Phone size={18} />
                  </div>
                  {getPhoneDisplay()}
                </a>
                <div className="flex items-center gap-3 text-sm text-body">
                  <div className="rounded-lg bg-slate-100 p-2 text-heading dark:bg-slate-800">
                    <MapPin size={18} />
                  </div>
                  India
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="glass-card flex flex-col items-center justify-center p-12 text-center">
                <CheckCircle size={48} className="mb-4 text-heading" />
                <h3 className="mb-2 font-display text-xl font-semibold text-heading">
                  Message Sent!
                </h3>
                <p className="text-muted">
                  Thank you for reaching out. I&apos;ll get back to you soon at{" "}
                  {siteConfig.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card space-y-5 p-8">
                {!FORMSPREE_ENDPOINT && (
                  <div className="flex gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
                    <AlertCircle size={18} className="mt-0.5 shrink-0" />
                    <p>
                      The contact form needs Formspree setup before emails are
                      delivered. Until then, use the email or phone on the left.
                    </p>
                  </div>
                )}

                {error && (
                  <div className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-200">
                    {error}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-body"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="input-field"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-body"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="input-field"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-body"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Your message..."
                    className="input-field resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full disabled:opacity-60"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
