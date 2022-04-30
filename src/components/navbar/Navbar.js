import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-main">
          <h1 className="navbar-title">Artur Pietrzak</h1>
          <i
            onClick={this.handleClick}
            className={this.state.expanded ? "fas fa-times" : " fas fa-bars"}
          ></i>
        </div>
        <ul
          className={`navbar-options ${
            this.state.expanded ? "navbar-options-expand" : ""
          }`}
        >
          {MenuItems.map((l, index) => {
            return (
              <li key={index}>
                <Link to={l.url} onClick={this.handleClick}>
                  {l.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
