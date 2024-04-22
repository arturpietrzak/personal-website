import styles from "@/app/page.module.scss";
import ProjectLink from "@/components/projectLink/projectLink";
import { useMessages, useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Projects");
  const messages = useMessages();

  /* @ts-ignore */
  const projectKeys = Object.keys(messages["Projects"]);

  return (
    <main className={styles.main}>
      <div className={styles.mainWrapper}>
        <section className={styles.projectsList}>
          {projectKeys.map((pk) => {
            const tagKeys = Object.keys(
              /* @ts-ignore */
              messages["Projects"][pk]["tags"]
            );

            return (
              <ProjectLink
                key={t(`${pk}.id`)}
                title={t(`${pk}.title`)}
                description={t(`${pk}.description`)}
                id={t(`${pk}.id`)}
                imageUrl={t(`${pk}.imageUrl`)}
                tags={tagKeys.map((tk) => t(`${pk}.tags.${tk}`))}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}
