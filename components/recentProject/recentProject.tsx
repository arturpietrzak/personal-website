import Link from "next/link";
import ProjectLink from "../projectLink/projectLink";
import styles from "./recentProject.module.scss";

const recentProject = {
  title: "Knowledge sharing platform",
  description:
    "A twitter-inspired social networking site with focus on longer, formattable posts and sharing knowledge.",
  id: "knowhow",
  imageUrl: "https://arturpietrzak.com/grumbler.webp",
  tags: ["React", "Next.js", "tRPC"],
};

export default function RecentProject() {
  return (
    <section className={styles.projects}>
      <h2 className={styles.header}>Most recent project</h2>
      <ProjectLink {...recentProject} />
      <p className={styles.prompt}>To see more of my work, click here:</p>
      <Link href="/projects" className={styles.link}>
        Full portfolio
      </Link>
    </section>
  );
}
