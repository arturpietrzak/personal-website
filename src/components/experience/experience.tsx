"use client";

import { useMessages, useTranslations } from "next-intl";
import styles from "./experience.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Experience() {
  const t = useTranslations("Index");
  const messages = useMessages();

  /* @ts-ignore */
  const experienceItems = messages["Index"]?.["experience"]?.["items"] || [];
  const experienceKeys = Object.keys(experienceItems);

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionBadge}>{t("experience.header")}</span>
      </div>

      <div className={styles.timeline}>
        {experienceKeys.map((ek, index) => {
          /* @ts-ignore */
          const achievements = experienceItems[ek]?.["achievements"] || [];
          const achievementKeys = Object.keys(achievements);

          const company = t(`experience.items.${ek}.company`);
          const title = t(`experience.items.${ek}.title`);
          const companyUrl = t(`experience.items.${ek}.companyUrl`);
          const companyImg = t(`experience.items.${ek}.companyImg`);
          const location = t(`experience.items.${ek}.location`);
          const startingDate = t(`experience.items.${ek}.startingDate`);
          const endingDate = t(`experience.items.${ek}.endingDate`);

          return (
            <motion.div 
              key={ek} 
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
                {index < experienceKeys.length - 1 && <div className={styles.nodeLine} />}
              </div>

              {/* Right Side: Content Card */}
              <div className={styles.contentCard} data-date={`${startingDate} — ${endingDate}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.logoWrapper}>
                    <Link href={companyUrl} target="_blank" rel="noopener noreferrer">
                      <div className={styles.logoInner}>
                        <Image
                          alt={`${company} logo`}
                          className={styles.logoImg}
                          src={companyImg}
                          height={32}
                          width={32}
                          unoptimized={companyImg.endsWith(".svg")}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className={styles.titleInfo}>
                    <h3 className={styles.jobTitle}>{title}</h3>
                    <div className={styles.companyMeta}>
                      <Link href={companyUrl} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                        {company}
                      </Link>
                      <span className={styles.bulletSeparator}>&#8226;</span>
                      <span className={styles.locationText}>{location}</span>
                    </div>
                    <div className={styles.mobileDate}>
                      {startingDate} — {endingDate}
                    </div>
                  </div>
                </div>

                <ul className={styles.achievementsList}>
                  {achievementKeys.map((ak) => (
                    <li key={ak} className={styles.achievementItem}>
                      {t(`experience.items.${ek}.achievements.${ak}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
