"use client";

import { useMessages, useTranslations } from "next-intl";
import styles from "./education.module.scss";
import { motion } from "framer-motion";

export default function Education() {
  const t = useTranslations("Index");
  const messages = useMessages();

  /* @ts-ignore */
  const educationItems = messages["Index"]?.["education"]?.["items"] || [];
  const educationKeys = Object.keys(educationItems);

  return (
    <section id="education" className={styles.education}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionBadge}>{t("education.header")}</span>
      </div>

      <div className={styles.timeline}>
        {educationKeys.map((ek, index) => {
          const school = t(`education.items.${ek}.school`);
          const degree = t(`education.items.${ek}.degree`);
          const field = t(`education.items.${ek}.field`);
          const location = t(`education.items.${ek}.location`);
          const notes = t(`education.items.${ek}.notes`);
          const startingDate = t(`education.items.${ek}.startingDate`);
          const endingDate = t(`education.items.${ek}.endingDate`);

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
                {index < educationKeys.length - 1 && <div className={styles.nodeLine} />}
              </div>

              {/* Right Side: Content Card */}
              <div 
                className={styles.contentCard} 
                data-date={`${startingDate} — ${endingDate}`}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    <div className={styles.iconInner}>
                      {/* Graduation Cap SVG */}
                      <svg 
                        className={styles.capIcon} 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width={20}
                        height={20}
                        aria-hidden="true"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.titleInfo}>
                    <h3 className={styles.degreeTitle}>{degree}</h3>
                    <div className={styles.schoolMeta}>
                      <span className={styles.schoolName}>{school}</span>
                      <span className={styles.bulletSeparator}>&#8226;</span>
                      <span className={styles.locationText}>{location}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.description}>
                  <p className={styles.notesText}>{notes}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
