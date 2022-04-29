import React, { Component } from "react";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.hadnleClick = this.hadnleClick.bind(this);
  }

  hadnleClick() {
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
            onClick={this.hadnleClick}
            className={this.state.expanded ? "fas fa-bars" : "fas fa-times"}
          ></i>
        </div>
        <ul className="navbar-options">
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
