import { useEffect, useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { SiGithub, SiGmail } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import {
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPython,
} from "react-icons/si";

const OUTER_TECHNOLOGIES = [
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248", angle: -22 },
  { name: "React", Icon: SiReact, color: "#61DAFB", angle: 50 },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E", angle: 122 },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4", angle: 194 },
  { name: "Express", Icon: SiExpress, color: null, angle: 266 },
];

const INNER_TECHNOLOGIES = [
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26", angle: 8 },
  { name: "CSS3", Icon: SiCss, color: "#2965F1", angle: 98 },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", angle: 188 },
  { name: "Python", Icon: SiPython, color: "#3776AB", angle: 278 },
];

function TechnologyOrbit({ technologies, duration, inner = false, darkMode }) {
  return (
    <div
      className={`home-orbit-track pointer-events-none absolute ${
        inner ? "inset-[22%]" : "inset-[10%]"
      }`}
      style={{ "--home-orbit-duration": duration }}
      aria-hidden="true"
    >
      {technologies.map((technology) => {
        const { name, Icon, color, angle } = technology;
        return (
          <div
            key={name}
            className="absolute inset-0"
            style={{ transform: `rotate(${angle}deg)` }}
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div style={{ transform: `rotate(${-angle}deg)` }}>
                <div className="home-counter-orbit relative flex flex-col items-center">
                  <div
                    className={`flex items-center justify-center rounded-xl border shadow-lg sm:rounded-2xl ${
                      inner
                        ? "h-9 w-9 sm:h-11 sm:w-11 lg:h-12 lg:w-12"
                        : "h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14"
                    } ${
                      darkMode
                        ? "border-white/20 bg-[#151e32] shadow-black/30"
                        : "border-slate-200 bg-white shadow-slate-900/10"
                    }`}
                  >
                    <Icon
                      className={
                        inner
                          ? "h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7"
                          : "h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
                      }
                      style={{
                        color: color || (darkMode ? "#E2E8F0" : "#334155"),
                      }}
                    />
                  </div>
                  <span
                    className={`absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap text-[9px] font-medium leading-none sm:text-[10px] lg:text-xs ${
                      darkMode ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const ORBIT_STYLES = `
  @keyframes shubham-home-orbit {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes shubham-home-counter-orbit {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }
  .home-tech-orbit .home-orbit-track {
    animation: shubham-home-orbit var(--home-orbit-duration) linear infinite;
    animation-play-state: var(--home-orbit-play-state, running);
  }
  .home-tech-orbit .home-counter-orbit {
    animation: shubham-home-counter-orbit var(--home-orbit-duration) linear infinite;
    animation-play-state: var(--home-orbit-play-state, running);
  }
`;

function restoreOriginalPortrait(image) {
  if (image && image.getAttribute("src") !== "/ShubhamPhoto.webp") {
    image.src = "/ShubhamPhoto.webp";
  }
}

const Home = ({
  darkMode = false,
  photoSrc = "/ShubhamPhoto.webp",
  animate = true,
}) => {
  const portraitRef = useRef(null);

  useEffect(() => {
    const image = portraitRef.current;
    if (image?.complete && image.naturalWidth === 0) {
      restoreOriginalPortrait(image);
    }
  }, [photoSrc]);
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
      <style>{ORBIT_STYLES}</style>
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

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-5 py-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6 lg:px-8 lg:pb-24 lg:pt-12">
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

        <div className="order-1 flex w-full justify-center lg:order-2 lg:justify-end">
          <figure
            className="home-tech-orbit relative m-0 aspect-square w-full max-w-140 isolate"
            style={{
              "--home-orbit-play-state": animate ? "running" : "paused",
            }}
          >
            <div
              className={`pointer-events-none absolute inset-[19%] rounded-full blur-3xl ${
                darkMode ? "bg-indigo-500/10" : "bg-indigo-400/10"
              }`}
              aria-hidden="true"
            />
            <div
              className={`pointer-events-none absolute inset-[10%] rounded-full border-2 border-dashed ${
                darkMode ? "border-slate-500/65" : "border-slate-400/70"
              }`}
              aria-hidden="true"
            />
            <div
              className={`pointer-events-none absolute inset-[22%] rounded-full border border-dashed ${
                darkMode ? "border-slate-500/65" : "border-slate-400/70"
              }`}
              aria-hidden="true"
            />

            <TechnologyOrbit
              technologies={OUTER_TECHNOLOGIES}
              duration="10s"
              darkMode={darkMode}
            />
            <TechnologyOrbit
              technologies={INNER_TECHNOLOGIES}
              duration="6s"
              inner
              darkMode={darkMode}
            />

            <div
              className={`absolute inset-[26%] z-10 overflow-hidden rounded-full  shadow-2xl`}
            >
              <img
                src={photoSrc}
                alt="Shubham Batwal, Full-Stack Developer in Pune"
                fetchPriority="high"
                decoding="async"
                ref={portraitRef}
                onError={(event) =>
                  restoreOriginalPortrait(event.currentTarget)
                }
                className="h-full w-full object-contain scale-110"
              />
            </div>
            <figcaption className="sr-only">
              React, Node.js, Express, MongoDB, Tailwind CSS, HTML, CSS and
              JavaScript and Python icons orbiting Shubham Batwal&apos;s
              portrait.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Home;
