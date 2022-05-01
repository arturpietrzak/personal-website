import React, { Component } from "react";
import { Link } from "react-router-dom";

class MorePage extends Component {
  render() {
    return (
      <div className="page more-page">
        <section className="section">
          <h2 className="section-header">Education</h2>
          <p className="section-paragraph">
            I am student of{" "}
            <span className="primary">Information Technology</span> at Technical
            University of Lodz (Politechnika Łódzka).{" "}
          </p>
          <p className="section-paragraph">
            The whole degree is held in English.{" "}
          </p>
        </section>
        <section className="section">
          <h2 className="section-header">Sport</h2>
          <p className="section-paragraph">
            My whole life I have been interested in sports. When I was eight i
            started training <span className="primary">martial arts</span> and I
            had trained them for the following 8 years.
          </p>
          <p className="section-paragraph">
            I have also tried many different sports, for example, I used to
            practice tennis, badminton, and swimming.
          </p>
          <p className="section-paragraph">
            Currently, I am in love with{" "}
            <span className="primary">volleyball</span>. Even though I am not
            the best player, I really enjoy the feeling of satisfaction when a
            serve lands just before the end line, and we score a point.
          </p>
        </section>
        <section className="section">
          <h2 className="section-header">Gadgets</h2>
          <p className="section-paragraph">
            I am also a huge fan of gadgets, especially flashlights. There is
            nothing better than a night walk through the forest with a light{" "}
            <span className="primary">more powerful than a car lamp</span> in
            hand. At the moment, my most powerful flashlight has a brightness of
            around 8000 lumens.
          </p>
          <div className="image-container">
            <img src="imgs/flashlight.jpg" alt="flashlight" />
            <p className="image-sub">
              This flashlight can turn pitch black night into bright day.
            </p>
          </div>
        </section>

        <div className="learn-more">
          <p className="par">Missed something?</p>
          <Link to="/" className="btn-forward" onClick={this.props.handleClick}>
            main page
          </Link>
        </div>
      </div>
    );
  }
}

export default MorePage;
