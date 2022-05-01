import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Technologies } from "../utils/Technologies";

class SkillsPage extends Component {
  render() {
    return (
      <div className="page skills-page">
        <div className="info">
          <h2 className="subheader center">
            Technologies that I've worked with:
          </h2>
        </div>

        <div className="technologies">
          {Technologies.map((t) => {
            return (
              <div key={t.name} className="technology">
                <div className="image-container">
                  <img className="technology-img" src={t.img} alt={t.name} />
                </div>
                <p className="technology-name">{t.name}</p>
              </div>
            );
          })}
        </div>

        <div className="info">
          <h2 className="subheader">
            While studying at university I've also obtained many{" "}
            <span className="primary bold">soft skills</span>, such as:
          </h2>
          <ul className="soft-skills-list">
            <li>Problem solving</li>
            <li>Teamwork</li>
            <li>Project planning</li>
            <li>Presenting</li>
          </ul>
        </div>

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

export default SkillsPage;
