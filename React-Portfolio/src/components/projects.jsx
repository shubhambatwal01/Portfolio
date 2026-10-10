import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "SmartStay",
    description:
      "MERN Stack Accommodation Booking Platform with React.js, Node.js, MongoDB and Razorpay.",
    image:
      "https://i.8upload.com/image/6d3af2cced2ef66d/screenshot-2026-09-06-200333.png",
    github: "https://github.com/shubhambatwal01/SmartStay",
    link: "https://shubz-smart-stay.vercel.app",
  },
  {
    title: "Exam Seating Allotment",
    description:
      "Full Stack Examination Management System using React.js, Node.js and MongoDB.",
    image:
      "https://i.8upload.com/image/c27bbd8e81e7d51b/screenshot-2026-09-19-192248.png",
    link: "https://exam-seating-allotment.vercel.app",
  },
  {
    title: "Personal Portfolio",
    description:
      "Shubham Batwal – Full Stack Developer Portfolio built with React.js and Tailwind CSS.",
    image:
      "https://i.8upload.com/image/7661694381c82c38/screenshot-2026-10-10-113942.png",
    github:
      "https://github.com/shubhambatwal01/Portfolio/tree/main/React-Portfolio",
    link: "https://shubhambatwal.vercel.app",
  },
  {
    title: "Task Manager",
    description:
      "MERN Stack Task Management Application with JWT Authentication.",
    image:
      "https://i.8upload.com/image/4cae10e7ec1dfa52/screenshot-2026-07-08-170143.png",
    github: "https://github.com/shubhambatwal01/Task-Management-System",
    link: "https://shubz-task-manager.vercel.app",
  },
];

const Projects = ({ darkMode }) => {
  return (
    <section
      id="projects"
      className={`relative overflow-hidden py-24 transition-colors duration-500 ${
        darkMode ? "bg-[#0a0f1c] text-white" : "bg-white text-slate-950"
      }`}
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            PRO
            <span className="bg-linear-to-r from-indigo-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              JECTS
            </span>
          </h2>
          <p
            className={`mt-4 text-base sm:text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            Projects upon which I have worked on.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 perspective-[1500px]">
          {projects.map((proj, index) => (
            <article
              key={index}
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
              <div className="relative h-52 overflow-hidden">
                <img
                  src={proj.image}
                  alt={`${proj.title} web application by Shubham Batwal`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:transform-[scale(1.1)_translateZ(24px)]"
                />
                <div
                  className={`absolute inset-0 bg-linear-to-t ${darkMode ? "from-[#0a0f1c] via-transparent to-transparent" : "from-white/70 via-transparent to-transparent"}`}
                />
                <div className="absolute inset-0 bg-linear-to-br from-indigo-500/0 via-transparent to-cyan-400/0 transition-all duration-700 group-hover:from-indigo-500/10 group-hover:to-cyan-400/10" />
              </div>

              <div className="relative flex flex-1 flex-col p-6 transition-transform duration-700 group-hover:transform-[translateZ(26px)]">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold sm:text-2xl">
                    {proj.title}
                  </h3>
                </div>

                <p
                  className={`mb-6 flex-1 text-sm leading-7 sm:text-[15px] ${darkMode ? "text-slate-300" : "text-slate-600"}`}
                >
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/link inline-flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 ${
                        darkMode
                          ? "border-white/10 bg-white/5 text-slate-200 hover:border-violet-400/30 hover:bg-violet-400/10 hover:text-violet-200"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                      }`}
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 via-violet-600 to-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(79,70,229,0.24)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(34,211,238,0.22)]"
                    >
                      Live Demo
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
