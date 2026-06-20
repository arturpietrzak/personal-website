"use client";

import { useMessages, useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import styles from "./projectCarousel.module.scss";
import Image from "next/image";
import { Link } from "@/navigation";

const DRAG_BUFFER = 50;

export default function ProjectCarousel() {
  const t = useTranslations("Index");
  const tProjects = useTranslations("Projects");
  const messages = useMessages();

  /* @ts-ignore */
  const projectList = messages["Projects"] || [];
  const projectKeys = Object.keys(projectList);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);

  // Resize listener to compute layout width
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDragEnd = () => {
    const x = dragX.get();
    
    if (x <= -DRAG_BUFFER && currentIndex < projectKeys.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
    dragX.set(0);
  };

  const nextSlide = () => {
    if (currentIndex < projectKeys.length - 1) {
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
        
        {/* Navigation arrows */}
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
            disabled={currentIndex === projectKeys.length - 1}
            className={styles.arrowBtn}
            aria-label="Next Project"
          >
            &rarr;
          </button>
        </div>
      </div>

      <div ref={containerRef} className={styles.carouselViewport}>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x: dragX }}
          animate={{ x: -currentIndex * (containerWidth > 768 ? 420 : containerWidth * 0.88 + 16) }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onDragEnd={handleDragEnd}
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
        {projectKeys.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
