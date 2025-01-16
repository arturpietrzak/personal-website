import { Link } from "@/navigation";
import styles from "./projectLink.module.scss";
import Image from "next/image";
import TagList from "../tagList/tagList";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("Navigation");

  return (
    <Link href={`/projects/${id}`} className={styles.projectLinkWrapper}>
      <div className={styles.projectLink}>
        <div className={styles.infoContainer}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.link}>{t("read-more")}</div>
          <TagList tags={tags} />
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
