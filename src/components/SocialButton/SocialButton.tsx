import "./SocialButton.scss";

interface SocialButtonProps {
  url: string;
  icon?: React.ReactNode;
  ariaLabel: string;
}

export default function SocialButton({
  url,
  icon,
  ariaLabel,
}: SocialButtonProps) {
  return (
    <a className="social-button" aria-label={ariaLabel} href={url}>
      {icon}
    </a>
  );
}
