const Overview = ({ darkMode }) => {
  const experiences = [
    {
      title: "Here's a little Background",
      icon: "👋",
      content:
        "Hi, I am Shubham Batwal, a Full-stack Web Developer. I am proficient in ReactJS and looking for new opportunities to implement and increase my skills in software development.",
    },
    {
      title: "Work Experience",
      icon: "💼",
      duration: "Fresher",
      content:
        "Looking for my first opportunity to work as a Full-stack Web Developer.",
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
      className={`py-20 transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-3 bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            OVERVIEW
          </h2>
          <p
            className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Full-Stack Web Developer
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                darkMode
                  ? "bg-linear-to-br from-gray-800 to-gray-800 border border-gray-700 hover:border-amber-500/50"
                  : "bg-linear-to-br from-gray-50 to-white border border-gray-100 hover:border-amber-500/50"
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {exp.icon}
                </span>
                <h3 className="text-2xl font-bold bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  {exp.title}
                </h3>
              </div>

              {exp.duration && (
                <p
                  className={`mb-3 text-sm font-semibold ${
                    darkMode ? "text-amber-400" : "text-amber-600"
                  }`}
                >
                  {exp.duration}
                </p>
              )}

              {exp.content && (
                <p
                  className={`leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {exp.content}
                </p>
              )}

              {exp.items && (
                <div className="space-y-5 mt-6">
                  {exp.items.map((item, idx) => (
                    <div
                      key={idx}
                      className={`pl-5 border-l-2 ${
                        darkMode ? "border-amber-500/50" : "border-amber-500"
                      }`}
                    >
                      <p className="font-semibold mb-1">{item.degree}</p>
                      <p
                        className={`text-sm font-medium mb-2 ${
                          darkMode ? "text-amber-400" : "text-amber-600"
                        }`}
                      >
                        {item.duration}
                      </p>
                      <p
                        className={`text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {item.institution}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
