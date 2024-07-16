import './App.scss';
import React from 'react';
import Navbar from './components/navbar/navbar.jsx';
import Hero from './components/hero/hero.jsx';
import Parallax from './components/parallax/parallax.jsx';
import Retro from './components/parallax/parallax2.jsx';
import Service from './components/Services/service.jsx';
import Projects from './components/projects/projects.jsx';
import Contact from './components/contactPage/contact.jsx';
import Cursor from './components/contactPage/cursor.jsx';
import Inspire from './components/inspire/Inspire.jsx';

function App() {

  return(
    <div>
      <Cursor />
      <section id = "Home" >
        <Navbar />
        <Hero/>
      </section>
      <section >
        <Parallax />
      </section>
      <section id = 'Serivces'>
        <Service />
      </section>
      <section id = 'Projects'><Retro /></section>
      <Projects />
      <section id = 'inspire'>
        <Inspire />
      </section>
      <section id = 'Contact'>
        <Contact />
      </section>
    </div>
  ) 
}

export default App;