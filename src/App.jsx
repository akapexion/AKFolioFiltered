import Navbar from "./components/Navbar";
import Experience from "./components/ExperienceSection";
import Projects from "./components/ProjectsSection";
import Contact from "./components/ContactSection";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ThemeProvider from "./context/ThemeContext";
import ThemeSwitcher from "./context/ThemeSwitcher";

function ThemedApp() {
  return (
    <>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0f172a] dark:text-white scroll-smooth transition-colors duration-300">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>

        <ThemeSwitcher/>
      </div>
    </>
  );
}

const App = () => {
  return(
    <ThemeProvider>
      <ThemedApp/>
    </ThemeProvider>
  )
}

export default App;