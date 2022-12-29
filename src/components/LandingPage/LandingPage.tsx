import ProjectTile from "../ProjectTile/ProjectTile";
import SocialButton from "../SocialButton/SocialButton";
import { ReactComponent as LinkedinLogo } from "../../assets/icons/linkedin.svg";
import { ReactComponent as GithubLogo } from "../../assets/icons/github.svg";
import { ReactComponent as EmailLogo } from "../../assets/icons/email.svg";
import "./LandingPage.scss";
import { useRef } from "react";
import FadeIn from "../FadeIn/FadeIn";
import MobileDisplayApp from "../DisplayApps/MobileDisplayApp/MobileDisplayApp";
import DesktopDisplayApp from "../DisplayApps/DesktopDisplayApp/DesktopDisplayApp";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="header__background" />
        <FadeIn>
          <div className="header__content mw">
            <div className="header__content__text">
              <h1>Artur Pietrzak</h1>
              <p>Frontend developer</p>
            </div>
            <div className="header__content__preview-container">
              <div className="header__content__preview-container__desktop-preview">
                <DesktopDisplayApp />
              </div>
              <div className="header__content__preview-container__mobile-preview">
                <MobileDisplayApp />
              </div>
            </div>
          </div>
        </FadeIn>
      </header>
      <section className="about-me mw">
        <div className="about-me__image">
          <img src="/profilepic.jpg" />
        </div>
        <div className="about-me__text-container">
          <h2 className="about-me__text-container__heading">About me</h2>
          <p className="about-me__text-container__content">
            Hi! My name is Artur and I love creating cool things for the web.
            Front end developement was supposed to be jdasdsust another task for
            a subject at the university, but it turned out to be a great fit for
            me.
          </p>
          <p className="about-me__text-container__content">
            As of now, I have been working on my front end skills for over a
            year.
          </p>
          <p className="about-me__text-container__content">
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className="about-me__text-container__tech-stack">
            <span className="about-me__text-container__tech-stack__element">
              TypeScript
            </span>
            <span className="about-me__text-container__tech-stack__element">
              React
            </span>
            <span className="about-me__text-container__tech-stack__element">
              Next.js
            </span>
            <span className="about-me__text-container__tech-stack__element">
              Mantine
            </span>
            <span className="about-me__text-container__tech-stack__element">
              SCSS
            </span>
            <span className="about-me__text-container__tech-stack__element">
              T3 Stack
            </span>
          </div>
        </div>
      </section>
      <section className="porftolio mw">
        <FadeIn>
          <ProjectTile
            description="Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.
            Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio.
            "
            githubUrl="https://github.com/ArtJSON"
            imgUrl="/weather.png"
            name="Weather app"
            technologies={["dsadsa", "dsadsa", "dsadsa"]}
          />
        </FadeIn>
        <FadeIn>
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
        </FadeIn>
        <FadeIn>
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
        </FadeIn>
      </section>
      <section className="contact">
        <p className="contact__prompt">Let's work together!</p>
        <button className="contact__get-in-touch-btn">
          <EmailLogo />
          Get in touch
        </button>
      </section>
      <section className="social-info mw">
        <p className="social-info__signature">Artur Pietrzak</p>
        <div className="social-info__buttons">
          <SocialButton icon={<LinkedinLogo />} url="dsadas" />
          <SocialButton icon={<GithubLogo />} url="dsadas" />
        </div>
      </section>
    </div>
  );
}
