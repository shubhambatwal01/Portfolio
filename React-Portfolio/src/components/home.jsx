const Home = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-20 transition-all duration-300 ${
        darkMode
          ? "bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-linear-to-br from-white via-gray-50 to-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6 flex flex-col  items-center justify-center">
        <div className="shrink-0 mb-10">
          <div className="relative">
            <div
              className={`absolute inset-0 rounded-full blur-2xl opacity-50 ${
                darkMode
                  ? "bg-linear-to-r from-amber-600 to-orange-600"
                  : "bg-linear-to-r from-amber-400 to-orange-400"
              }`}
            />
            <img
              src="https://i.8upload.com/image/65efb34ea7116762/shubzphoto.png"
              alt="Shubham Batwal"
              loading="lazy"
              className={`relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl transition-transform duration-300 hover:scale-105 ${
                darkMode ? "ring-4 ring-amber-600" : "ring-4 ring-amber-500"
              }`}
            />
          </div>
        </div>

        <div className="flex-1 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm&nbsp;
            <span className="bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Shubham Batwal
            </span>
          </h1>
          <p
            className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto  leading-relaxed font-light ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A Passionate Full-stack Web Developer 🚀 — I build interactive,
            responsive web applications with clean design and strong
            performance.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="mailto:shubhambatwal14@gmail.com"
              className={`group p-3 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-linear-to-r hover:from-amber-500 hover:to-amber-600"
                  : "bg-gray-200 hover:bg-linear-to-r hover:from-amber-500 hover:to-amber-600"
              }`}
              title="Email"
            >
              <img
                src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
                alt="Gmail"
                className="w-6 h-6 transition-transform group-hover:scale-110"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/shubhambatwal01/"
              className={`group p-3 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-linear-to-r hover:from-amber-500 hover:to-amber-600"
                  : "bg-gray-200 hover:bg-linear-to-r hover:from-amber-500 hover:to-amber-600"
              }`}
              title="LinkedIn"
            >
              <img
                src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                alt="Linkedin"
                className="w-6 h-6 transition-transform group-hover:scale-110"
              />
            </a>
            <a
              href="https://github.com/shubhambatwal01/"
              className={`group p-3 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-linear-to-r hover:from-amber-500 hover:to-amber-600"
                  : "bg-gray-200 hover:bg-linear-to-r hover:from-amber-500 hover:to-amber-600"
              }`}
              title="GitHub"
            >
              <img
                src="https://img.icons8.com/?size=100&id=63777&format=png&color=000000"
                alt="Github"
                className="w-6 h-6 transition-transform group-hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
