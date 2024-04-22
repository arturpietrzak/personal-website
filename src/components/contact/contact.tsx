import Link from "next/link";
import styles from "./contact.module.scss";
import githubIcon from "/public/icons/github.svg";
import emailIcon from "/public/icons/email.svg";
import linkedinIcon from "/public/icons/linkedin.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Index.contact");

  return (
    <section className={styles.contact}>
      <h2 className={styles.header}>{t("header")}</h2>
      <div className={styles.links}>
        <Link
          href="mailto: artur.pietrzak1@outlook.com"
          className={styles.link}
        >
          <Image className={styles.icon} priority src={emailIcon} alt="Email" />
          {t("email")}
        </Link>
        <Link href="https://github.com/arturpietrzak" className={styles.link}>
          <Image
            className={styles.icon}
            priority
            src={githubIcon}
            alt="Github"
          />
          {t("github")}
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
          {t("linkedin")}
        </Link>
      </div>
    </section>
  );
}
