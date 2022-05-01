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
            <i class="primary fas fa-envelope"></i>
            <span className="method">email: </span>
            <a href="mailto:artur.pietrzak1@outlook.com">
              artur.pietrzak1@outlook.com
            </a>
          </li>
          <li>
            <i class="primary fab fa-twitter"></i>
            <span className="method">twitter: </span>
            <a href="https://twitter.com/">twitter</a>
          </li>
          <li>
            <i class="primary fab fa-linkedin"></i>
            <span className="method">linkedin: </span>
            <a href="https://www.linkedin.com/">linked in</a>
          </li>
        </ul>

        <div className="learn-more">
          <p className="par">Still interested?</p>
          <Link
            to="/more"
            className="btn-forward"
            onClick={this.props.handleClick}
          >
            more about me
          </Link>
        </div>
      </div>
    );
  }
}

export default ContactPage;
