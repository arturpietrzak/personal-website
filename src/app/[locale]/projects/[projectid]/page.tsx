import styles from "@/app/page.module.scss";
import TagList from "@/components/tagList/tagList";
import { Link } from "@/navigation";
import { useMessages, useTranslations } from "next-intl";

export default function Project({
  params: { projectid },
}: {
  params: { projectid: string };
}) {
  const t = useTranslations(`ProjectPage.${projectid}`);
  const messages = useMessages();

  /* @ts-ignore */
  const tagKeys = Object.keys(messages["ProjectPage"][projectid]["tags"]);
  const tags = tagKeys.map((tk) => t(`tags.${tk}`));

  return (
    <main className={styles.main}>
      <div className={styles.projectWrapper}>
        <h1 className={styles.title}>{t("title")}</h1>
        <div className={styles.videoWrapper}>
          <iframe
            className={styles.videoIframe}
            src={`https://www.youtube.com/embed/${t("youtube-id")}`}
          />
        </div>
        <TagList tags={tags} />
        <div className={styles.description}>
          {t.rich("description", {
            p: (chunks) => <p className={styles.text}>{chunks}</p>,
            e: (chunks) => <span className={styles.emphasis}>{chunks}</span>,
          })}
        </div>
        <Link href="/projects" className={styles.allProjectsLink}>
          ‹ All projects
        </Link>
      </div>
    </main>
  );
}