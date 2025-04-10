import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects'; 
import { Footer } from './components/Footer';
import Experience from './components/experience/Experience';
import Navigation from './components/Navigation';
import Contact from './components/Contact';

const  App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;