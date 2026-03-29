import React, { useState, useEffect, useContext } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  const [currentTime, setCurrentTime] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["Projects", "Experience", "Contact"];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === `/${path.toLowerCase()}`;
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-xl border-b bg-white/90 text-slate-900 dark:bg-slate-950/93 dark:text-white ${
        scrolled
          ? "border-slate-200 dark:border-blue-500/30 shadow-md dark:shadow-xl"
          : "border-transparent dark:border-blue-500/10"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-17 px-6 h-[68px]">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-800 to-blue-500 flex items-center justify-center text-white font-extrabold text-xs shadow-lg group-hover:scale-105 transition-transform duration-200">
            AK
          </div>
          <span className="hidden sm:block font-bold tracking-widest uppercase text-sm">
            Asad Khan
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            to="/"
            className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
              isActive("/")
                ? "text-white bg-blue-500/20 border border-blue-500/30"
                : "text-gray-400 hover:text-white hover:bg-blue-500/10"
            }`}
          >
            Home
          </Link>

          {navLinks.map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                isActive(item)
                  ? "text-white bg-blue-500/20 border border-blue-500/30"
                  : "text-gray-400 hover:text-white hover:bg-blue-500/10"
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">

          {/* Timezone */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-slate-900/80">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="hidden sm:block text-xs tracking-widest uppercase text-gray-500">
              Karachi
            </span>
            <span className="text-xs text-cyan-400 font-mono border-l border-blue-500/20 pl-2">
              {currentTime}
            </span>
          </div>

          {/* CTA */}
          <button className="hidden md:block text-xs font-bold tracking-widest uppercase px-5 py-2 border border-blue-400/40 rounded-full text-blue-400 hover:text-white hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200">
            Let's Talk
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg border border-blue-500/20 bg-slate-900 text-gray-400 hover:text-white transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-950/96 backdrop-blur-xl border-t border-blue-500/20 px-6 pb-6">
          <div className="mt-4 flex flex-col">
            {["Home", "Projects", "Experience", "Contact"].map((item) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const active = isActive(item === "Home" ? "/" : item);
              return (
                <Link
                  key={item}
                  to={path}
                  className={`py-4 border-b border-blue-500/10 transition-colors duration-200 ${
                    active ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    {active && (
                      <span className="w-1 h-1 rounded-full bg-blue-400 inline-block"></span>
                    )}
                    {item}
                  </span>
                </Link>
              );
            })}

            <button className="mt-6 w-full py-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-bold tracking-widest uppercase shadow-lg hover:shadow-blue-500/40 transition-shadow duration-200">
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;