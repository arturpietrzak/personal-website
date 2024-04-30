import Image from "next/image";
import styles from "./intro.module.scss";
import { useTranslations } from "next-intl";

export default function Intro() {
  const t = useTranslations("Index");

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
        <p className={styles.title}>{t("title")}</p>
        {t.rich("about-me", {
          p: (chunks) => <p className={styles.text}>{chunks}</p>,
          t: (chunks) => <span className={styles.tech}>{chunks}</span>,
        })}
      </div>
    </section>
  );
}
