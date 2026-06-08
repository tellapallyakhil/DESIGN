"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

const terminalLines = [
  { type: "command", text: "$ startr-architect deploy --enterprise" },
  { type: "output", text: "⚡ Scaffolding secure multi-region architecture..." },
  { type: "output", text: "📦 Connecting AWS load balancers & Redis cache layers" },
  { type: "output", text: "🎨 Compiling corporate design systems & global UI tokens" },
  { type: "success", text: "✓ Enterprise security & SSO auth integrated" },
  { type: "success", text: "✓ Core Web Vitals optimized (Lighthouse: 100)" },
  { type: "success", text: "✓ API middleware & CRM pipeline online" },
  { type: "command", text: "$ startr-architect verify --compliance" },
  { type: "output", text: "🔒 Auditing SOC 2, HIPAA, and GDPR controls..." },
  { type: "success", text: "✓ All governance and security policies validated" },
  { type: "highlight", text: "✦ Deployment complete: https://portal.enterprise.startr.services" },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      heroRef.current.style.setProperty("--mouse-x", `${x}%`);
      heroRef.current.style.setProperty("--mouse-y", `${y}%`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Terminal typing effect
  useEffect(() => {
    if (visibleLines >= terminalLines.length) return;
    const delay = terminalLines[visibleLines]?.type === "command" ? 800 : 350;
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <section className={styles.hero} ref={heroRef} id="hero">
      {/* Animated background */}
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />
      <div className={styles.bgOrb3} />
      <div className={styles.mouseGlow} />
      <div className={styles.scanline} />

      {/* Horizontal neon wires */}
      <div className={styles.neonWire1} />
      <div className={styles.neonWire2} />

      <div className={styles.content}>
        {/* Badge */}
        <div className={styles.badge} id="hero-badge">
          <span className={styles.badgeDot} />
          <span>Enterprise Digital Consulting</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14m-7-7 7 7-7 7" />
          </svg>
        </div>

        {/* Glitch Title */}
        <h1 className={styles.title} id="hero-title">
          <span className={styles.titleLine}>Engineering Scalable</span>
          <span className={styles.glitchWrap} data-text="Digital Transformation">
            <span className={styles.titleAccent}>Digital Transformation</span>
          </span>
        </h1>

        <p className={styles.subtitle} id="hero-subtitle">
          Next-generation web architectures, custom digital product engineering, and technical speed optimization for global enterprises.
        </p>

        {/* CTA Group */}
        <div className={styles.ctaGroup}>
          <a href="#cta" className={styles.ctaPrimary} id="hero-cta-primary">
            <span className={styles.ctaText}>Consult with an Architect</span>
            <span className={styles.ctaIcon}>→</span>
            <span className={styles.ctaShimmer} />
          </a>
          <a href="#features" className={styles.ctaSecondary} id="hero-cta-secondary">
            <span className={styles.playIcon}>✦</span>
            <span>Explore Services</span>
          </a>
        </div>

        {/* Trust Signals */}
        <div className={styles.trustRow} id="hero-trust">
          <div className={styles.avatarStack}>
            {["🌟", "🌟", "🌟", "🌟", "🌟"].map((dot, i) => (
              <span key={i} className={styles.avatar} style={{ animationDelay: `${i * 0.1}s`, border: "none", background: "transparent", fontSize: "0.95rem" }}>
                {dot}
              </span>
            ))}
          </div>
          <p className={styles.trustText}>
            Trusted by <strong>Fortune 500</strong> industry leaders
          </p>
        </div>
      </div>

      {/* Interactive Terminal */}
      <div className={styles.terminalContainer} id="hero-terminal">
        <div className={styles.terminal}>
          <div className={styles.termHeader}>
            <div className={styles.dots}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>
            <span className={styles.termTab}>
              <span className={styles.termTabIcon}>⬡</span> startr-systems — zsh
            </span>
            <div className={styles.termActions}>
              <span className={styles.termAction}>◻</span>
              <span className={styles.termAction}>✕</span>
            </div>
          </div>
          <div className={styles.termBody}>
            {terminalLines.slice(0, visibleLines).map((line, i) => (
              <div
                key={i}
                className={`${styles.termLine} ${styles[`termLine_${line.type}`]}`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {line.text}
              </div>
            ))}
            {visibleLines < terminalLines.length && (
              <span className={styles.cursor}>▊</span>
            )}
            {visibleLines >= terminalLines.length && (
              <div className={styles.termPrompt}>
                <span>$</span>
                <span className={styles.cursor}>▊</span>
              </div>
            )}
          </div>
          {/* Terminal glow */}
          <div className={styles.termGlow} />
        </div>

        {/* Floating Stat Chips */}
        <div className={`${styles.chip} ${styles.chip1}`}>
          <span className={styles.chipIcon}>⚡</span>
          <div>
            <span className={styles.chipLabel}>Architectures Built</span>
            <span className={styles.chipValue}>120+</span>
          </div>
        </div>
        <div className={`${styles.chip} ${styles.chip2}`}>
          <span className={styles.chipIcon}>📈</span>
          <div>
            <span className={styles.chipLabel}>Uptime SLA</span>
            <span className={styles.chipValue}>99.99%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
