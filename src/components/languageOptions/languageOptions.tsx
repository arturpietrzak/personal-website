"use client";

import Image from "next/image";
import styles from "./languageOptions.module.scss";
import languageIcon from "../../../public/icons/language.svg";
import { Link, usePathname } from "@/navigation";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

export default function LanguageOptions() {
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const localesList = [
    { code: "en", flag: "🇺🇸" },
    { code: "pl", flag: "🇵🇱" },
  ] as const;

  return (
    <motion.div
      className={styles.languagePill}
      ref={containerRef}
      initial={{ height: "3rem" }}
      animate={{
        height: isOpen ? "9.5rem" : "3rem",
      }}
      transition={{ type: "spring", stiffness: 350, damping: 30 }}
    >
      {/* Flags container shown when isOpen */}
      <div 
        className={styles.flagsWrapper}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {localesList.map((loc) => {
          const isActive = currentLocale === loc.code;
          return (
            <motion.div
              key={loc.code}
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : -10,
                scale: isOpen ? 1 : 0.8,
              }}
              transition={{ duration: 0.2, delay: isOpen ? 0.05 : 0 }}
              className={styles.flagItem}
            >
              <Link
                locale={loc.code}
                href={pathname}
                onClick={() => setIsOpen(false)}
                className={styles.flagLink}
              >
                <span className={styles.flagEmoji}>{loc.flag}</span>
                {isActive && (
                  <motion.div
                    className={styles.activeIndicator}
                    layoutId="activeLocaleDot"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Trigger Button at the bottom */}
      <button
        className={`${styles.triggerButton} ${isOpen ? styles.triggerButtonActive : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle language menu"
      >
        <Image
          className={styles.globeIcon}
          src={languageIcon}
          alt="language switcher"
        />
      </button>
    </motion.div>
  );
}
