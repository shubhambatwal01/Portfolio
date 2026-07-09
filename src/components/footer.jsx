const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`py-1 transition-all duration-300 border-t ${
        darkMode
          ? "bg-gray-900 text-white border-gray-800"
          : "bg-white text-gray-900 border-gray-100"
      }`}
    >
      <div className="container mx-auto px-6 text-center flex flex-col items-center gap-6">
        {/* <div className="flex flex-row gap-4 justify-center">
          <a 
            href="mailto:shubhambatwal14@gmail.com"
            className={`p-3 rounded-lg transition-all duration-300 group ${
              darkMode
                ? "hover:bg-linear-to-r hover:from-amber-500 hover:to-amber-600 bg-gray-800"
                : "hover:bg-linear-to-r hover:from-amber-500 hover:to-amber-600 bg-gray-100"
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
            className={`p-3 rounded-lg transition-all duration-300 group ${
              darkMode
                ? "hover:bg-linear-to-r hover:from-amber-500 hover:to-amber-600 bg-gray-800"
                : "hover:bg-linear-to-r hover:from-amber-500 hover:to-amber-600 bg-gray-100"
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
            className={`p-3 rounded-lg transition-all duration-300 group ${
              darkMode
                ? "hover:bg-linear-to-r hover:from-amber-500 hover:to-amber-600 bg-gray-800"
                : "hover:bg-linear-to-r hover:from-amber-500 hover:to-amber-600 bg-gray-100"
            }`}
            title="GitHub"
          >
            <img
              src="https://img.icons8.com/?size=100&id=63777&format=png&color=000000"
              alt="Github"
              className="w-6 h-6 transition-transform group-hover:scale-110"
            />
          </a>
        </div> */}
        <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          &copy; 2026{" "}
          <span className="bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent font-bold">
            SHUBHAM BATWAL
          </span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
