import React from 'react'
import Hero from '../components/Hero'
import About from './About'
import Experience from '../components/ExperienceSection'
import Skills from '../components/SkillsSection'
import Projects from '../components/ProjectsSection'
import Contact from '../components/ContactSection'

const Home = () => {
  return (
    <>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
    </>
  )
}

export default Home
