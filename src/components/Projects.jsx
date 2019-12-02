import React from 'react';
import facebook from '../assets/images/facebook.png';
import todolist from '../assets/images/todolist.png';
import bookstore from '../assets/images/bookstore.png';
import bookstoreAPI from '../assets/images/bookstore-api.png';

export default () => (
  <section>
    <div className="container">
      <h2 className="secondary-header">
      Featured Works
      </h2>
    </div>
    <div className="projects__container">
      <article className='project'>
          <img
            className="project__image"
            src={facebook}
            alt="facebook"
          />
          <h3 className="project__title">
          <a
          className='project-link hover--primary'
          href="https://github.com/ebukaume/the-facebook"
          target="_blank"
          rel="noopener noreferrer"
          >
            The Facebook
          </a>
        </h3>
      </article>
      <article className='project'>
          <img
            className="project__image"
            src={todolist}
            alt="todo list"
          />
          <h3 className="project__title">
          <a
          className='project-link hover--primary'
          href="https://github.com/ebukaume/todo-list"
          target="_blank"
          rel="noopener noreferrer"
          >
            Todo
          </a>
        </h3>
      </article>
      <article className='project'>
          <img
            className="project__image"
            src={bookstore}
            alt="bookstore cms"
          />
          <h3 className="project__title">
          <a
          className='project-link hover--primary'
          href="https://github.com/ebukaume/bookstore-redux"
          target="_blank"
          rel="noopener noreferrer"
          >
            Bookstore CMS
          </a>
        </h3>
      </article>
      <article className='project'>
          <img
            className="project__image"
            src={bookstoreAPI}
            alt="bookstore api"
          />
          <h3 className="project__title">
          <a
          className='project-link hover--primary'
          href="https://github.com/ebukaume/bookstore-api"
          target="_blank"
          rel="noopener noreferrer"
          >
            Bookstore CMS API
          </a>
        </h3>
      </article>
    </div>
  </section>
)
