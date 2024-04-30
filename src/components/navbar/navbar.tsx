"use client";

import styles from "./navbar.module.scss";
import { motion } from "framer-motion";
import { useSelectedLayoutSegment } from "next/navigation";
import { Nunito } from "next/font/google";
import { Link, usePathname } from "@/navigation";

const titillium = Nunito({
  weight: "700",
  subsets: ["latin"],
});

export default function Navbar({
  linkNames: { home, projects },
}: {
  linkNames: {
    home: string;
    projects: string;
  };
}) {
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
          <NavbarLink href="/">{home}</NavbarLink>
          <NavbarLink href="/projects">{projects}</NavbarLink>
        </ul>
      </motion.nav>
    </motion.nav>
  );
}

function NavbarLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

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
