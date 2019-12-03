import React from 'react';
import profilePicture from '../assets/images/profile_picture_2.jpeg';

const Header = () => (
  <nav className="nav" id="_">
    <div className="nav__container">
      <div className="nav__brand">
        <a href="/">
          <img
            className="nav__brand-image"
            src={profilePicture}
            alt="profile"
          />
        </a>
      </div>
      <ul className="nav__list">
        <a href="#projects">
          <li className="nav__list-item hoverable hover--primary">Projects</li>
        </a>
        <a href="#contributions">
          <li className="nav__list-item hoverable hover--primary">Contributions</li>
        </a>
        <a href="#contact">
          <li className="nav__list-item hoverable hover--primary">Contact</li>
        </a>
      </ul>
    </div>
  </nav>
);

export default Header;
