import Link from "next/link";
import styles from "./projectList.module.scss";
import Image from "next/image";
import ProjectLink from "../projectLink/projectLink";

const projects = [
  {
    title: "Knowledge sharing platform",
    description:
      "A twitter-inspired social networking site with focus on longer, formattable posts and sharing knowledge.",
    id: "knowhow",
    imageUrl: "https://arturpietrzak.com/grumbler.webp",
    tags: ["React", "Next.js", "tRPC"],
  },
  {
    title: "Knowledge sharing platform",
    description:
      "A twitter-inspired social networking site with focus on longer, formattable posts and sharing knowledge.",
    id: "knowhow",
    imageUrl: "https://arturpietrzak.com/grumbler.webp",
    tags: ["React", "Next.js", "tRPC"],
  },
  {
    title: "Knowledge sharing platform",
    description:
      "A twitter-inspired social networking site with focus on longer, formattable posts and sharing knowledge.",
    id: "knowhow",
    imageUrl: "https://arturpietrzak.com/grumbler.webp",
    tags: ["React", "Next.js", "tRPC"],
  },
];

export default function ProjectList() {
  return (
    <section className={styles.projectList}>
      {projects.map((p) => (
        <ProjectLink {...p} key={p.id} />
      ))}
    </section>
  );
}
