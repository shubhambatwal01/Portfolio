const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`py-1 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-6 text-center flex flex-col items-center mt-2">
        <div className="flex flex-row gap-4 mb-1">
          <a href="mailto:shubhambatwal14@gmail.com">
            <img
              src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
              alt="Gmail"
              className="w-7 h-7 hover:scale-110 transition-transform"
            />
          </a>
          <a href="https://www.linkedin.com/in/shubhambatwal03/">
            <img
              src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
              alt="Linkedin"
              className="w-7 h-7 hover:scale-110 transition-transform"
            />
          </a>

          <a href="https://github.com/shubhambatwal03/">
            <img
              src="https://freepnglogo.com/images/all_img/github-invertocat-logo-f0e0.png"
              alt="Github"
              className="w-7 h-7 hover:scale-110 transition-transform"
            />
          </a>
        </div>
        <p className={`mb-1.5 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          &copy;2026 <span className="text-amber-500 font-semibold">SHUBHAM BATWAL</span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
