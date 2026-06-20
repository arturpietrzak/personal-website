"use client";

import { useMessages, useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import styles from "./projectCarousel.module.scss";
import Image from "next/image";
import { Link } from "@/navigation";

export default function ProjectCarousel() {
  const t = useTranslations("Index");
  const tProjects = useTranslations("Projects");
  const messages = useMessages();

  /* @ts-ignore */
  const projectList = messages["Projects"] || [];
  const projectKeys = Object.keys(projectList);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [stride, setStride] = useState(420);
  const containerRef = useRef<HTMLDivElement>(null);

  const maxIndex = containerWidth > 768 
    ? Math.max(0, projectKeys.length - 2) 
    : Math.max(0, projectKeys.length - 1);

  // Resize listener to compute layout width and exact card stride
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);

        // Directly measure the exact CSS-rendered distance between cards to avoid scrollbar/vw math desync
        const track = containerRef.current.querySelector(`.${styles.carouselTrack}`);
        if (track && track.children.length > 1) {
          const card1 = track.children[0] as HTMLElement;
          const card2 = track.children[1] as HTMLElement;
          const actualStride = card2.getBoundingClientRect().left - card1.getBoundingClientRect().left;
          if (actualStride > 0) {
            setStride(actualStride);
          }
        }
      }
    };

    // Initial measurement
    setTimeout(handleResize, 50);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileCardWidth = containerWidth > 0 ? Math.min(400, containerWidth * 0.85 - 16) : 0;
  const mobilePaddingLeft = containerWidth > 0 ? (containerWidth - mobileCardWidth) / 2 : 0;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionBadge}>{t("most-recent-project.header")}</span>
      </div>

      {/* Navigation arrows */}
      <div className={styles.carouselControls}>
        <div className={styles.carouselArrows}>
          <button 
            onClick={prevSlide} 
            disabled={currentIndex === 0}
            className={styles.arrowBtn}
            aria-label="Previous Project"
          >
            &larr;
          </button>
          <button 
            onClick={nextSlide} 
            disabled={currentIndex === maxIndex}
            className={styles.arrowBtn}
            aria-label="Next Project"
          >
            &rarr;
          </button>
        </div>
      </div>

      <div 
        ref={containerRef} 
        className={styles.carouselViewport}
        style={{ paddingLeft: containerWidth <= 768 ? `${mobilePaddingLeft}px` : undefined }}
      >
        <motion.div
          animate={{ x: -currentIndex * stride }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={styles.carouselTrack}
        >
          {projectKeys.map((pk, index) => {
            const id = tProjects(`${pk}.id`);
            const title = tProjects(`${pk}.title`);
            const description = tProjects(`${pk}.description`);
            const imageUrl = tProjects(`${pk}.imageUrl`);
            const year = tProjects(`${pk}.year`) || "2022";
            /* @ts-ignore */
            const tagKeys = Object.keys(projectList[pk]?.["tags"] || {});
            const tags = tagKeys.map((tk) => tProjects(`${pk}.tags.${tk}`));

            return (
              <motion.div
                key={id}
                className={`${styles.projectCard} ${index === currentIndex ? styles.activeCard : ""}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={`/projects/${id}`} className={styles.cardLink}>
                  <div className={styles.imageWrapper}>
                    <Image
                      alt={`${title} project`}
                      src={imageUrl}
                      fill
                      className={styles.projectImage}
                      sizes="(max-width: 768px) 85vw, 400px"
                    />
                    <div className={styles.yearBadge}>{year}</div>
                  </div>

                  <div className={styles.cardContent}>
                    <h3 className={styles.projectTitle}>{title}</h3>
                    <p className={styles.projectDesc}>{description}</p>
                    
                    <div className={styles.tagsContainer}>
                      {tags.map((tag) => (
                        <span key={tag} className={styles.tagBadge}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Progress indicators / Pagination dots */}
      <div className={styles.carouselDots}>
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
