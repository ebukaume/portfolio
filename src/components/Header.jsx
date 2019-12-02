import React from 'react'
import profilePicture from '../assets/images/profile_picture.jpeg';

export default () => (
  <nav className='nav'>
    <div className='nav__container'>
      <div className='nav__brand'>
        <img
          className='nav__brand-image hoverable'
          src={profilePicture}
          alt='profile'
        />
      </div>
      <ul className='nav__list'>
        <li className="nav__list-item hoverable hover--primary">Projects</li>
        <li className="nav__list-item hoverable hover--primary">Contributions</li>
        <li className="nav__list-item hoverable hover--primary">Contact</li>
      </ul>
    </div>
  </nav>
)
