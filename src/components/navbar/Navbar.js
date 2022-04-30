import React, { Component } from "react";
import { MenuItems } from "./MenuItems";

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

  handleExpand() {}

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
                <a className={l.className} href={l.url}>
                  {l.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
