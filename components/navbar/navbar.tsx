"use client";

import Link from "next/link";
import styles from "./navbar.module.scss";
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
    <motion.nav className={styles.navbar}>
      <motion.nav
        className={styles.navOptions}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Link className={titillium.className} href={"/"}>
          <div className={styles.logoLink}>AP</div>
        </Link>
        <ul className={styles.linkList}>
          <NavbarLink href="/" isActive={pathname === "/"}>
            Home
          </NavbarLink>
          <NavbarLink href="/projects" isActive={pathname === "/projects"}>
            Projects
          </NavbarLink>
        </ul>
      </motion.nav>
    </motion.nav>
  );
}

function NavbarLink({
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
      className={`${styles.navbarLink} ${
        isActive ? styles.navbarLinkActive : ""
      }`}
      href={href}
    >
      {children}
      {isActive ? (
        <motion.div
          className={styles.navbarLinkBackdrop}
          layoutId="activeSection"
          style={{ originY: "0px" }}
        />
      ) : null}
    </Link>
  );
}
