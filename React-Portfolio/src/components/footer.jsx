const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`border-t py-6 transition-colors duration-500 ${
        darkMode
          ? "border-white/10 bg-[#060912] text-slate-400"
          : "border-slate-200 bg-white text-slate-500"
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center text-sm sm:px-6 md:flex-row md:text-left lg:px-8">
        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
        <p>
          Designed & Developed by 👉🏻{" "}
          <a
            href="https://shubz-portfolio.vercel.app/"
            className="font-bold bg-linear-to-r from-indigo-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent transition-opacity duration-300 hover:opacity-75"
          >
            ゛Shubham Batwal ˎˊ˗
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
