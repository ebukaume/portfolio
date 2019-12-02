import React from 'react';

export default () => (
  <section className='more'>
    <div className="container">
      <h2
        className="secondary-header more__title"
      >
        Contributions
      </h2>
    </div>
    <div className="more__list">
      <div className="hover--item">
        <a 
          className="more__item "
          href='https://link.medium.com/a9Ptmvbq61'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h3 className="more__item--title">
            Understanding Recursion - with Practical Examples
          </h3>
          <div className="more__item--category">
            Article
          </div>
          <div className="more__item--date">
            2019
          </div>
        </a>
      </div>
      <div className="hover--item">
        <a 
          className="more__item "
          href='https://github.com/TheOdinProject/curriculum/pull/11529'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h3 className="more__item--title">
            The Odin Project
          </h3>
          <div className="more__item--category">
            Open Source Contribution
          </div>
          <div className="more__item--date">
            2019
          </div>
        </a>
      </div>
      <div className="hover--item">
        <a 
          className="more__item "
          href='https://github.com/microverseinc/linters-config/pull/17'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h3 className="more__item--title">
            Microverse Inc.
          </h3>
          <div className="more__item--category">
            Open Source Contribution
          </div>
          <div className="more__item--date">
            2019
          </div>
        </a>
      </div>
      <div className="hover--item">
        <a 
          className="more__item "
          href='https://github.com/microverseinc/linters-config/pull/19'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h3 className="more__item--title">
            Microverse Inc.
          </h3>
          <div className="more__item--category">
            Open Source Contribution
          </div>
          <div className="more__item--date">
            2019
          </div>
        </a>
      </div>
    </div>
  </section>
)
