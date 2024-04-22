import Image from "next/image";
import styles from "./intro.module.scss";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.profilePictureContainer}>
        <Image
          alt="Profile picture"
          src="/profilepic.webp"
          className={styles.picture}
          fill
        />
      </div>
      <div className={styles.about}>
        <p className={styles.name}>Artur Pietrzak</p>
        <p className={styles.title}>IT engineer and developer</p>
        <p className={styles.text}>
          Web developer with over a year of experience in software engineering.
          My core stack consits of <span className={styles.tech}>React.js</span>
          , <span className={styles.tech}>Next.js</span>,{" "}
          <span className={styles.tech}>TypeScript</span>,{" "}
          <span className={styles.tech}>SCSS</span>,{" "}
          <span className={styles.tech}>MySQL</span> and{" "}
          <span className={styles.tech}>Prisma</span>. Additionally, during my
          studies and while creating personal projects I learned other
          technologies, such as <span className={styles.tech}>C#</span>,{" "}
          <span className={styles.tech}>.NET</span>,{" "}
          <span className={styles.tech}>Java</span>,{" "}
          <span className={styles.tech}>Spring</span> and{" "}
          <span className={styles.tech}>React Native</span>.
        </p>
        <p className={styles.text}>
          As of recentely, I have also been gaining knowledge in the field of
          artificial intelligence and machine learning, focusing on the domain
          of language processing. I gained experience in{" "}
          <span className={styles.tech}>Python</span>,{" "}
          <span className={styles.tech}>PyTorch</span> and{" "}
          <span className={styles.tech}>Pandas</span> by developing a customer
          service chatbot based on a Large Language Model called{" "}
          <span className={styles.tech}>Llama 2</span>.
        </p>
      </div>
    </section>
  );
}
