import ProjectTile, { ProjectTileProps } from "../ProjectTile/ProjectTile";
import SocialButton from "../SocialButton/SocialButton";
import { ReactComponent as LinkedinLogo } from "../../assets/icons/linkedin.svg";
import { ReactComponent as GithubLogo } from "../../assets/icons/github.svg";
import { ReactComponent as EmailLogo } from "../../assets/icons/email.svg";
import "./LandingPage.scss";
import FadeIn from "../FadeIn/FadeIn";
import MobileDisplayApp from "../DisplayApps/MobileDisplayApp/MobileDisplayApp";
import DesktopDisplayApp from "../DisplayApps/DesktopDisplayApp/DesktopDisplayApp";

const projects: ProjectTileProps[] = [
  {
    name: "Grumbler",
    description:
      "A twitter-inspired social networking site with focus on longer, formattable posts and discussion.",
    imgUrl: "/grumbler.webp",
    technologies: ["tRPC", "Prisma", "NextJS", "Nextauth", "SCSS"],
    deploymentUrl: "https://diet-app-three.vercel.app/",
    githubUrl: "https://github.com/arturpietrzak/Grumbler",
    wip: true,
  },
  {
    name: "Racetrack Ranking",
    description:
      "A web app for viewing, commenting and rating race tracks all over the world.",
    imgUrl: "/racetrackranking.webp",
    technologies: ["Express", "React"],
    githubUrl: "https://github.com/arturpietrzak/react-weather-app",
  },
  {
    name: "Weather app",
    description:
      "A web app for showing current and future weather in a place entered by the user. Utilizes visualcrossing.com weather API.",
    imgUrl: "/weather.webp",
    technologies: ["React", "Axios"],
    deploymentUrl: "https://react-weather-app-artjson.vercel.app/",
    githubUrl: "https://github.com/arturpietrzak/react-weather-app",
  },
  {
    name: "Commutely",
    description:
      "A project created with mission to educate people on true costs of car transport, both economic and enviromental.",
    imgUrl: "/commutely.webp",
    technologies: ["HTML", "CSS", "JS"],
    deploymentUrl: "https://commutely-webpage.vercel.app/",
    githubUrl: "https://github.com/arturpietrzak/commutely-webpage",
  },
];

export default function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="header__background" />
        <FadeIn>
          <div className="header__content mw">
            <div className="header__content__text">
              <h1>Artur Pietrzak</h1>
              <p>Web developer</p>
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
          <img alt="Picture of me" src="/profilepic.webp" />
        </div>
        <div className="about-me__text-container">
          <h2 className="about-me__text-container__heading">About me</h2>
          <p className="about-me__text-container__content">
            Hi! My name is Artur and I love creating cool things for the web.
            Frontend developement was supposed to be just another task for a
            subject at the university, but it turned out to be a great fit for
            me.
          </p>
          <p className="about-me__text-container__content">
            As of now, I have been working on my frontend skills for over a
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
        <h2 className="porftolio__heading">My portfolio</h2>
        <div className="porftolio__projects">
          {projects.map((props, idx) => (
            <FadeIn key={props.name}>
              <ProjectTile {...props} inverted={Boolean(idx % 2)} />
            </FadeIn>
          ))}
        </div>
      </section>
      <section className="contact">
        <p className="contact__prompt">Let's work together!</p>
        <a
          href="mailto: artur.pietrzak1@outlook.com"
          className="contact__get-in-touch-btn"
        >
          <EmailLogo />
          Get in touch
        </a>
      </section>
      <section className="social-info mw">
        <div className="social-info__buttons">
          <SocialButton
            icon={<LinkedinLogo />}
            url="https://www.linkedin.com/in/artur-pietrzak-7b53a5239/"
            ariaLabel="Check my Linked in"
          />
          <SocialButton
            icon={<GithubLogo />}
            url="https://github.com/ArtJSON"
            ariaLabel="Check my Github"
          />
        </div>
        <p className="social-info__signature">Artur Pietrzak</p>
      </section>
    </div>
  );
}
