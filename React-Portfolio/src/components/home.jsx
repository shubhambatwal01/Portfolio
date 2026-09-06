import { ArrowRight, Mail } from "lucide-react";
import { SiGithub, SiGmail } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

const Home = ({ darkMode }) => {
  const socialClass = `group relative flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-500 [transform-style:preserve-3d] hover:-translate-y-2 hover:[transform:rotateX(12deg)_rotateY(-10deg)_translateY(-8px)] ${
    darkMode
      ? "border-white/10 bg-white/5 text-slate-200 shadow-[0_12px_35px_rgba(15,23,42,0.4)] hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
      : "border-slate-200/80 bg-white/80 text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.08)] hover:border-indigo-300 hover:text-indigo-600 hover:shadow-[0_18px_35px_rgba(79,70,229,0.16)]"
  }`;

  return (
    <section
      id="home"
      className={`relative flex min-h-screen items-center overflow-hidden pt-16 transition-colors duration-500 ${
        darkMode
          ? "bg-[#070b14] text-white"
          : "bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_48%,#f8fafc_100%)] text-slate-950"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute -left-24 top-32 h-72 w-72 rounded-full blur-3xl motion-safe:animate-pulse ${darkMode ? "bg-indigo-600/20" : "bg-indigo-300/35"}`}
        />
        <div
          className={`absolute -right-24 top-44 h-80 w-80 rounded-full blur-3xl motion-safe:animate-pulse ${darkMode ? "bg-cyan-500/15" : "bg-cyan-200/45"}`}
        />
        <div
          className={`absolute bottom-0 left-1/2 h-52 w-160 -translate-x-1/2 rounded-full blur-3xl ${darkMode ? "bg-violet-600/10" : "bg-violet-200/30"}`}
        />
        <div
          className={`absolute inset-0 opacity-50 ${darkMode ? "background-image:linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)]" : "background-image:linear-gradient(rgba(79,70,229,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.035)_1px,transparent_1px)"} [background-size:42px_42px`}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-24 lg:pt-12">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <div
            className={`mx-auto mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] lg:mx-0 ${
              darkMode
                ? "border-cyan-400/20 bg-cyan-400/5 text-cyan-300"
                : "border-indigo-200 bg-white/80 text-indigo-700 shadow-sm"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.7)]" />
            Full-Stack Web Developer
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-linear-to-r from-indigo-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Shubham Batwal
            </span>
          </h1>

          <p
            className={`mx-auto mt-6 max-w-2xl text-base font-light leading-6 sm:text-lg lg:mx-0 lg:text-xl ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            A Passionate Full-stack Web Developer 🚀 — I build interactive,
            responsive web applications with clean design and strong
            performance.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-indigo-600 via-violet-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(79,70,229,0.28)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_42px_rgba(34,211,238,0.26)]"
            >
              View Projects
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className={`group inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1.5 ${
                darkMode
                  ? "border-white/10 bg-white/5 text-white hover:border-cyan-400/30 hover:bg-white/10"
                  : "border-slate-200 bg-white/80 text-slate-800 shadow-sm hover:border-indigo-200 hover:text-indigo-700 hover:shadow-lg"
              }`}
            >
              <Mail size={17} />
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-3 lg:justify-start perspective-[900px]">
            <a
              href="mailto:shubhambatwal14@gmail.com"
              className={socialClass}
              title="Email"
            >
              <span className="transition-transform duration-500 group-hover:transform-[translateZ(18px)]">
                <SiGmail size={19} />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/shubhambatwal01/"
              className={socialClass}
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="transition-transform duration-500 group-hover:transform-[translateZ(18px)]">
                <SlSocialLinkedin size={19} />
              </span>
            </a>
            <a
              href="https://github.com/shubhambatwal01/"
              className={socialClass}
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="transition-transform duration-500 group-hover:transform-[translateZ(18px)]">
                <SiGithub size={19} />
              </span>
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end perspective-[1300px] ">
          <div className="group relative h-80 w-70 sm:h-97.5 sm:w-85 md:h-107.5 md:w-95">
            <div
              className={`w-72 h-72 rounded-full overflow-hidden border-4 shadow-xl transition-transform duration-500 hover:scale-105 ${
                darkMode
                  ? "border-violet-300 shadow-cyan-500/20"
                  : "border-indigo-200 shadow-indigo-500/20"
              }`}
            >
              <img
                src="/ShubzPhoto.png"
                alt="Shubham Batwal"
                loading="lazy"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
