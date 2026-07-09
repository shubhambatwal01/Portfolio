const Skills = ({ darkMode }) => {
  const skills = [
    {
      id: 1,
      name: "C Language",
      docs: "https://en.wikipedia.org/wiki/C_(programming_language)",
      iconUrl:
        "https://img.icons8.com/?size=100&id=0tuwKqWwti2E&format=png&color=000000",
    },
    {
      id: 2,
      name: "HTML5",
      docs: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
      iconUrl:
        "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    },
    {
      id: 3,
      name: "CSS3 / Tailwind",
      docs: "https://tailwindcss.com/",
      iconUrl:
        "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
    },
    {
      id: 4,
      name: "JavaScript",
      docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      iconUrl:
        "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
    },
    {
      id: 5,
      name: "React.js",
      docs: "https://reactjs.org/",
      iconUrl:
        "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000",
    },

    {
      id: 6,
      name: "Node.js",
      docs: "https://nodejs.org/",
      iconUrl:
        "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
    },
    {
      id: 7,
      name: "Express.js",
      docs: "https://expressjs.com/",
      iconUrl:
        "https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000",
    },
    {
      id: 8,
      name: "REST APIs",
      docs: "https://en.wikipedia.org/wiki/Overview_of_RESTful_API_Description_Languages",
      iconUrl:
        "https://img.icons8.com/?size=100&id=MX92yo3ozHJD&format=png&color=000000",
    },

    {
      id: 9,
      name: "Git",
      docs: "https://git-scm.com/",
      iconUrl:
        "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
    },

    {
      id: 10,
      name: "GitHub",
      docs: "https://docs.github.com/en",
      iconUrl:
        "https://img.icons8.com/?size=100&id=63777&format=png&color=000000",
    },
    {
      id: 11,
      name: "MongoDB",
      docs: "https://www.mongodb.com/",
      iconUrl:
        "https://img.icons8.com/?size=100&id=tBBf3P8HL0vR&format=png&color=000000",
    },
    {
      id: 12,
      name: "Prompt Engineering",
      docs: "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-engineering-guidelines.html",
      iconUrl:
        "https://img.icons8.com/?size=100&id=43988&format=png&color=000000",
    },
    {
      id: 13,
      name: "Python",
      docs: "https://www.python.org/",
      iconUrl:
        "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
    },
  ];

  return (
    <section
      id="skills"
      className={`min-h-screen py-20 transition-all duration-300 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-16 text-center">
          <h2
            id="skills-heading"
            className="text-5xl font-bold mb-4 bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"
          >
            EXPERTISE
          </h2>
          <p
            className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            I am proficient in performing tasks related to all of the listed
            skills below.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <article
              key={s.id}
              className={`group p-6 rounded-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                darkMode
                  ? "border-gray-700 bg-linear-to-br from-gray-900 to-gray-800 hover:border-amber-500/50"
                  : "border-gray-200 bg-linear-to-br from-white to-gray-50 hover:border-amber-500/50"
              }`}
              aria-label={`${s.name} skill card`}
            >
              <div className="flex items-center gap-4">
                <a
                  href={s.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-lg transition-all duration-300 group-hover:scale-110 ${
                    darkMode
                      ? "bg-linear-to-br from-amber-600/20 to-amber-500/10 hover:from-amber-600/40 hover:to-amber-500/20"
                      : "bg-linear-to-br from-amber-400/20 to-amber-300/10 hover:from-amber-400/40 hover:to-amber-300/20"
                  }`}
                  title={`Open ${s.name} docs`}
                >
                  <img
                    src={s.iconUrl}
                    alt={`${s.name} logo`}
                    className="w-8 h-8 object-contain"
                    loading="lazy"
                  />
                </a>

                <div className="min-w-0">
                  <a
                    href={s.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-semibold transition-colors group-hover:text-amber-500 ${
                      darkMode ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    {s.name}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
