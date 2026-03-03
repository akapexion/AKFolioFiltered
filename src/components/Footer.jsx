import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] border-t border-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Asad Khan
          </h2>
          <p className="text-gray-400 leading-7">
            MERN Stack Developer with 2.5+ years of experience building 
            scalable web applications. Associate Faculty focused on mentoring 
            future tech leaders.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#about" className="hover:text-cyan-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-cyan-400 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-cyan-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Connect With Me
          </h3>

          <div className="flex space-x-4 text-2xl text-gray-400">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:asad@example.com"
              className="hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            Karachi, Pakistan
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Asad Khan. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;