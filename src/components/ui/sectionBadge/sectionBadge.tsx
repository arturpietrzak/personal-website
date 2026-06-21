import styles from "./sectionBadge.module.scss";

interface SectionBadgeProps {
  title: string;
  className?: string;
}

export default function SectionBadge({ title, className = "" }: SectionBadgeProps) {
  return (
    <div className={`${styles.sectionHeader} ${className}`}>
      <span className={styles.sectionBadge}>{title}</span>
    </div>
  );
}
