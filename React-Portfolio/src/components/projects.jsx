const projects = [
  {
    title: "SmartStay",
    description:
      "SmartStay is a full-stack web application to browse rental homes, manage favorites, enable secure authentication, and take online payments using Razorpay.",
    image:
      "https://i.8upload.com/image/f485e4c60837f1b8/screenshot-2026-07-08-165605.png",
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
    image: "https://8upload.com/image/1033ab83888ca174/Calclator.jpg", // Add your project images
    github: "https://github.com/shubhambatwal01/Calculator", // Add your project links
  },
];

const Projects = ({ darkMode }) => {
  return (
    <section
      id="projects"
      className={`min-h-screen py-20 transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-4 bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            PROJECTS
          </h2>
          <p
            className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Projects upon which I have worked on.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              className={`group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border ${
                darkMode
                  ? "bg-linear-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-amber-500/50"
                  : "bg-linear-to-br from-white to-gray-50 border-gray-100 hover:border-amber-500/50"
              }`}
            >
              {proj.image && (
                <div className="mb-0 overflow-hidden h-48">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-500 transition-colors">
                  {proj.title}
                </h3>
                <p
                  className={`mb-6 leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {proj.description}
                </p>
                <div className="flex gap-4 flex-wrap">
                  {proj.github && (
                    <a
                      href={proj.github}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        darkMode
                          ? "bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 border border-blue-600/50"
                          : "bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200"
                      }`}
                    >
                      GitHub Link
                    </a>
                  )}
                  {proj.link && (
                    <a
                      href={proj.link}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        darkMode
                          ? "bg-green-600/20 hover:bg-green-600/40 text-green-300 border border-green-600/50"
                          : "bg-green-50 hover:bg-green-100 text-green-700 border border-green-200"
                      }`}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
