import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__background" />
        <div className="header__content mw">
          <div className="header__content__text">
            <h1>Artur Pietrzak</h1>
            <p>Frontend developer</p>
          </div>
          <div className="header__content__preview-container">
            <div className="header__content__preview-container__desktop-preview" />
            <div className="header__content__preview-container__mobile-preview" />
          </div>
        </div>
      </header>
      <section className="about-me mw">
        <img className="about-me__image" src="/profilepic.jpg" />
        <div className="about-me__text-container">
          <p className="about-me__text-container__heading">About me</p>
          <p className="about-me__text-container__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            inventore nisi minima? Eligendi, error et. Nemo rem blanditiis
            voluptate adipisci nulla sapiente tempore voluptatibus beatae minus,
            vero perspiciatis autem dolorem?
          </p>
        </div>
      </section>
      <section className="technologies"></section>
    </div>
  );
}

export default App;
