"use client";

import Image from "next/image";
import styles from "./languageOptions.module.scss";
import languageIcon from "/public/icons/language.svg";
import { Link, usePathname } from "@/navigation";
import { useState } from "react";

export default function LanguageOptions() {
  const pathname = usePathname();
  const [extended, setExtended] = useState(false);

  return (
    <div className={styles.languageOptions}>
      <button
        className={`${styles.showOptions} ${
          extended ? styles.showOptionsExtended : ""
        }`}
        onClick={() => {
          setExtended(!extended);
        }}
      >
        <Image
          className={styles.icon}
          priority
          src={languageIcon}
          alt="language"
        />
      </button>
      <menu
        className={`${styles.languageMenu} ${
          extended ? styles.languageMenuExtended : ""
        }`}
      >
        <li>
          <LanguageOption locale="en" pathname={pathname} flag="🇺🇸" />
        </li>
        <li>
          <LanguageOption locale="pl" pathname={pathname} flag="🇵🇱" />
        </li>
      </menu>
    </div>
  );
}

function LanguageOption({
  locale,
  pathname,
  flag,
}: {
  locale: "en" | "pl";
  flag: string;
  pathname: string;
}) {
  return (
    <Link locale={locale} href={pathname} className={styles.flag}>
      {flag}
    </Link>
  );
}
