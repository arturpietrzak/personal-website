import React, { Component } from "react";

class MainPage extends Component {
  render() {
    return (
      <div className="page main-page">
        <img src="imgs/profile.png" />
        <div className="info">
          <h2 className="subheader">
            Hello, I'm <span className="bold primary">Artur</span>.
          </h2>
          <p className="par">I'm IT student and web developer.</p>
        </div>
      </div>
    );
  }
}

export default MainPage;
