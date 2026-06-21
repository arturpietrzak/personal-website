"use client";

import styles from "./contact.module.scss";
import githubIcon from "../../../public/icons/github.svg";
import emailIcon from "../../../public/icons/email.svg";
import linkedinIcon from "../../../public/icons/linkedin.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useRef, useEffect, useCallback } from "react";
import SectionBadge from "../ui/sectionBadge/sectionBadge";
import DownloadCvBtn from "../ui/downloadCvBtn/downloadCvBtn";

// ── Meteor animation types ──────────────────────────────────────────
interface Meteor {
  x: number;
  y: number;
  speed: number;
  length: number;
  opacity: number;
  lineIndex: number;
}

// ── Constants ────────────────────────────────────────────────────────
const LINE_ANGLE = (30 * Math.PI) / 180; // 30 degrees
const LINE_SPACING = 60; // px between diagonal lines
const LINE_OPACITY = 0.04; // very subtle
const MAX_METEORS = 4;
const METEOR_SPAWN_CHANCE = 0.12; // per frame
const COS = Math.cos(LINE_ANGLE);
const SIN = Math.sin(LINE_ANGLE);

export default function Contact() {
  const t = useTranslations("Index.contact");
  const tHero = useTranslations("Index.hero");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);
  const meteorsRef = useRef<Meteor[]>([]);
  const isVisibleRef = useRef(false);
  const lineCountRef = useRef(0);

  // ── Draw diagonal lines ──────────────────────────────────────────
  const drawLines = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number) => {
      ctx.strokeStyle = `rgba(255, 255, 255, ${LINE_OPACITY})`;
      ctx.lineWidth = 1;

      // Calculate how many lines we need to cover the whole card
      // Lines go from top-right to bottom-left direction
      const diagonal = Math.sqrt(w * w + h * h);
      const count = Math.ceil(diagonal / LINE_SPACING) + 4;
      lineCountRef.current = count;

      for (let i = -count; i <= count; i++) {
        const offset = i * LINE_SPACING;
        // Line perpendicular offset from center
        const cx = w / 2 + offset * COS;
        const cy = h / 2 + offset * -SIN;

        // Extend line far enough to cover card at angle
        const x1 = cx - diagonal * SIN;
        const y1 = cy - diagonal * COS;
        const x2 = cx + diagonal * SIN;
        const y2 = cy + diagonal * COS;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    },
    [],
  );

  // ── Spawn a meteor ───────────────────────────────────────────────
  const spawnMeteor = useCallback((w: number, h: number): Meteor => {
    const diagonal = Math.sqrt(w * w + h * h);
    const count = lineCountRef.current || 10;
    const lineIndex =
      Math.floor(Math.random() * (count * 2 + 1)) - count;
    const offset = lineIndex * LINE_SPACING;

    // Start position: above the visible area along the line
    const cx = w / 2 + offset * COS;
    const cy = h / 2 + offset * -SIN;
    const startT = -(0.3 + Math.random() * 0.3); // start off-screen
    const x = cx + startT * diagonal * SIN;
    const y = cy + startT * diagonal * COS;

    return {
      x,
      y,
      speed: 1.5 + Math.random() * 2.5,
      length: 40 + Math.random() * 80,
      opacity: 0.15 + Math.random() * 0.25,
      lineIndex,
    };
  }, []);

  // ── Animation loop ───────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    const card = cardRef.current;
    if (!canvas || !card) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ── Resize handler ─────────────────────────────────────────────
    const resize = () => {
      const rect = card.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(card);

    // ── Visibility observer ────────────────────────────────────────
    const io = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting && !animFrameRef.current) {
          animFrameRef.current = requestAnimationFrame(loop);
        }
      },
      { threshold: 0 },
    );
    io.observe(card);

    // ── Main render loop ───────────────────────────────────────────
    const loop = () => {
      if (!isVisibleRef.current) {
        animFrameRef.current = 0;
        return;
      }

      const w = canvas.width / (Math.min(window.devicePixelRatio || 1, 2));
      const h = canvas.height / (Math.min(window.devicePixelRatio || 1, 2));

      ctx.clearRect(0, 0, w, h);

      // Draw static diagonal lines
      drawLines(ctx, w, h);

      // Maybe spawn a new meteor (only one per line)
      if (
        meteorsRef.current.length < MAX_METEORS &&
        Math.random() < METEOR_SPAWN_CHANCE
      ) {
        const occupiedLines = new Set(meteorsRef.current.map((m) => m.lineIndex));
        const candidate = spawnMeteor(w, h);
        if (!occupiedLines.has(candidate.lineIndex)) {
          meteorsRef.current.push(candidate);
        }
      }

      // Update & draw meteors
      const diagonal = Math.sqrt(w * w + h * h);
      const surviving: Meteor[] = [];

      for (const m of meteorsRef.current) {
        // Move along the diagonal direction
        m.x += SIN * m.speed;
        m.y += COS * m.speed;

        // Tail position
        const tailX = m.x - SIN * m.length;
        const tailY = m.y - COS * m.length;

        // Check if fully off-screen
        const margin = m.length + 20;
        if (m.x < -margin || m.x > w + margin || m.y < -margin || m.y > h + margin) {
          // Check if tail is also off-screen
          if (tailX < -margin || tailX > w + margin || tailY < -margin || tailY > h + margin) {
            continue; // Remove this meteor
          }
        }

        // Draw meteor with gradient trail
        const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        grad.addColorStop(0, `rgba(59, 130, 246, 0)`);
        grad.addColorStop(0.7, `rgba(59, 130, 246, ${m.opacity * 0.5})`);
        grad.addColorStop(1, `rgba(120, 180, 255, ${m.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Bright head dot
        ctx.beginPath();
        ctx.arc(m.x, m.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 210, 255, ${m.opacity * 0.8})`;
        ctx.fill();

        surviving.push(m);
      }

      meteorsRef.current = surviving;

      animFrameRef.current = requestAnimationFrame(loop);
    };

    // Kick off
    isVisibleRef.current = true;
    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = 0;
      resizeObserver.disconnect();
      io.disconnect();
    };
  }, [drawLines, spawnMeteor]);

  return (
    <section id="contact" className={styles.contactSection}>
      <div ref={cardRef} className={styles.contactCard}>
        <canvas ref={canvasRef} className={styles.meteorCanvas} />

        <SectionBadge title={t("header")} />

        <motion.h2 
          className={styles.ctaTitle}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("cta")} <span className={styles.accentText}>{t("cta-sub")}</span>
        </motion.h2>

        <motion.div 
          className={styles.actionContainer}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a href={`mailto:${t("email")}`} className={styles.emailLinkBtn}>
            <Image className={styles.btnIcon} src={emailIcon} alt="Email icon" width={18} height={18} />
            {t("email")}
          </a>

          <DownloadCvBtn label={tHero("download-cv")} className={styles.cvBtnOverride} />
        </motion.div>

        {/* Social Icons row */}
        <div className={styles.socialRow}>
          <a href={`https://github.com${t("github")}`} target="_blank" rel="noopener noreferrer" className={styles.socialCircle} aria-label="GitHub">
            <Image className={styles.socialIcon} src={githubIcon} alt="Github" width={20} height={20} />
          </a>
          <a href={`https://www.linkedin.com/in${t("linkedin")}`} target="_blank" rel="noopener noreferrer" className={styles.socialCircle} aria-label="LinkedIn">
            <Image className={styles.socialIcon} src={linkedinIcon} alt="Linkedin" width={20} height={20} />
          </a>
        </div>
      </div>

      {/* Copyright Footer */}
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Artur Pietrzak. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
