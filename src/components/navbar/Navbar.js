import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-main">
          <h1 className="navbar-title">Artur Pietrzak</h1>
          <i
            onClick={this.props.handleClick}
            className={this.props.expanded ? "fas fa-times" : " fas fa-bars"}
          ></i>
        </div>
        <ul
          className={`navbar-options ${
            this.props.expanded ? "navbar-options-expand" : ""
          }`}
        >
          {MenuItems.map((l, index) => {
            return (
              <li key={index}>
                <Link to={l.url} onClick={this.props.handleClick}>
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
