import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FadeInSection from './components/FadeInSection';
import './index.css'; 

function App() {
  return (
    <>
      <Header />
      <main>
        <FadeInSection>
          <Hero />
        </FadeInSection>
        <FadeInSection>
          <About />
        </FadeInSection>
        <FadeInSection>
          <Experience />
        </FadeInSection>
        <FadeInSection>
          <Projects />
        </FadeInSection>
        <FadeInSection>
          <Achievements />
        </FadeInSection>
        <FadeInSection>
          <Contact />
        </FadeInSection>
      </main>
      <Footer />
    </>
  );
}

export default App;