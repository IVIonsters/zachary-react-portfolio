import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import AboutSimple from './components/AboutSimple';  // Using the simplified version
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <AboutSimple />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
