import {
  Code2,
  Globe,
  Server,
  Database,
  Wrench,
  Sparkles,
  BrainCircuit,
  KeyRound,
} from "lucide-react";
import {
  SiC,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNodedotjs,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRender,
  SiClaude,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscVscode, VscOpenai } from "react-icons/vsc";
import { RiGeminiFill } from "react-icons/ri";

const Skills = ({ darkMode }) => {
  const categories = [
    {
      title: "Programming Languages",
      icon: Code2,
      items: [
        {
          name: "C Language",
          Icon: SiC,
          color: "#659AD2",
        },
        {
          name: "JavaScript",
          Icon: SiJavascript,
          color: "#F7DF1E",
        },
        {
          name: "Python",
          Icon: SiPython,
          color: "#3776AB",
        },
      ],
    },
    {
      title: "Frontend Technologies",
      icon: Globe,
      items: [
        {
          name: "HTML5",
          Icon: SiHtml5,
          color: "#E34F26",
        },
        {
          name: "CSS3",
          Icon: SiCss,
          color: "#1572B6",
        },
        {
          name: "Tailwind CSS",
          Icon: SiTailwindcss,
          color: "#38BDF8",
        },
        {
          name: "Bootstrap CSS",
          Icon: SiBootstrap,
          color: "#563D7C",
        },
        {
          name: "React.js",
          Icon: SiReact,
          color: "#61DAFB",
        },
        {
          name: "Redux",
          Icon: SiRedux,
          color: "#764ABC",
        },
      ],
    },
    {
      title: "Backend Technologies",
      icon: Server,
      items: [
        {
          name: "Node.js",
          Icon: SiNodedotjs,
          color: "#5FA04E",
        },
        {
          name: "Express.js",
          Icon: SiExpress,
          color: darkMode ? "#FFFFFF" : "#000000",
        },
        {
          name: "REST APIs",
          Icon: TbApi,
          color: "#F59E0B",
        },
        {
          name: "JWT Authentication",
          Icon: KeyRound,
          color: "#F7DF1E",
        },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      items: [
        {
          name: "MongoDB",
          Icon: SiMongodb,
          color: "#47A248",
        },
        {
          name: "MySQL",
          Icon: Database,
          color: "#4479A1",
        },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      items: [
        {
          name: "Git",
          Icon: SiGit,
          color: "#F05032",
        },
        {
          name: "GitHub",
          Icon: SiGithub,
          color: darkMode ? "#FFFFFF" : "#181717",
        },
        {
          name: "Postman",
          Icon: SiPostman,
          color: "#FF6C37",
        },
        {
          name: "MongoDB Compass",
          Icon: SiMongodb,
          color: "#47A248",
        },
        {
          name: "MySQL Workbench",
          Icon: Database,
          color: "#4479A1",
        },
        {
          name: "Vercel",
          Icon: SiVercel,
          color: "#000000",
        },
        {
          name: "Render",
          Icon: SiRender,
          color: "#000000",
        },
        {
          name: "VS Code",
          Icon: VscVscode,
          color: "#007ACC",
        },
      ],
    },
    {
      title: "AI & Productivity",
      icon: Sparkles,
      items: [
        {
          name: "Prompt Engineering",
          Icon: BrainCircuit,
          color: "#A855F7",
        },
        {
          name: "ChatGPT",
          Icon: VscOpenai,
          color: "#ffffff",
        },
        {
          name: "Claude AI",
          Icon: SiClaude,
          color: "#ff7f50",
        },
        {
          name: "Gemini AI",
          Icon: RiGeminiFill,
          color: "#00BFFF",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`relative overflow-hidden py-24 transition-colors duration-500 ${
        darkMode ? "bg-[#070b14] text-slate-100" : "bg-slate-50 text-slate-950"
      }`}
      aria-labelledby="skills-heading"
    >
      <div
        className={`pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full blur-3xl ${darkMode ? "bg-indigo-600/10" : "bg-indigo-200/35"}`}
      />
      <div
        className={`pointer-events-none absolute -right-24 bottom-24 h-72 w-72 rounded-full blur-3xl ${darkMode ? "bg-cyan-500/10" : "bg-cyan-200/35"}`}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h2
            id="skills-heading"
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            EXPER
            <span className="bg-linear-to-r from-indigo-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              TISE
            </span>
          </h2>
          <p
            className={`mx-auto mt-4 max-w-2xl text-base leading-7 sm:text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            I am proficient in performing tasks related to all of the listed
            skills below.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 perspective-[1400px]">
          {categories.map((cat, catIndex) => {
            const CategoryIcon = cat.icon;
            return (
              <article
                key={cat.title}
                className={`group relative overflow-hidden rounded-3xl border p-6 transition-all duration-700 transform-3d ${
                  catIndex % 2 === 0
                    ? "hover:transform-[rotateX(5deg)_rotateY(-5deg)_translateY(-9px)]"
                    : "hover:transform-[rotateX(5deg)_rotateY(5deg)_translateY(-9px)]"
                } ${
                  darkMode
                    ? "border-white/10 bg-white/4.5 shadow-[0_22px_55px_rgba(2,6,23,0.32)] hover:border-cyan-400/25 hover:shadow-[0_30px_70px_rgba(8,145,178,0.13)]"
                    : "border-slate-200/80 bg-white/90 shadow-[0_18px_45px_rgba(15,23,42,0.07)] hover:border-indigo-200 hover:shadow-[0_28px_60px_rgba(79,70,229,0.13)]"
                }`}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-linear-to-br from-indigo-500/14 to-cyan-400/10 blur-2xl transition-all duration-700 group-hover:scale-150" />

                <div className="relative transition-transform duration-700 group-hover-[transform:translateZ(28px)]">
                  <div className="mb-6 flex items-center gap-3.5">
                    <span
                      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${darkMode ? "border-cyan-400/15 bg-cyan-400/8 text-cyan-300" : "border-indigo-100 bg-indigo-50 text-indigo-600"}`}
                    >
                      <CategoryIcon size={22} strokeWidth={2} />
                    </span>
                    <h3 className="text-lg font-bold leading-snug">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {cat.items.map((item) => {
                      const ItemIcon = item.Icon;
                      return (
                        <a
                          key={item.name}
                          href={item.docs}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Open ${item.name} docs`}
                          className={`group/skill inline-flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-1 ${
                            darkMode
                              ? "border-white/10 bg-white/[0.035] text-slate-200 hover:border-violet-400/30 hover:bg-violet-400/8"
                              : "border-slate-200 bg-slate-50/80 text-slate-700 hover:border-indigo-200 hover:bg-indigo-50/70 hover:text-indigo-700 hover:shadow-sm"
                          }`}
                        >
                          <ItemIcon
                            size={17}
                            style={{ color: item.color }}
                            className="shrink-0 transition-transform duration-300 group-hover/skill:scale-110 group-hover/skill:-rotate-6"
                          />
                          {item.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
