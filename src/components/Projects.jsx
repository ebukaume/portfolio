import React from 'react';
import facebook from '../assets/images/facebook.png';
import todolist from '../assets/images/todolist.png';
import bookstore from '../assets/images/bookstore.png';
import bookstoreAPI from '../assets/images/bookstore-api.png';
import portfolioPage from '../assets/images/portfolio.png';
import videoRentalAPI from '../assets/images/video-rental-api.png';

const Projects = () => (
  <section id="projects">
    <div className="container">
      <h2 className="secondary-header">
      Featured Works
      </h2>
    </div>
    <div className="projects__container">
      <article className="project">
        <img
          className="project__image"
          src={facebook}
          alt="facebook"
        />
        <div className="project__links">
          <div className="project__title">
            <a
              className="project-link hover--primary"
              href="https://github.com/ebukaume/the-facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Facebook (Rails)
            </a>
          </div>
          <div>
            <a
              className="project-link hover--primary"
              href="https://the-facebook-rails.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </article>
      <article className="project">
        <img
          className="project__image"
          src={todolist}
          alt="todo list"
        />
        <div className="project__links">
          <div className="project__title">
            <a
              className="project-link hover--primary"
              href="https://github.com/ebukaume/todo-list"
              target="_blank"
              rel="noopener noreferrer"
            >
              ToDo List (JavaScript)
            </a>
          </div>
          <div>
            <a
              className="project-link hover--primary"
              href="https://raw.githack.com/ebukaume/todo-list/master/dist/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </article>
      <article className="project">
        <img
          className="project__image"
          src={bookstore}
          alt="bookstore cms"
        />
        <div className="project__links">
          <div className="project__title">
            <a
              className="project-link hover--primary"
              href="https://github.com/YemreAybey/bookstore-redux"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bookstore CMS (React)
            </a>
          </div>
          <div>
            <a
              className="project-link hover--primary"
              href="https://bookstore-react-redux.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </article>
      <article className="project">
        <img
          className="project__image"
          src={bookstoreAPI}
          alt="bookstore api"
        />
        <div className="project__links">
          <div className="project__title">
            <a
              className="project-link hover--primary"
              href="https://github.com/ebukaume/bookstore-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bookstore CMS API (Rails)
            </a>
          </div>
          <div>
            <a
              className="project-link hover--primary"
              href="http://bookstore-redux-api.herokuapp.com/api/v1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </article>
      <article className="project">
        <img
          className="project__image"
          src={videoRentalAPI}
          alt="video rental api"
        />
        <div className="project__links">
          <div className="project__title">
            <a
              className="project-link hover--primary"
              href="https://github.com/ebukaume/vidly-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              Video Rental App (Node.js)
            </a>
          </div>
          <div>
            <a
              className="project-link hover--primary"
              href="https://github.com/ebukaume/vidly-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </article>
      <article className="project">
        <img
          className="project__image"
          src={portfolioPage}
          alt="portfolio page"
        />
        <div className="project__links">
          <div className="project__title">
            <a
              className="project-link hover--primary"
              href="https://github.com/ebukaume/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio Page (React)
            </a>
          </div>
          <div>
            <a
              className="project-link hover--primary"
              href="https://ebukaume.github.io/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
);

export default Projects;
