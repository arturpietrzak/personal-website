import React, { Component } from "react";
import { Link } from "react-router-dom";

class MorePage extends Component {
  render() {
    return (
      <div className="page more-page">
        <section className="section">
          <h2 className="section-heading">Heading</h2>
          <p className="seciton-paragraph">Bunch of awesome content. </p>
        </section>

        <div className="learn-more">
          <p className="par">Missed something?</p>
          <Link to="/" className="btn-forward" onClick={this.props.handleClick}>
            go back to main page
          </Link>
        </div>
      </div>
    );
  }
}

export default MorePage;
