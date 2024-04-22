import styles from "./experience.module.scss";
import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    company: "Paidwork",
    title: "Intern AI/ML Engineer",
    companyUrl: "https://www.paidwork.com/",
    companyImg: "/paidwork.png",
    location: "Remote, Poland",
    achievements: [
      "Assisted in building a chatbot based on Mistral LLM, which constituted the first line of support for users communicating with the customer service department.",
      "Created and processed datasets by using uncategorized data collected by the company.",
    ],
    startingDate: "June 2022",
    endingDate: "September 2022",
  },
  {
    company: "HTD Health",
    title: "Junior Web Developer",
    companyUrl: "https://htdhealth.com/",
    companyImg:
      "https://htdhealth.com/wp-content/themes/htd/assets/svg/logo-white.svg",
    location: "Łódź, Poland",
    achievements: [
      "Introduced Sentry as a performance measuring and error-tracking tool for the project, which helped with detecting and fixing errors, making the website more reliable.",
      "Prototyped a functionality of automatically creating, filling with data, and sending documents to doctors using DocuSign API, which greatly simplified the process of obtaining documentation for the user.",
      "Developed a ReactJS hook for saving, retrieving, and validating data stored in local storage, improving user experience by persisting form information, even after the website was closed.",
      "Refactored the project to implement accessible and semantic HTML and CSS to comply with WCAG 2.1.",
    ],
    startingDate: "June 2022",
    endingDate: "September 2022",
  },
  {
    company: "HTD Health",
    title: "Intern Web Developer",
    companyUrl: "https://htdhealth.com/",
    companyImg:
      "https://htdhealth.com/wp-content/themes/htd/assets/svg/logo-white.svg",
    location: "Łódź, Poland",
    achievements: [
      "Assisted the engineering team in maintaining and developing a web catalog project.",
      "Ensured code clarity, consistency, and correctness by regularly performing code review of pull requests created by other team members.",
      "Provided on-call technical support, helping with issues that occurred after standard office hours.",
    ],
    startingDate: "June 2022",
    endingDate: "September 2022",
  },
];

export default function Experience() {
  return (
    <section className={styles.experience}>
      <h2 className={styles.header}>Experience</h2>
      {experiences.map((e) => (
        <ExperienceItem {...e} key={e.title + e.company} />
      ))}
    </section>
  );
}

function ExperienceItem({
  company,
  companyUrl,
  companyImg,
  location,
  title,
  achievements,
  startingDate,
  endingDate,
}: {
  company: string;
  title: string;
  companyUrl: string;
  companyImg: string;
  location: string;
  achievements: string[];
  startingDate: string;
  endingDate: string;
}) {
  return (
    <div className={styles.experienceItem}>
      <div className={styles.iconLine}>
        <div className={styles.line} />
        <Link href={companyUrl}>
          <Image
            alt={`${company} logo`}
            className={styles.icon}
            src={companyImg}
            height={32}
            width={32}
          />
        </Link>
      </div>
      <div className={styles.description}>
        <div className={styles.titleDateContainer}>
          <div>
            <div className={styles.title}>{title}</div>
            <div className={styles.company}>
              <Link href={companyUrl}>{company}</Link> &#8226; {location}
            </div>
          </div>
          <div>
            {startingDate} - {endingDate}
          </div>
        </div>
        <ul>
          {achievements.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
