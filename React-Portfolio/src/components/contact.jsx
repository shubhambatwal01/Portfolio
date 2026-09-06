import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowUpRight,
  CheckCircle2,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  MessageSquareText,
  Send,
} from "lucide-react";

const Contact = ({ darkMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (sending) return;

    const serviceId = "service_4fsehw9";
    const templateId = "template_r41uj96";
    const publicKey = "Oq0OzJg3E-AOG7vVJ";

    const templateParams = {
      name,
      email,
      subject,
      message,

      from_name: name,
      from_email: email,
      reply_to: email,
    };

    try {
      setSending(true);

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        {
          publicKey,
        },
      );

      console.log("Email sent successfully:", response);

      alert("Message sent successfully!");

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS Error:", error);

      alert(
        error?.text ||
          error?.message ||
          "Failed to send message. Please try again later.",
      );
    } finally {
      setSending(false);
    }
  };

  const inputClass = `w-full rounded-2xl border px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:-translate-y-0.5 focus:ring-4 ${
    darkMode
      ? "border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500 focus:border-cyan-400/40 focus:bg-white/[0.06] focus:ring-cyan-400/10"
      : "border-slate-200 bg-slate-50/70 text-slate-900 placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:ring-indigo-500/10"
  }`;

  const labelClass = `mb-2 block text-sm font-semibold ${
    darkMode ? "text-slate-300" : "text-slate-700"
  }`;

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "shubhambatwal14@gmail.com",
      href: "mailto:shubhambatwal14@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Shubham Batwal",
      href: "https://www.linkedin.com/in/shubhambatwal01/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "shubhambatwal01",
      href: "https://github.com/shubhambatwal01",
    },
  ];

  return (
    <section
      id="contact"
      className={`relative overflow-hidden py-24 transition-colors duration-500 sm:py-28 ${
        darkMode ? "bg-[#070b14] text-white" : "bg-slate-50 text-slate-950"
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute -left-32 top-12 h-80 w-80 rounded-full blur-[120px] ${
            darkMode ? "bg-indigo-600/15" : "bg-indigo-300/30"
          }`}
        />

        <div
          className={`absolute -right-32 bottom-10 h-80 w-80 rounded-full blur-[120px] ${
            darkMode ? "bg-cyan-500/10" : "bg-cyan-300/25"
          }`}
        />

        <div
          className={`absolute left-1/2 top-1/2 h-112.5 w-112.5 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px] ${
            darkMode ? "bg-violet-600/6" : "bg-violet-300/15"
          }`}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            CON
            <span className="bg-linear-to-r from-indigo-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              TACT
            </span>
          </h2>

          <p
            className={`mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Get in touch with me anytime.
          </p>
        </div>

        <div
          className={`mx-auto grid max-w-6xl overflow-hidden rounded-4xl border lg:grid-cols-[0.85fr_1.15fr] ${
            darkMode
              ? "border-white/10 bg-white/[0.035] shadow-[0_35px_100px_rgba(2,6,23,0.5)]"
              : "border-slate-200/80 bg-white shadow-[0_35px_100px_rgba(79,70,229,0.12)]"
          }`}
        >
          <div
            className={`relative overflow-hidden p-7 sm:p-9 lg:p-10 ${
              darkMode
                ? "border-b border-white/10 bg-white/2.5 lg:border-b-0 lg:border-r"
                : "border-b border-slate-200 bg-slate-50/60 lg:border-b-0 lg:border-r"
            }`}
          >
            <div className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full bg-linear-to-br from-indigo-500/20 via-violet-500/10 to-transparent blur-3xl" />

            <div className="relative">
              <h3 className="text-2xl font-bold sm:text-3xl">
                Let&apos;s build something great.
              </h3>

              <p
                className={`mt-4 text-sm leading-7 sm:text-[15px] ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                I&apos;m open to full-stack development opportunities, freelance
                projects, collaborations, and interesting ideas.
              </p>

              <div className="mt-9 space-y-3">
                {contactLinks.map((item) => {
                  const Icon = item.icon;
                  const isExternal = item.href.startsWith("http");

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className={`group/link flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 ${
                        darkMode
                          ? "border-white/10 bg-white/[0.035] hover:border-cyan-400/20 hover:bg-white/6"
                          : "border-slate-200 bg-white hover:border-indigo-200 hover:shadow-lg"
                      }`}
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                          darkMode
                            ? "bg-white/6 text-cyan-300"
                            : "bg-indigo-50 text-indigo-600"
                        }`}
                      >
                        <Icon size={19} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p
                          className={`text-xs font-medium ${
                            darkMode ? "text-slate-500" : "text-slate-500"
                          }`}
                        >
                          {item.label}
                        </p>

                        <p className="mt-0.5 truncate text-sm font-semibold">
                          {item.value}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className={`shrink-0 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 ${
                          darkMode ? "text-slate-500" : "text-slate-400"
                        }`}
                      />
                    </a>
                  );
                })}
              </div>

              <div
                className={`mt-8 flex items-center gap-2 text-sm ${
                  darkMode ? "text-slate-500" : "text-slate-500"
                }`}
              >
                <MapPin size={16} />
                Pune, Maharashtra, India
              </div>
            </div>
          </div>

          <div className="relative p-7 sm:p-9 lg:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-linear-to-br from-violet-500/10 to-cyan-400/10 blur-3xl" />

            <form onSubmit={handleSubmit} className="relative">
              <div className="mb-8">
                <p
                  className={`mb-2 text-xs font-bold uppercase tracking-[0.2em] ${
                    darkMode ? "text-violet-300" : "text-violet-600"
                  }`}
                >
                  Send a message
                </p>

                <p
                  className={`mt-2 text-sm ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Fill out the form below and I&apos;ll respond as soon as I
                  can.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                    placeholder="Shubham Batwal"
                    autoComplete="name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                    placeholder="shubhambatwal14@gmail.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="subject" className={labelClass}>
                    Subject
                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={inputClass}
                    placeholder="Project collaboration"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <label
                      htmlFor="message"
                      className={`text-sm font-semibold ${
                        darkMode ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Message
                    </label>

                    <span
                      className={`text-xs ${
                        darkMode ? "text-slate-600" : "text-slate-400"
                      }`}
                    >
                      {message.length} characters
                    </span>
                  </div>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${inputClass} min-h-36 resize-none`}
                    placeholder="Hi Shubham, I would like to discuss a potential project collaboration with you..."
                    required
                  />
                </div>
              </div>

              <div className="mt-7">
                <button
                  type="submit"
                  disabled={sending}
                  className={`group/btn relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-linear-to-r from-indigo-600 via-violet-600 to-cyan-500 px-6 py-4 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(79,70,229,0.28)] transition-all duration-300 ${
                    sending
                      ? "cursor-not-allowed opacity-70"
                      : "hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(34,211,238,0.24)] active:translate-y-0"
                  }`}
                >
                  <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />

                  <span className="relative flex items-center gap-2">
                    {sending ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send
                          size={17}
                          className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                        />
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;