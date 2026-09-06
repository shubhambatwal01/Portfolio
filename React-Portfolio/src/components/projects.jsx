import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "SmartStay",
    description:
      "SmartStay is a full-stack web application to browse rental homes, manage favorites, enable secure authentication, and take online payments using Razorpay.",
    image:
      "https://i.8upload.com/image/6d3af2cced2ef66d/screenshot-2026-09-06-200333.png",
    github: "https://github.com/shubhambatwal01/SmartStay",
    link: "https://shubz-smart-stay.vercel.app",
  },
  {
    title: "Task Manager",
    description:
      "A full-stack MERN Task Management System featuring task CRUD operations, REST APIs, MongoDB database integration, and a responsive React-based user interface.",
    image:
      "https://i.8upload.com/image/4cae10e7ec1dfa52/screenshot-2026-07-08-170143.png",
    github: "https://github.com/shubhambatwal01/Task-Management-System",
    link: "https://shubz-task-manager.vercel.app",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with React and Vite, featuring a clean design and smooth animations.",
    image:
      "https://i.8upload.com/image/65548815a58b45e5/screenshot-2026-09-06-200707.png",
    github:
      "https://github.com/shubhambatwal01/Portfolio/tree/main/React-Portfolio",
    link: "https://shubz-portfolio.vercel.app",
  },
  {
    title: "Amazaon Clone",
    description:
      "A visually appealing clone of the Amazon homepage, built using only HTML and CSS. This project is perfect for learning front-end web development and understanding how to structure and style complex layouts.",
    image: "https://8upload.com/image/bbfea8c9a20f6319/Amzon-Clone.jpg",
    github: "https://github.com/shubhambatwal01/Amazon-Clone-Application",
  },
  {
    title: "Rock-Paper-Scissors Game",
    description:
      "A simple and interactive Rock Paper Scissors game built with HTML, CSS, and JavaScript. Challenge the computer and see if you can beat its random choices!",
    image: "https://8upload.com/image/9d69c727809a8674/Rock-Paper-Scissors.jpg",
    github: "https://github.com/shubhambatwal01/Rock-Paper-Scissors-Game",
  },
  {
    title: "BMI-Calculator",
    description:
      "A simple and user-friendly Body Mass Index (BMI) Calculator built with React and Vite. This app allows users to quickly calculate their BMI based on height and weight inputs, providing instant feedback on their health status.",
    image: "https://8upload.com/image/b8e5f39b35770258/BMI-Calculator.jpg",
    github: "https://github.com/shubhambatwal01/BMI-Calculator",
  },
  {
    title: "Calculator App",
    description:
      "A modern, responsive calculator web app built with ReactJS and styled using Tailwind CSS. This project replicates the look and feel of a mobile calculator, featuring a clean UI, smooth button interactions, and basic arithmetic operations.",
    image: "https://8upload.com/image/1033ab83888ca174/Calclator.jpg",
    github: "https://github.com/shubhambatwal01/Calculator",
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
                  alt={proj.title}
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
