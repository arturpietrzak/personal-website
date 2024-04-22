import styles from "@/app/page.module.scss";
import ProjectList from "@/components/projectList/projectList";

export default function Home() {
  return (
    <main className={styles.main}>
      <ProjectList />
    </main>
  );
}
