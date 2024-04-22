import { Link } from "@/navigation";
import ProjectLink from "../projectLink/projectLink";
import styles from "./recentProject.module.scss";
import { useMessages, useTranslations } from "next-intl";

// const recentProject = {
//   title: "Knowledge sharing platform",
//   description:
//     "A twitter-inspired social networking site with focus on longer, formattable posts and sharing knowledge.",
//   id: "knowhow",
//   imageUrl: "https://arturpietrzak.com/grumbler.webp",
//   tags: ["React", "Next.js", "tRPC"],
// };

export default function RecentProject() {
  const t = useTranslations("Index");
  const tProjects = useTranslations("Projects");
  const messages = useMessages();

  /* @ts-ignore */
  const recentProject = messages["Projects"][0];

  /* @ts-ignore */
  const tagsKeys = Object.keys(messages["Projects"][0]["tags"]);

  return (
    <section className={styles.projects}>
      <h2 className={styles.header}>{t("most-recent-project.header")}</h2>
      <ProjectLink
        title={tProjects("0.title")}
        description={tProjects("0.description")}
        id={tProjects("0.id")}
        imageUrl={tProjects("0.imageUrl")}
        tags={tagsKeys.map((key) => tProjects(`0.tags.${key}`))}
      />
      <p className={styles.prompt}>{t("most-recent-project.more-work")}</p>
      <Link href="/projects" className={styles.link}>
        {t("most-recent-project.portfolio-button")}
      </Link>
    </section>
  );
}
