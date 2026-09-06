const Overview = ({ darkMode }) => {
  const experiences = [
    {
      title: "Here's a little Background",
      icon: "👋",
      content:
        "Hi, I’m Shubham Batwal, a passionate Full-Stack Web Developer with hands-on experience in React.js, Node.js, Express.js, and MongoDB. I enjoy building responsive, scalable, and user-focused web applications and continuously improving my problem-solving and development skills.",
    },
    {
      title: "Work Experience",
      icon: "💼",
      duration: "Fresher",
      content:
        "I’m currently seeking a opportunities where I can contribute to real-world software projects, expand my technical expertise, and grow as a professional software developer.",
        items: [
        {
          duration: "NOV 2024 - DEC 2024",
          degree: "Frontend Development Intern",
          institution:
            "Cognifyz technologies, Nagpur, (Remote)",
        },
      ],
    },
    {
      title: "Education",
      icon: "🎓",
      items: [
        {
          duration: "2022 - 2025",
          degree: "B.Sc. Computer Science",
          institution:
            "G.M.D. Arts Commerce Science College Sinnar, Nashik (Under Savitribai Phule Pune University)",
        },
        {
          duration: "2025 - 2027",
          degree: "M.Sc. Computer Science",
          institution: "PES's Modern Arts Commerce Science College Pune",
        },
      ],
    },
  ];

  return (
    <section
      id="overview"
      className={`relative overflow-hidden py-24 transition-colors duration-500 ${
        darkMode ? "bg-[#0a0f1c] text-white" : "bg-white text-slate-950"
      }`}
    >
      <div
        className={`pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent ${darkMode ? "via-cyan-400/25" : "via-indigo-300/70"} to-transparent`}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            OVER
            <span className="bg-linear-to-r from-indigo-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              VIEW
            </span>
          </h2>
          <p
            className={`mt-4 text-base sm:text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            Full-Stack Web Developer
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3 perspective-[1300px]">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className={`group relative overflow-hidden rounded-3xl border p-6 transition-all duration-700 transform-3d hover:transform-[rotateX(4deg)_rotateY(-4deg)_translateY(-10px)] sm:p-7 ${
                darkMode
                  ? "border-white/10 bg-white/4.5 shadow-[0_24px_60px_rgba(2,6,23,0.36)] hover:border-cyan-400/25 hover:shadow-[0_30px_70px_rgba(8,145,178,0.14)]"
                  : "border-slate-200/80 bg-white shadow-[0_20px_55px_rgba(15,23,42,0.08)] hover:border-indigo-200 hover:shadow-[0_30px_70px_rgba(79,70,229,0.14)]"
              }`}
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-linear-to-br from-indigo-500/15 to-cyan-400/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />
              <div className="relative transition-transform duration-700 group-hover:transform-[translateZ(28px)]">
                <div className="mb-5 flex items-center gap-4">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl shadow-inner ${darkMode ? "bg-white/6 ring-1 ring-white/10" : "bg-indigo-50 ring-1 ring-indigo-100"}`}
                  >
                    {exp.icon}
                  </span>
                  <h3 className="text-xl font-bold leading-snug">
                    {exp.title}
                  </h3>
                </div>

                {exp.duration && (
                  <p
                    className={`mb-3 text-sm font-semibold ${darkMode ? "text-cyan-300" : "text-indigo-600"}`}
                  >
                    {exp.duration}
                  </p>
                )}

                {exp.content && (
                  <p
                    className={`leading-7 ${darkMode ? "text-slate-300" : "text-slate-600"}`}
                  >
                    {exp.content}
                  </p>
                )}

                {exp.items && (
                  <div className="mt-5 space-y-5">
                    {exp.items.map((item, idx) => (
                      <div key={idx} className="relative pl-5">
                        <span className="absolute left-0.75 top-1.5 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
                        <p className="font-semibold">{item.degree}</p>
                        <p
                          className={`mt-1 text-sm font-medium ${darkMode ? "text-cyan-300" : "text-indigo-600"}`}
                        >
                          {item.duration}
                        </p>
                        <p
                          className={`mt-2 text-sm leading-6 ${darkMode ? "text-slate-400" : "text-slate-500"}`}
                        >
                          {item.institution}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
