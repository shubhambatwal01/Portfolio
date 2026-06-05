const Home = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`h-screen flex items-center transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center w-fit gap-10 md:gap-20">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="text-amber-500">Shubham Batwal</span>
          </h1>
          <p
            className={`text-lg mb-6 max-w-xl mx-auto md:mx-0 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A Passionate Full-stack Web Developer 🚀 — I build interactive,
            responsive web applications with clean design and strong
            performance.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <a href="mailto:shubhambatwal14@gmail.com">
              <img
                src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
                alt="Gmail"
                className="w-10 h-10 hover:scale-110 transition-transform"
              />
            </a>
            <a href="https://www.linkedin.com/in/shubhambatwal03/">
              <img
                src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                alt="Linkedin"
                className="w-10 h-10 hover:scale-110 transition-transform"
              />
            </a>

            <a href="https://github.com/shubhambatwal03/">
              <img
                src="https://img.icons8.com/?size=100&id=63777&format=png&color=000000"
                alt="Github"
                className="w-10 h-10 hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="shrink-0">
          <img
            src="https://i.8upload.com/image/65efb34ea7116762/shubzphoto.png"
            alt="Shubham Batwal"
            loading="lazy"
            className={`w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg transition-transform transform hover:scale-105 ${
              darkMode ? "ring-4 ring-amber-600" : "ring-4 ring-amber-500"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
