import Link from "next/link";
import styles from "./contact.module.scss";
import githubIcon from "@/public/icons/github.svg";
import emailIcon from "@/public/icons/email.svg";
import linkedinIcon from "@/public/icons/linkedin.svg";
import Image from "next/image";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h2 className={styles.header}>Contact</h2>
      <div className={styles.links}>
        <Link
          href="mailto: artur.pietrzak1@outlook.com"
          className={styles.link}
        >
          <Image className={styles.icon} priority src={emailIcon} alt="Email" />
          artur.pietrzak1@outlook.com
        </Link>
        <Link href="https://github.com/arturpietrzak" className={styles.link}>
          <Image
            className={styles.icon}
            priority
            src={githubIcon}
            alt="Github"
          />
          /arturpietrzak
        </Link>
        <Link
          href="https://www.linkedin.com/in/artur-pietrzak-dev/"
          className={styles.link}
        >
          <Image
            className={styles.icon}
            priority
            src={linkedinIcon}
            alt="Linkedin"
          />
          /artur-pietrzak-dev
        </Link>
      </div>
    </section>
  );
}
