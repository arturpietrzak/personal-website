import Hero from "@/components/hero/hero";
import styles from "@/app/page.module.scss";
import Experience from "@/components/experience/experience";
import Education from "@/components/education/education";
import Technologies from "@/components/technologies/technologies";
import ProjectCarousel from "@/components/projectCarousel/projectCarousel";
import Contact from "@/components/contact/contact";
import { setRequestLocale } from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className={styles.main}>
      <div className={styles.mainWrapper}>
        <Hero />
        <Experience />
        <Education />
        <ProjectCarousel />
        <Technologies />
        <Contact />
      </div>
    </main>
  );
}
