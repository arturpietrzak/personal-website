"use client";

import { useMessages, useTranslations } from "next-intl";
import styles from "./timeline.module.scss";
import Image from "next/image";
import { Link } from "@/navigation";
import { motion } from "framer-motion";
import SectionBadge from "../ui/sectionBadge/sectionBadge";

interface TimelineProps {
  namespace: string; // e.g. "Index.experience" or "Index.education"
  headerKey: string; // e.g. "experience.header" or "education.header"
  titleKey: string; // e.g. "title" (for experience) or "degree" (for education)
  subtitleKey: string; // e.g. "company" or "school"
  urlKey: string; // e.g. "companyUrl" or "universityUrl"
  imgKey: string; // e.g. "companyImg" or "universityImg"
}

export default function Timeline({
  namespace,
  headerKey,
  titleKey,
  subtitleKey,
  urlKey,
  imgKey,
}: TimelineProps) {
  // Use a generic translation for the base namespace, e.g. "Index"
  const baseNamespace = namespace.split(".")[0];
  const sectionKey = namespace.split(".")[1]; // "experience" or "education"
  
  const t = useTranslations(baseNamespace);
  const messages = useMessages();

  // Safely extract items from the messages object
  const sectionData = (messages[baseNamespace as keyof typeof messages] as any)?.[sectionKey];
  const items = sectionData?.items || {};
  const itemKeys = Object.keys(items);

  return (
    <section id={sectionKey} className={styles.timelineSection}>
      <SectionBadge title={t(headerKey as any)} />

      <div className={styles.timeline}>
        {itemKeys.map((itemKey, index) => {
          const itemPath = `${sectionKey}.items.${itemKey}`;
          
          const title = t(`${itemPath}.${titleKey}` as any);
          const subtitle = t(`${itemPath}.${subtitleKey}` as any);
          const url = t(`${itemPath}.${urlKey}` as any);
          const img = t(`${itemPath}.${imgKey}` as any);
          const location = t(`${itemPath}.location` as any);
          const startingDate = t(`${itemPath}.startingDate` as any);
          const endingDate = t(`${itemPath}.endingDate` as any);
          
          const notes = items[itemKey]?.notes ? t(`${itemPath}.notes` as any) : null;
          const achievements = items[itemKey]?.achievements || {};
          const achievementKeys = Object.keys(achievements);

          return (
            <motion.div
              key={itemKey}
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Left Side: Date */}
              <div className={styles.dateContainer}>
                <span className={styles.dateText}>
                  {startingDate} — {endingDate}
                </span>
              </div>

              {/* Center Line & Glowing Node */}
              <div className={styles.nodeContainer}>
                <div className={styles.nodeDot} />
                {index < itemKeys.length - 1 && <div className={styles.nodeLine} />}
              </div>

              {/* Right Side: Content Card */}
              <div className={styles.contentCard} data-date={`${startingDate} — ${endingDate}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.logoWrapper}>
                    <Link href={url} target="_blank" rel="noopener noreferrer">
                      <div className={styles.logoInner}>
                        <Image
                          alt={`${subtitle} logo`}
                          className={styles.logoImg}
                          src={img}
                          height={32}
                          width={32}
                          unoptimized={img.endsWith(".svg")}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className={styles.titleInfo}>
                    <h3 className={styles.mainTitle}>{title}</h3>
                    <div className={styles.subtitleMeta}>
                      <Link href={url} target="_blank" rel="noopener noreferrer" className={styles.subtitleLink}>
                        {subtitle}
                      </Link>
                      <span className={styles.bulletSeparator}>&#8226;</span>
                      <span className={styles.locationText}>{location}</span>
                    </div>
                    <div className={styles.mobileDate}>
                      {startingDate} — {endingDate}
                    </div>
                  </div>
                </div>

                {notes && (
                  <div className={styles.description}>
                    <p className={styles.notesText}>{notes}</p>
                  </div>
                )}

                {achievementKeys.length > 0 && (
                  <ul className={styles.achievementsList}>
                    {achievementKeys.map((ak) => (
                      <li key={ak} className={styles.achievementItem}>
                        {t(`${itemPath}.achievements.${ak}` as any)}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
