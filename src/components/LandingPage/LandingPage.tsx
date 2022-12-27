import ProjectTile from "../ProjectTile/ProjectTile";
import SocialButton from "../SocialButton/SocialButton";
import { ReactComponent as LinkedinLogo } from "../../assets/icons/linkedin.svg";
import { ReactComponent as GithubLogo } from "../../assets/icons/github.svg";
import { ReactComponent as EmailLogo } from "../../assets/icons/email.svg";
import "./LandingPage.scss";

export default function LandingPage() {
  return (
    <div className="landing-page">
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
          <h2 className="about-me__text-container__heading">About me</h2>
          <p className="about-me__text-container__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            inventore nisi minima? Eligendi, error et. Nemo rem blanditiis
            voluptate adipisci nulla sapiente tempore voluptatibus beatae minus,
            vero perspiciatis autem dolorem?
          </p>
        </div>
      </section>
      <section className="porftolio mw">
        <ProjectTile
          description="Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.
            Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio.
            "
          githubUrl="dasdsa"
          imgUrl="/weather.png"
          name="Weather app"
          deploymentUrl=""
          technologies={["dsadsa", "dsadsa", "dsadsa"]}
        />
        <ProjectTile
          description="Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.
            Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio.
            "
          githubUrl="dasdsa"
          imgUrl="/weather.png"
          name="Weather app"
          deploymentUrl=""
          technologies={["dsadsa", "dsadsa", "dsadsa"]}
          inverted
        />
        <ProjectTile
          description="Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.
            Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio.
            "
          githubUrl="dasdsa"
          imgUrl="/weather.png"
          name="Weather app"
          deploymentUrl=""
          technologies={["dsadsa", "dsadsa", "dsadsa"]}
        />
      </section>
      <section className="contact">
        <p className="contact__prompt">Let's work together!</p>
        <button className="contact__get-in-touch-btn">
          <EmailLogo />
          Get in touch
        </button>
      </section>
      <section className="social-info mw">
        <SocialButton icon={<LinkedinLogo />} url="dsadas" />
        <SocialButton icon={<GithubLogo />} url="dsadas" />
      </section>
    </div>
  );
}
