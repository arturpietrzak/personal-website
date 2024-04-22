import Link from "next/link";
import styles from "./projectLink.module.scss";
import Image from "next/image";

export default function ProjectLink({
  title,
  description,
  id,
  imageUrl,
  tags,
}: {
  title: string;
  description: string;
  id: string;
  imageUrl: string;
  tags: string[];
}) {
  return (
    <Link href={id} className={styles.projectLinkWrapper}>
      <div className={styles.projectLink}>
        <div className={styles.infoContainer}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <ul className={styles.technologiesList}>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title + " project"}
          className={styles.projectImage}
          width={400}
          height={300}
        />
      </div>
    </Link>
  );
}
