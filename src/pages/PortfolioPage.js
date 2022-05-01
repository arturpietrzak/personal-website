import React, { Component } from "react";
import { Link } from "react-router-dom";

class PortfolioPage extends Component {
  render() {
    return (
      <div className="page portfolio-page">
        <div className="info">
          <h2 className="subheader">
            Here are some <span className="bold primary">projects</span> I've
            created:
          </h2>
        </div>

        <ul className="projects">
          <div className="project">
            <div className="image-container">
              <img className="technology-img" src="imgs/projects/weather.png" />
            </div>
            <div className="info-container">
              <h2 className="project-name">React weather app</h2>
              <p className="project-description">
                Web app inspired by iOS weather app, provides information about
                weather at specified location using Visual Crossing's Weather
                API.
              </p>
              <p className="project-technologies">
                JavaScript, React, Axios, CSS
              </p>
              <div className="project-options">
                <a
                  href="https://react-weather-app-artjson.vercel.app/"
                  className="btn-link website"
                >
                  Try it here <i className="fas fa-link"></i>
                </a>
                <a
                  href="https://github.com/ArtJSON/react-weather-app"
                  className="btn-link source"
                >
                  View source code <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="image-container">
              <img
                className="technology-img"
                src="imgs/projects/racetrackranking.png"
              />
            </div>
            <div className="info-container">
              <h2 className="project-name">Race track ranking</h2>
              <p className="project-description">
                Webpage project created to provide information about race
                tracks. Users can create own race tracks, or review existing
                ones.
              </p>
              <p className="project-technologies">
                JavaScript, Node, Express, MongoDB, EJS, Sass
              </p>
              <div className="project-options">
                <a
                  href="https://race-track-ranking.vercel.app/"
                  className="btn-link website"
                >
                  Try it here <i className="fas fa-link"></i>
                </a>
                <a
                  href="https://github.com/ArtJSON/RaceTrackRanking"
                  className="btn-link source"
                >
                  View source code <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="image-container">
              <img className="technology-img" src="imgs/projects/sudoku.png" />
            </div>
            <div className="info-container">
              <h2 className="project-name">React Sudoku</h2>
              <p className="project-description">
                Game of Sudoku, with option to generate new boards with
                different level of difficulty. If the game is too hard, there is
                built in solver to provide correct numbers.
              </p>
              <p className="project-technologies">
                JavaScript, Node, React, CSS
              </p>
              <div className="project-options">
                <a
                  href="https://react-sudoku-dun.vercel.app/"
                  className="btn-link website"
                >
                  Try it here <i className="fas fa-link"></i>
                </a>
                <a
                  href="https://github.com/ArtJSON/react-sudoku"
                  className="btn-link source"
                >
                  View source code <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="image-container">
              <img
                className="technology-img"
                src="imgs/projects/commutely.png"
              />
            </div>
            <div className="info-container">
              <h2 className="project-name">Commutely</h2>
              <p className="project-description">
                Team project created with mission to educate people on true
                costs of car transport, both economic and enviromental.
              </p>
              <p className="project-technologies">JS, Bootstrap</p>
              <div className="project-options">
                <a
                  href="https://commutely-webpage.vercel.app/"
                  className="btn-link  website"
                >
                  Try it here <i className="fas fa-link"></i>
                </a>
                <a
                  href="https://github.com/ArtJSON/commutely-webpage"
                  className="btn-link source"
                >
                  View source code <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </ul>

        <div className="learn-more">
          <p className="par">Contact me here:</p>
          <Link
            to="/contact"
            className="btn-forward"
            onClick={this.props.handleClick}
          >
            contact
          </Link>
        </div>
      </div>
    );
  }
}

export default PortfolioPage;
