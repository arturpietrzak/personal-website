import React, { useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import "./FadeIn.scss";

interface FadeInProps {
  children: React.ReactNode;
}

export default function FadeIn({ children }: FadeInProps) {
  const fadeInRef = useRef(null);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);

  const { inViewport, enterCount, leaveCount } = useInViewport(
    fadeInRef,
    { rootMargin: "-100px" },
    undefined,
    {
      onEnterViewport: () => {
        setHasEnteredViewport(true);
      },
    }
  );

  return (
    <div
      ref={fadeInRef}
      className={hasEnteredViewport ? "fade-in fade-in--complete" : "fade-in"}
    >
      {children}
    </div>
  );
}
