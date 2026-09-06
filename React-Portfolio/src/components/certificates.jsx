import { Code2, ExternalLink, Github, Sparkles } from "lucide-react";
import { FaAws } from "react-icons/fa";
import { SiUdemy, SiReact, SiHackerrank, SiNodedotjs } from "react-icons/si";

const certifications = [
  {
    title: "Frontend Developer (React)",
    issuer: "Hacker Rank",
    date: "August 2026",
    icon: SiHackerrank,
    gradient: "from-cyan-400 via-blue-500 to-indigo-500",
    link: "https://www.hackerrank.com/certificates/9ce0da7c0699",
  },
  {
    title: "NodeJs + ExpressJs + MongoDB",
    issuer: "KnowledgeGate",
    date: "February 2026",
    icon: SiNodedotjs,
    gradient: "from-cyan-400 via-blue-500 to-indigo-500",
    link: "https://www.knowledgegate.ai/certificate/9734B326",
  },
  {
    title: "Career Essentials in GitHub",
    issuer: "LinkedIn Learning",
    date: "September 2025",
    icon: Github,
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
    link: "https://www.linkedin.com/learning/certificates/e43d5f30965ead894910cbc8e8894169f58a50202a8174642c9d5d86c86b3805?trk=share_certificate",
  },
  {
    title: "Foundation of Prompt Engineering",
    issuer: "AWS",
    date: "September 2025",
    icon: FaAws,
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
    link: "https://www.linkedin.com/posts/shubhambatwal03_foundation-of-prompt-engineering-certificate-activity-7369296439027445760-QJD5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEs6GGgB-LvPykEKpJi8LdLqt0nXtUBNVXA",
  },
  {
    title: "Digital Application Fundamentals",
    issuer: "Future Skills Prime",
    date: "August 2025",
    icon: Code2,
    gradient: "from-cyan-500 via-sky-500 to-blue-500",
    link: "https://www.linkedin.com/posts/shubhambatwal03_digital-application-fundamentals-course-certificate-activity-7365755677106913280-kTAr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEs6GGgB-LvPykEKpJi8LdLqt0nXtUBNVXA",
  },
  {
    title: "Master in Artificial Intelligence",
    issuer: "Udemy",
    date: "June 2025",
    icon: SiUdemy,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    link: "https://www.linkedin.com/posts/shubhambatwal03_ai-certificate-activity-7344054817683562497-pgcC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEs6GGgB-LvPykEKpJi8LdLqt0nXtUBNVXA",
  },
  {
    title: "React and Redux",
    issuer: "KnowledgeGate",
    date: "April 2025",
    icon: SiReact,
    gradient: "from-cyan-400 via-blue-500 to-indigo-500",
    link: "https://www.linkedin.com/posts/shubhambatwal03_react-redux-certificate-activity-7320308653046046720-SXuF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEs6GGgB-LvPykEKpJi8LdLqt0nXtUBNVXA",
  },
];

const Certificates = ({ darkMode }) => {
  return (
    <section
      id="certifications"
      className={`relative overflow-hidden py-24 transition-colors duration-500 ${
        darkMode ? "bg-[#0a0f1c] text-white" : "bg-white text-slate-950"
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute -left-32 top-20 h-72 w-72 rounded-full blur-[120px] ${
            darkMode ? "bg-indigo-600/10" : "bg-indigo-400/10"
          }`}
        />

        <div
          className={`absolute -right-32 bottom-10 h-72 w-72 rounded-full blur-[120px] ${
            darkMode ? "bg-cyan-500/10" : "bg-cyan-400/10"
          }`}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            CERTI
            <span className="bg-linear-to-r from-indigo-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              FICATIONS
            </span>
          </h2>

          <p
            className={`mx-auto mt-4 max-w-2xl text-base sm:text-lg ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Certifications and courses that have strengthened my technical
            knowledge and development skills.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 perspective-[1500px]">
          {certifications.map((certificate, index) => {
            const Icon = certificate.icon;

            return (
              <article
                key={certificate.title}
                className={`group relative flex min-h-full flex-col overflow-hidden rounded-3xl border transition-all duration-700 transform-3d ${
                  index % 2 === 0
                    ? "hover:transform-[rotateX(4deg)_rotateY(-5deg)_translateY(-12px)]"
                    : "hover:transform-[rotateX(4deg)_rotateY(5deg)_translateY(-12px)]"
                } ${
                  darkMode
                    ? "border-white/10 bg-white/4.5 shadow-[0_24px_60px_rgba(2,6,23,0.38)] hover:border-cyan-400/25 hover:shadow-[0_34px_75px_rgba(8,145,178,0.15)]"
                    : "border-slate-200/80 bg-white shadow-[0_22px_55px_rgba(15,23,42,0.08)] hover:border-indigo-200 hover:shadow-[0_34px_75px_rgba(79,70,229,0.14)]"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${certificate.gradient} opacity-0 transition-opacity duration-700 group-hover:opacity-[0.07]`}
                />

                <div
                  className={`absolute left-0 top-0 h-0.5 w-0 bg-linear-to-r ${certificate.gradient} transition-all duration-700 group-hover:w-full`}
                />

                <div className="relative flex h-full flex-1 flex-col p-6 transition-transform duration-700 group-hover:transform-[translateZ(26px)]">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div
                      className={`relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border ${
                        darkMode
                          ? "border-white/10 bg-white/5"
                          : "border-slate-200 bg-slate-50"
                      }`}
                    >
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${certificate.gradient} opacity-10 transition-opacity duration-500 group-hover:opacity-20`}
                      />

                      <Icon
                        size={27}
                        className="relative transition-all duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div
                      className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold ${
                        darkMode
                          ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                          : "border-emerald-200 bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      <Sparkles size={13} />
                      Certified
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col">
                    <p
                      className={`mb-2 text-xs font-bold uppercase tracking-[0.16em] ${
                        darkMode ? "text-cyan-400" : "text-indigo-600"
                      }`}
                    >
                      {certificate.issuer}
                    </p>

                    <h3 className="mb-5 text-xl font-bold leading-snug sm:text-[22px]">
                      {certificate.title}
                    </h3>

                    <div
                      className={`mt-auto flex items-center justify-between border-t pt-4 ${
                        darkMode ? "border-white/10" : "border-slate-200"
                      }`}
                    >
                      <span
                        className={`text-sm ${
                          darkMode ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        Issued
                      </span>

                      <span
                        className={`text-sm font-semibold ${
                          darkMode ? "text-slate-200" : "text-slate-800"
                        }`}
                      >
                        {certificate.date}
                      </span>
                    </div>

                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 via-violet-600 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(79,70,229,0.24)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(34,211,238,0.22)]"
                    >
                      View Certificate
                      <ExternalLink
                        size={16}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </a>
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

export default Certificates;
