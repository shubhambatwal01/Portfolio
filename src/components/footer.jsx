const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`py-1 transition-all duration-300 border-t ${
        darkMode
          ? "bg-gray-900 text-white border-gray-800"
          : "bg-white text-gray-900 border-gray-100"
      }`}
    >
      <div className="mx-auto max-w-4xl px-6 py-3">
        <div className="container mx-auto px-6 text-center flex flex-col items-center gap-6 justify-between  text-sm text-slate-400 md:flex-row">
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
          <p>
            Designed & Developed by 👉🏻
            <a
              href="https://shubz-portfolio.vercel.app/"
              className="bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent font-bold"
            >
              ゛Shubham Batwal ˎˊ˗
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
