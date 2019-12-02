import React, { Component } from 'react';
import './App.css';
import './assets/stylesheet/main.css';
import appData from './assets/data/owner_information';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

export default class App extends Component {
  state = appData;

  render() {
    return (
      <div className='app__container'>
        <Header />
        <About />
        <Projects />
      </div>
    )
  }
}
