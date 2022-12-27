import "./SocialButton.scss";

interface SocialButtonProps {
  url: string;
  icon?: React.ReactNode;
}

export default function SocialButton({ url, icon }: SocialButtonProps) {
  return (
    <a className="social-button" href={url}>
      {icon}
    </a>
  );
}
