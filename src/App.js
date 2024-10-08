import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import WorkEx from './components/WorkEx';
import BreakIntoTech from './components/BreakIntoTech';
import Contact from './components/Contact';
// import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <BreakIntoTech />
      <WorkEx />
      {/* <Projects /> */}
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
