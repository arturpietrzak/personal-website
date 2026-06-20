import styles from "@/app/page.module.scss";
import TagList from "@/components/tagList/tagList";
import { Link } from "@/navigation";
import { redirect } from "next/navigation";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import githubIcon from "../../../../../public/icons/github.svg";
import Image from "next/image";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectid: string; locale: string }>;
}): Promise<Metadata> {
  const { projectid, locale } = await params;
  const messages = await getMessages();

  /* @ts-ignore */
  if (!messages["ProjectPage"] || messages["ProjectPage"][projectid] === undefined) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: `ProjectPage.${projectid}` });
  const title = t("title");
  const rawDescription = t.raw("description");
  const description = typeof rawDescription === "string"
    ? rawDescription.replace(/<\/?[^>]+(>|$)/g, "")
    : "";

  return {
    title: `${title} | Artur Pietrzak`,
    description,
    openGraph: {
      title: `${title} | Artur Pietrzak`,
      description,
      type: "website",
    },
  };
}

export default async function Project({
  params,
}: {
  params: Promise<{ projectid: string; locale: string }>;
}) {
  const { projectid, locale } = await params;
  setRequestLocale(locale);

  const messages = await getMessages();
  
  /* @ts-ignore */
  if (!messages["ProjectPage"] || messages["ProjectPage"][projectid] === undefined) {
    redirect("/");
  }

  const t = await getTranslations(`ProjectPage.${projectid}`);
  const tGeneral = await getTranslations(`ProjectPage`);
  const tNav = await getTranslations("Navigation");
  
  /* @ts-ignore */
  const tagKeys = Object.keys(messages["ProjectPage"][projectid]["tags"] || {});
  const tags = tagKeys.map((tk) => t(`tags.${tk}`));

  return (
    <main className={styles.main}>
      <div className={styles.projectWrapper}>
        <h1 className={styles.title}>{t("title")}</h1>
        
        <div className={styles.videoWrapper}>
          <iframe
            className={styles.videoIframe}
            src={`https://www.youtube.com/embed/${t("youtube-id")}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={t("title")}
            loading="lazy"
          />
        </div>
        
        <TagList tags={tags} />
        
        <div className={styles.description}>
          {t.rich("description", {
            p: (chunks) => <p className={styles.text}>{chunks}</p>,
            e: (chunks) => <span className={styles.emphasis}>{chunks}</span>,
          })}
        </div>
        
        <Link href={t("github-link")} target="_blank" rel="noopener noreferrer" className={styles.link}>
          <Image
            className={styles.icon}
            src={githubIcon}
            alt="Github"
            width={18}
            height={18}
          />
          {tGeneral("view-project")}
        </Link>
        
        <Link href="/" className={styles.allProjectsLink}>
          <span className={styles.chevron}>‹</span>
          {tNav("home")}
        </Link>
      </div>
    </main>
  );
}
