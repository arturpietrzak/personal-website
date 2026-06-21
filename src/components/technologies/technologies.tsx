"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import styles from "./technologies.module.scss";
import { useTranslations } from "next-intl";
import SectionBadge from "../ui/sectionBadge/sectionBadge";

type TechItem = {
  name: string;
  desc: string;
  category: string;
  icon: React.ReactNode;
  color: string;
};

export default function Technologies() {
  const t = useTranslations("Index.technologies");
  const trackRef = useRef<HTMLDivElement>(null);
  const overlayRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const coreTechs: TechItem[] = [
    {
      name: "ReactJS",
      desc: t("items.react"),
      category: t("categories.frontend"),
      color: "rgba(97, 218, 251, 0.2)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#61dafb" strokeWidth={2} width={24} height={24} aria-hidden="true">
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
        </svg>
      ),
    },
    {
      name: "NextJS",
      desc: t("items.next"),
      category: t("categories.frontend"),
      color: "rgba(255, 255, 255, 0.15)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth={2} width={24} height={24} aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M7 17V7l10 10V7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      desc: t("items.typescript"),
      category: t("categories.language"),
      color: "rgba(49, 120, 198, 0.2)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#3178c6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={24} height={24} aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 8h4M11 8v8M15 10c0-1-1-1-2-1s-2 .5-2 1.5 1 1 2 1.5 2 .5 2 1.5S14 16 13 16s-2-1-2-2" />
        </svg>
      ),
    },
    {
      name: "C# & VB with .NET",
      desc: t("items.dotnet"),
      category: t("categories.backend"),
      color: "rgba(81, 43, 212, 0.2)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#512bd4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={24} height={24} aria-hidden="true">
          <path d="M12 2L2 7l10 15 10-15-10-5z" />
          <path d="M8 10h8M8 14h8M10 8v8M14 8v8" />
        </svg>
      ),
    },
    {
      name: "Python",
      desc: t("items.python"),
      category: t("categories.language"),
      color: "rgba(55, 118, 171, 0.2)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#3776ab" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={24} height={24} aria-hidden="true">
          <path d="M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2zm-1 3a1 1 0 112 0 1 1 0 01-2 0zm1 14a1 1 0 110-2 1 1 0 010 2zm4-6H8v-2h8v2z" />
        </svg>
      ),
    },
    {
      name: "SQL",
      desc: t("items.sql"),
      category: t("categories.database"),
      color: "rgba(0, 117, 143, 0.2)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#00758f" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={24} height={24} aria-hidden="true">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      ),
    },
    {
      name: "Prisma",
      desc: t("items.prisma"),
      category: t("categories.database"),
      color: "rgba(12, 58, 82, 0.2)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#0c3a52" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={24} height={24} aria-hidden="true">
          <path d="M12 2L2 20h20L12 2z" />
          <path d="M12 2v18M12 10l10 10M12 10L2 20" />
        </svg>
      ),
    },
    {
      name: "Pandas",
      desc: t("items.pandas"),
      category: t("categories.data-science"),
      color: "rgba(21, 9, 87, 0.2)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#150957" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={24} height={24} aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
          <circle cx="6" cy="6" r="1" fill="#150957" />
          <circle cx="12" cy="12" r="1" fill="#150957" />
        </svg>
      ),
    },
    {
      name: "TensorFlow",
      desc: t("items.tensorflow"),
      category: t("categories.ai-ml"),
      color: "rgba(255, 111, 0, 0.2)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ff6f00" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={24} height={24} aria-hidden="true">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5M12 12v10" />
        </svg>
      ),
    },
    {
      name: "PyTorch",
      desc: t("items.pytorch"),
      category: t("categories.ai-ml"),
      color: "rgba(238, 76, 44, 0.2)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ee4c2c" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={24} height={24} aria-hidden="true">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 6v12M8 10h8" />
        </svg>
      ),
    },
    {
      name: "HTML",
      desc: t("items.html"),
      category: t("categories.frontend"),
      color: "rgba(227, 79, 38, 0.2)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#e34f26" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={24} height={24} aria-hidden="true">
          <path d="M12 2L2 7l1.5 12 8.5 3 8.5-3L22 7 12 2z" />
          <path d="M8 10h8M10 14h4" />
        </svg>
      ),
    },
    {
      name: "CSS & SCSS",
      desc: t("items.css-scss"),
      category: t("categories.frontend"),
      color: "rgba(207, 100, 154, 0.2)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#cf649a" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={24} height={24} aria-hidden="true">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          <path d="M8 14c2-4 4-4 6 0s2 4 4 0" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      desc: t("items.tailwind"),
      category: t("categories.frontend"),
      color: "rgba(56, 189, 248, 0.2)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={24} height={24} aria-hidden="true">
          <path d="M12 6C8.5 6 6 8.5 6 12s2.5 6 6 6 6-2.5 6-6-2.5-6-6-6z" />
          <path d="M12 2c5 0 8 3 8 8s-3 8-8 8-8-3-8-8 3-8 8-8z" />
        </svg>
      ),
    },
    {
      name: "Docker",
      desc: t("items.docker"),
      category: t("categories.devops"),
      color: "rgba(36, 150, 237, 0.2)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#2496ed" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={24} height={24} aria-hidden="true">
          <rect x="5" y="4" width="4" height="3" rx="0.5" />
          <rect x="10" y="4" width="4" height="3" rx="0.5" />
          <rect x="15" y="4" width="4" height="3" rx="0.5" />
          <rect x="2" y="8" width="4" height="3" rx="0.5" />
          <rect x="7" y="8" width="4" height="3" rx="0.5" />
          <rect x="12" y="8" width="4" height="3" rx="0.5" />
          <rect x="17" y="8" width="4" height="3" rx="0.5" />
          <path d="M2 13h20c0 4-4 6-10 6s-10-2-10-6z" />
        </svg>
      ),
    },
    {
      name: "Git",
      desc: t("items.git"),
      category: t("categories.devops"),
      color: "rgba(240, 80, 50, 0.2)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#f05032" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={24} height={24} aria-hidden="true">
          <circle cx="12" cy="18" r="3" />
          <circle cx="12" cy="6" r="3" />
          <circle cx="18" cy="6" r="3" />
          <path d="M12 9v6" />
          <path d="M12 15c3 0 3-6 6-6" />
        </svg>
      ),
    },
  ];

  // Double the array to allow for infinite scrolling
  const marqueeItems = [...coreTechs, ...coreTechs, ...coreTechs];

  // Auto-scroll loop using requestAnimationFrame for smooth manual + auto scrolling
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    
    // speed in pixels per millisecond
    const autoScrollSpeed = 0.05;

    const render = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isHovered && !isDragging && expandedIndex === null) {
        setScrollPos((prev) => {
          let nextPos = prev - autoScrollSpeed * delta;
          
          if (trackRef.current) {
            const trackWidth = trackRef.current.scrollWidth / 3;
            // Loop back when we scroll past one full set of items
            if (nextPos <= -trackWidth) {
              nextPos += trackWidth;
            } else if (nextPos > 0) {
              nextPos -= trackWidth;
            }
          }
          return nextPos;
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging, expandedIndex]);

  const handleWheel = (e: React.WheelEvent) => {
    // Only react to horizontal scroll (e.g. trackpad swipe), ignore vertical
    if (Math.abs(e.deltaX) < 1) return;
    
    const scrollAmount = e.deltaX * 1.5;

    setScrollPos((prev) => {
      let nextPos = prev - scrollAmount;
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth / 3;
        if (nextPos <= -trackWidth) {
          nextPos += trackWidth;
        } else if (nextPos > 0) {
          nextPos -= trackWidth;
        }
      }
      return nextPos;
    });
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setStartX("touches" in e ? e.touches[0].clientX : e.clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    const currentX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;
    
    setScrollPos((prev) => {
      let nextPos = prev + diff;
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth / 3;
        if (nextPos <= -trackWidth) {
          nextPos += trackWidth;
        } else if (nextPos > 0) {
          nextPos -= trackWidth;
        }
      }
      return nextPos;
    });
    
    setStartX(currentX);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleCardClick = (index: number) => {
    // Only allow click-to-expand on mobile viewports to prevent conflicts with desktop hover
    if (typeof window !== 'undefined' && window.innerWidth > 768) return;

    if (expandedIndex === index) {
      setExpandedIndex(null); // Toggle off if clicking same card
      setIsHovered(false); // Resume auto-scroll on mobile (mouseenter sticks on touch devices)
    } else {
      setExpandedIndex(index);
    }
  };

  // Subtle magnetic cursor-follow effect on hovered overlay cards
  const handleCardMouseMove = useCallback((e: React.MouseEvent, index: number) => {
    const overlay = overlayRefs.current.get(index);
    if (!overlay) return;

    const rect = overlay.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // How far cursor is from center, normalized to -1..1
    const offsetX = (e.clientX - centerX) / (rect.width / 2);
    const offsetY = (e.clientY - centerY) / (rect.height / 2);

    // Subtle movement: max ±6px horizontal, ±4px vertical
    const moveX = offsetX * 6;
    const moveY = offsetY * 4;

    overlay.style.transform = `translate(calc(-50% + ${moveX}px), calc(-10px + ${moveY}px))`;
  }, []);

  const handleCardMouseLeave = useCallback((index: number) => {
    const overlay = overlayRefs.current.get(index);
    if (!overlay) return;
    // Reset to default hover position
    overlay.style.transform = '';
  }, []);

  return (
    <section id="technologies" className={styles.technologiesSection}>
      <SectionBadge title={t("header")} />

      <div 
        className={styles.marqueeContainer}
        onWheel={handleWheel}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={() => handleDragEnd()}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        <div 
          className={styles.marqueeTrack}
          ref={trackRef}
          style={{ transform: `translate3d(${scrollPos}px, 0, 0)` }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setExpandedIndex(null);
          }}
        >
          {marqueeItems.map((tech, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <div 
                key={`${tech.name}-${index}`}
                className={styles.techCardContainer}
                onClick={() => handleCardClick(index)}
                onMouseMove={(e) => handleCardMouseMove(e, index)}
                onMouseLeave={() => handleCardMouseLeave(index)}
              >
                {/* The main card that stays in the flex layout */}
                <div 
                  className={styles.techCardBase}
                  style={{
                    borderColor: isExpanded ? tech.color.replace("0.2", "0.6") : undefined,
                    boxShadow: isExpanded ? `0 8px 30px ${tech.color}` : undefined,
                    opacity: isExpanded ? 0 : undefined // Hide base content if overlay is active
                  }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.iconContainer} style={{ backgroundColor: tech.color }}>
                      {tech.icon}
                    </div>
                    <span className={styles.categoryBadge}>{tech.category}</span>
                  </div>
                  <h3 className={styles.techName}>{tech.name}</h3>
                </div>

                {/* The overlay card that pops up on hover (absolute positioned) */}
                <div 
                  ref={(el) => { if (el) overlayRefs.current.set(index, el); }}
                  className={`${styles.techCardOverlay} ${isExpanded ? styles.expanded : ''}`}
                  style={{
                    borderColor: tech.color.replace("0.2", "0.6"),
                    boxShadow: `0 8px 30px ${tech.color}`,
                  }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.iconContainer} style={{ backgroundColor: tech.color }}>
                      {tech.icon}
                    </div>
                    <span className={styles.categoryBadge}>{tech.category}</span>
                  </div>
                  <h3 className={styles.techName}>{tech.name}</h3>
                  <div className={styles.cardDescWrapper}>
                    <p className={styles.techDesc}>{tech.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
