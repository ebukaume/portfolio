import React from 'react';
import './App.css';
import './assets/stylesheet/main.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import More from './components/More';
import Footer from './components/Footer';
import Top from './components/Top';

const App = () => (
  <div className="app__container">
    <Header />
    <About />
    <Projects />
    <More />
    <Footer />
    <Top />
  </div>
);

export default App;
