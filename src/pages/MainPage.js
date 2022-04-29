import React, { Component } from "react";

import Navbar from "../components/navbar/Navbar";

class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <Navbar />
        <div className="sections" onWheel={(e) => this.handleWheel(e)}>
          <section>
            <h1>Short intro</h1>
          </section>
          <section>
            <h1>Skills</h1>
          </section>
          <section>
            <h1>Projects</h1>
          </section>
          <section>
            <h1>More about me</h1>
          </section>
          <section>
            <h1>Contact</h1>
          </section>
        </div>
      </div>
    );
  }
}

export default MainPage;
