import React, { Component } from "react";
import { Link } from "react-router-dom";

class ContactPage extends Component {
  render() {
    return (
      <div className="page contact-page">
        <div className="info">
          <h2 className="subheader center">
            Feel free to contact me using any method below.
          </h2>
        </div>
        <ul className="contact-methods">
          <li>
            <i className="primary fas fa-envelope"></i>
            <span className="method">email: </span>
            <a href="mailto:artur.pietrzak1@outlook.com">
              artur.pietrzak1@outlook.com
            </a>
          </li>
          {/* <li>
            <i className="primary fab fa-twitter"></i>
            <span className="method">twitter: </span>
            <a href="https://twitter.com/">twitter</a>
          </li> */}
          <li>
            <i className="primary fab fa-linkedin"></i>
            <span className="method">linkedin: </span>
            <a href="https://www.linkedin.com/in/artur-pietrzak-7b53a5239/">
              Artur Pietrzak
            </a>
          </li>
          <li>
            <i className="primary fab fa-github"></i>
            <span className="method">github: </span>
            <a href="https://github.com/ArtJSON">@ArtJSON</a>
          </li>
        </ul>

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

export default ContactPage;
