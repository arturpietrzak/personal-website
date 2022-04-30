import React, { Component } from "react";
import { Link } from "react-router-dom";

class SkillsPage extends Component {
  render() {
    return (
      <div className="page main-page">
        <div className="info">
          <h2 className="subheader">
            Hello, I'm <span className="bold primary">Artur</span>.
          </h2>
          <p className="par">IT student and web developer.</p>
        </div>
        <img src="imgs/profile.png" />
        <div className="learn-more">
          <p className="par">Learn more about my skills here:</p>
          <Link to="/skills" className="btn-forward" onClick={this.handleClick}>
            skills
          </Link>
        </div>
      </div>
    );
  }
}

export default SkillsPage;
