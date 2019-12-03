import React from 'react';
import microverseLogo from '../assets/images/microverse.jpeg';

const About = () => (
  <section className="hero">
    <div className="container">
      <h1 className="hero__title">
        I&apos;m
        <a
          href="https://www.linkedin.com/in/ebukaume"
          className="hero__link hover--secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;Ebuka Umeokonkwo
        </a>
        , a
        <a
          href="http://github.com/ebukaume"
          className="hero__link hover--secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;full-stack developer&nbsp;
        </a>
        living in Lagos, Nigeria and currently a part-time TSE at Microverse.
      </h1>
    </div>
    <div className="container">
      <div className="hero__current">
        <div className="employer">
          <h3 className="employer__label">
            currently:
          </h3>
          <a
            href="https://www.microverse.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="employer__logo"
              src={microverseLogo}
              alt="microverse"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
