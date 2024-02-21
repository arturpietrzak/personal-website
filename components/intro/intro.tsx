import Image from "next/image";
import styles from "./intro.module.scss";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <Image
        alt="Profile picture"
        src="/profilepic.webp"
        height={100}
        width={100}
        className={styles.profilePicture}
      />
    </section>
  );
}
