import { Link } from "@/navigation";
import ProjectLink from "../projectLink/projectLink";
import styles from "./tagList.module.scss";

export default function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className={styles.tagList}>
      {tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>
  );
}
