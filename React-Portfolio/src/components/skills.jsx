import { Code2, Globe, Server, Database, Wrench, Sparkles } from "lucide-react";
import {
  SiC,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BrainCircuit } from "lucide-react";

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
          docs: "https://en.wikipedia.org/wiki/C_(programming_language)",
        },
        {
          name: "JavaScript",
          Icon: SiJavascript,
          color: "#F7DF1E",
          docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
          name: "Python",
          Icon: SiPython,
          color: "#3776AB",
          docs: "https://www.python.org/",
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
          docs: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
        },
        {
          name: "CSS3",
          Icon: SiCss,
          color: "#1572B6",
          docs: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
          name: "Tailwind CSS",
          Icon: SiTailwindcss,
          color: "#38BDF8",
          docs: "https://tailwindcss.com/",
        },
        {
          name: "React.js",
          Icon: SiReact,
          color: "#61DAFB",
          docs: "https://reactjs.org/",
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
          docs: "https://nodejs.org/",
        },
        {
          name: "Express.js",
          Icon: SiExpress,
          color: darkMode ? "#FFFFFF" : "#000000",
          docs: "https://expressjs.com/",
        },
        {
          name: "REST APIs",
          Icon: TbApi,
          color: "#F59E0B",
          docs: "https://en.wikipedia.org/wiki/Overview_of_RESTful_API_Description_Languages",
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
          docs: "https://www.mongodb.com/",
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
          docs: "https://git-scm.com/",
        },
        {
          name: "GitHub",
          Icon: SiGithub,
          color: darkMode ? "#FFFFFF" : "#181717",
          docs: "https://docs.github.com/en",
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
          docs: "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-engineering-guidelines.html",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 transition-all duration-300 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-16 text-center">
          <h2
            id="skills-heading"
            className="text-4xl sm:text-5xl font-bold mb-5 bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"
          >
            EXPERTISE
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I am proficient in performing tasks related to all of the listed
            skills below.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const CategoryIcon = cat.icon;
            return (
              <article
                key={cat.title}
                className={`group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  darkMode
                    ? "border-gray-700 bg-linear-to-br from-gray-900 to-gray-800 hover:border-amber-500/50 hover:shadow-amber-500/5"
                    : "border-gray-200 bg-white hover:border-amber-500/50 hover:shadow-amber-500/10"
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className={`inline-flex items-center justify-center w-11 h-11 rounded-xl shrink-0 ${
                      darkMode
                        ? "bg-linear-to-br from-amber-500/20 to-amber-600/10 text-amber-400"
                        : "bg-linear-to-br from-amber-400/20 to-amber-500/10 text-amber-600"
                    }`}
                  >
                    <CategoryIcon size={22} strokeWidth={2} />
                  </span>
                  <h3 className="text-lg font-bold">{cat.title}</h3>
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
                        className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                          darkMode
                            ? "border-gray-700 bg-gray-800/60 text-gray-200 hover:border-amber-500/60 hover:bg-gray-800"
                            : "border-gray-200 bg-gray-50 text-gray-700 hover:border-amber-500/60 hover:bg-white hover:shadow-sm"
                        }`}
                      >
                        <ItemIcon
                          size={16}
                          style={{ color: item.color }}
                          className="shrink-0"
                        />
                        {item.name}
                      </a>
                    );
                  })}
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
