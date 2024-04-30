import Intro from "@/components/intro/intro";
import styles from "@/app/page.module.scss";
import Experience from "@/components/experience/experience";
import Technologies from "@/components/technologies/technologies";
import RecentProject from "@/components/recentProject/recentProject";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainWrapper}>
        <Intro />
        <Experience />
        <Technologies />
        <RecentProject />
        <Contact />
      </div>
    </main>
  );
}
