const projects = [
  {
    title: "SmartStay - Hotel Booking Website",
    description:
      "Developed a full-stack accommodation booking platform with user, host, and admin roles, featuring property listings, secure authentication, booking management, and integrated payment gateway for seamless transactions.",
    image:
      "https://i.8upload.com/image/7c3c66a62bce3fd7/screenshot-2026-05-27-221026.png",
    github: "https://github.com/shubhambatwal01/SmartStay",
    link: "https://smartstay-prm1.onrender.com/",
  },
  {
    title: "Calculator App",
    description:
      "A modern, responsive calculator web app built with ReactJS and styled using Tailwind CSS. This project replicates the look and feel of a mobile calculator, featuring a clean UI, smooth button interactions, and basic arithmetic operations.",
    image: "https://8upload.com/image/1033ab83888ca174/Calclator.jpg", // Add your project images
    github: "https://github.com/shubhambatwal01/Calculator", // Add your project links
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
    title: "To-Do List",
    description:
      "A simple and modern Todo application built with ReactJS. This version uses ReactJS Context and the `useReducer` hook for state management, allowing users to add and delete todo items with due dates.",
    image: "https://8upload.com/image/96ed4a95460893ae/To-Do-List.jpg",
    github: "https://github.com/shubhambatwal01/To-Do-List",
  },
  {
    title: "BMI-Calculator",
    description:
      "A simple and user-friendly Body Mass Index (BMI) Calculator built with React and Vite. This app allows users to quickly calculate their BMI based on height and weight inputs, providing instant feedback on their health status.",
    image: "https://8upload.com/image/b8e5f39b35770258/BMI-Calculator.jpg",
    github: "https://github.com/shubhambatwal01/BMI-Calculator",
  },
];

const Projects = ({ darkMode }) => {
  return (
    <section
      id="projects"
      className={`min-h-screen py-20 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-amber-500 text-5xl font-bold mb-1.5 text-center">
          PROJECTS
        </h2>
        <h5 className="text-center mb-12">
          Projects upon which I have worked on.
        </h5>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              className={`group p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
              }`}
            >
              {proj.image && (
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-3">{proj.title}</h3>
              <p
                className={`mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {proj.description}
              </p>
              <div className="flex space-x-4">
                {proj.github && (
                  <a
                    href={proj.github}
                    className="text-blue-500 hover:border-2 hover:border-blue-500 px-3 py-1 rounded-md transition-colors duration-300"
                  >
                    GitHub Link
                  </a>
                )}
                {proj.link && (
                  <a
                    href={proj.link}
                    className="text-green-500 hover:border-2 hover:border-green-500 px-3 py-1 rounded-md transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
