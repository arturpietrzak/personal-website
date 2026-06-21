import styles from "./downloadCvBtn.module.scss";

interface DownloadCvBtnProps {
  label: string;
  className?: string;
}

export default function DownloadCvBtn({ label, className = "" }: DownloadCvBtnProps) {
  return (
    <a
      href="/Artur_Pietrzak_CV.pdf"
      download="Artur_Pietrzak_CV.pdf"
      className={`${styles.secondaryBtn} ${className}`}
      aria-label="Download Artur Pietrzak's CV as PDF"
    >
      <svg
        className={styles.downloadIcon}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        width={18}
        height={18}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      {label}
    </a>
  );
}
