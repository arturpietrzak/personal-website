import styles from "./technologies.module.scss";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <section className={styles.technologies}>
      <h2 className={styles.header}>Technologies</h2>
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
