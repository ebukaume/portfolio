import React from 'react';
import cv from '../assets/docs/UMEOKONKWO EBUKA\'S CV.pdf';
import github from '../assets/logos/github.svg';
import linkedin from '../assets/logos/linkedin.svg';
import twitter from '../assets/logos/twitter.svg';
import gmail from '../assets/logos/gmail.svg';
import stackoverflow from '../assets/logos/stackoverflow.svg';

export default () => (
  <footer className='footer' id='contact'>
    <div className="container">
      <h2 className="secondary-header">
        Have a position for me?&nbsp;
        <a 
          className='cv__link hover--secondary'
          href={cv}
          target="_blank" 
          rel="noopener noreferrer">
            Have a look at my CV
          </a>
      </h2>
    </div>
      <div className="social">
        <a
          href="https://github.com/ebukaume"
          target="_blank"
          rel="noopener noreferrer">
            <img
              className='social__item'
              src={github}
              alt="github"
            />
        </a>
        <a
          href="https://linkedin.com/in/ebukaume"
          target="_blank"
          rel="noopener noreferrer">
            <img
              className='social__item'
              src={linkedin}
              alt="linkedin"
            />
        </a>
        <a
          href="https://twitter.com/ebukaume"
          target="_blank"
          rel="noopener noreferrer">
            <img
              className='social__item'
              src={twitter}
              alt="twitter"
            />
        </a>
        <a
          href="https://stackoverflow.com/users/11265420/echelon"
          target="_blank"
          rel="noopener noreferrer">
            <img
              className='social__item'
              src={stackoverflow}
              alt="stackoverflow"
            />
        </a>
        <a
          href="mailto:ebukaume@gmail.com"
          target="_blank"
          rel="noopener noreferrer">
            <img
              className='social__item'
              src={gmail}
              alt="gmail"
            />
        </a>
      </div>
  </footer>
)
