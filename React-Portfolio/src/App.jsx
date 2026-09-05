import { useState, useEffect } from "react";
import Navbar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import Overview from "./components/overview.jsx";
import Skills from "./components/skills.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className={`font-sans ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
      <Overview darkMode={darkMode} setDarkMode={setDarkMode} />
      <Skills darkMode={darkMode} setDarkMode={setDarkMode}></Skills>
      <Projects darkMode={darkMode} setDarkMode={setDarkMode} />
      <Contact darkMode={darkMode} setDarkMode={setDarkMode} />
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default App;
