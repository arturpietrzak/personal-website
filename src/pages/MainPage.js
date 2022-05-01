import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProfilePics } from "../utils/ProfiePics";

class MainPage extends Component {
  render() {
    return (
      <div className="page main-page">
        <div className="info">
          <h2 className="subheader">
            Hello, I'm <span className="bold primary">Artur</span>.
          </h2>
          <p className="par">IT student and web developer.</p>
        </div>

        <h2 className="subheader center">
          Here are some <span className="bold primary">projects</span> I've
          created:
        </h2>

        <ul className="projects">
          <div className="project">
            <div className="image-container">
              <img className="technology-img" src="imgs/projects/weather.png" />
            </div>
            <div className="info-container">
              <div>
                <h2 className="project-name">React weather app</h2>
                <p className="project-description">
                  Web app inspired by iOS weather app, provides information
                  about weather at specified location using Visual Crossing's
                  Weather API.
                </p>
                <p className="project-technologies">
                  JavaScript, React, Axios, CSS
                </p>
              </div>
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
              <img src="imgs/projects/racetrackranking.png" />
            </div>
            <div className="info-container">
              <div>
                <h2 className="project-name">Race track ranking</h2>
                <p className="project-description">
                  Webpage project created to provide information about race
                  tracks. Users can create own race tracks, or review existing
                  ones.
                </p>
                <p className="project-technologies">
                  JavaScript, Node, Express, MongoDB, EJS, Sass
                </p>
              </div>
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
              <div>
                <h2 className="project-name">React Sudoku</h2>
                <p className="project-description">
                  Game of Sudoku, with option to generate new boards with
                  different level of difficulty. If the game is too hard, there
                  is built in solver to provide correct numbers.
                </p>
                <p className="project-technologies">
                  JavaScript, Node, React, CSS
                </p>
              </div>
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
              <div>
                <h2 className="project-name">Commutely</h2>
                <p className="project-description">
                  Team project created with mission to educate people on true
                  costs of car transport, both economic and enviromental.
                </p>
                <p className="project-technologies">JS, Bootstrap</p>
              </div>
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
          <p className="par background">Learn more about my skills here:</p>
          <Link
            to="/skills"
            className="btn-forward"
            onClick={this.props.handleClick}
          >
            skills
          </Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
