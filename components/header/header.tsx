"use client";

import Link from "next/link";
import styles from "./header.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Nunito } from "next/font/google";

const titillium = Nunito({
  weight: "700",
  subsets: ["latin"],
});

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav className={styles.navOptions}>
          <div className={styles.logoLink}>
            <Link className={titillium.className} href={"/"}>
              AP
            </Link>
          </div>
          <ul className={styles.linkList}>
            <HeaderLink href="/" isActive={pathname === "/"}>
              Home
            </HeaderLink>
            <HeaderLink href="/projects" isActive={pathname === "/projects"}>
              Projects
            </HeaderLink>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}

function HeaderLink({
  children,
  href,
  isActive,
}: {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}) {
  return (
    <Link
      className={`${styles.headerLink} ${
        isActive ? styles.headerLinkActive : ""
      }`}
      href={href}
    >
      {children}
      {isActive ? (
        <motion.div
          className={styles.headerLinkBackdrop}
          layoutId="activeSection"
          style={{ originY: "0px" }}
        />
      ) : null}
    </Link>
  );
}
