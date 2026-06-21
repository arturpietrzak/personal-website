"use client";

import Image from "next/image";
import styles from "./hero.module.scss";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import DownloadCvBtn from "../ui/downloadCvBtn/downloadCvBtn";

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
          <DownloadCvBtn label={t("download-cv")} className={styles.cvBtnOverride} />
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
