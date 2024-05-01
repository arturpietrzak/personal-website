import styles from "./technologies.module.scss";
import { useTranslations } from "next-intl";

const technologiesList = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "MySQL",
  "Prisma",
  "C#",
  ".NET",
  "Java",
  "Spring",
  "Hibernate",
  "Python",
  "Pytorch",
  "Pandas",
  "Git",
  "Azure",
  "Docker",
];

export default function Technologies() {
  const t = useTranslations("Index.technologies");

  return (
    <section className={styles.technologies}>
      <h2 className={styles.header}>{t("header")}</h2>
      <div className={styles.technologiesContainer}>
        {technologiesList.map((t) => (
          <TechnologyItem name={t} key={t} />
        ))}
      </div>
    </section>
  );
}

function TechnologyItem({ name }: { name: string }) {
  return <div className={styles.technologyItem}>{name}</div>;
}
