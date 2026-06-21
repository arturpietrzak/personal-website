import Hero from "@/components/hero/hero";
import styles from "@/app/page.module.scss";
import Timeline from "@/components/timeline/timeline";
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
        <Timeline 
          namespace="Index.experience" 
          headerKey="experience.header" 
          titleKey="title" 
          subtitleKey="company" 
          urlKey="companyUrl" 
          imgKey="companyImg" 
        />
        <Timeline 
          namespace="Index.education" 
          headerKey="education.header" 
          titleKey="degree" 
          subtitleKey="school" 
          urlKey="universityUrl" 
          imgKey="universityImg" 
        />
        <ProjectCarousel />
        <Technologies />
        <Contact />
      </div>
    </main>
  );
}
