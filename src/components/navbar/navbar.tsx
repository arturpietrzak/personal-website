"use client";

import styles from "./navbar.module.scss";
import { motion } from "framer-motion";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { Nunito } from "next/font/google";
import { Link } from "@/navigation";

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
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="/projects">Projects</NavbarLink>
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