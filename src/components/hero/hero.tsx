"use client";

import Image from "next/image";
import styles from "./hero.module.scss";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("Index.hero");

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        {/* Profile Image with fade-in and subtle float */}
        <motion.div 
          className={styles.profileContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.imageOverlay} />
          <Image
            alt="Artur Pietrzak profile picture"
            src="/profilepic.webp"
            className={styles.profileImage}
            fill
            priority
          />
        </motion.div>

        {/* Small badge */}
        <motion.span 
          className={styles.badge}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t("badge")}
        </motion.span>

        {/* Big Name & Title */}
        <motion.h1 
          className={styles.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t("name")}, <span className={styles.gradientTitle}>{t("title")}</span>
        </motion.h1>

        {/* Subtitle / Bio summary */}
        {t("subtitle") && (
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t("subtitle")}
          </motion.p>
        )}

        {/* Action Buttons */}
        <motion.div 
          className={styles.actions}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className={styles.primaryBtn}
          >
            {t("learn-more")}
          </button>
          <a 
            href="/Artur_Pietrzak_CV.pdf" 
            download="Artur_Pietrzak_CV.pdf" 
            className={styles.secondaryBtn}
            aria-label="Download Artur Pietrzak's CV as PDF"
          >
            <svg 
              className={styles.downloadIcon} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
              width={18}
              height={18}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {t("download-cv")}
          </a>
        </motion.div>

      </div>

      {/* Floating indicator */}
      <div className={styles.scrollIndicator}>
        <motion.div 
          className={styles.mouse}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <span className={styles.wheel} />
        </motion.div>
      </div>
    </section>
  );
}
