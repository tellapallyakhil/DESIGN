"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

const terminalLines = [
  { type: "command", text: "$ startr init my-saas-app" },
  { type: "output", text: "⚡ Scaffolding project..." },
  { type: "output", text: "📦 Installing 47 optimized packages" },
  { type: "output", text: "🧠 AI analyzing project structure..." },
  { type: "success", text: "✓ Auth system generated" },
  { type: "success", text: "✓ Database schema created" },
  { type: "success", text: "✓ API routes configured" },
  { type: "success", text: "✓ CI/CD pipeline ready" },
  { type: "command", text: "$ startr deploy --prod" },
  { type: "output", text: "🚀 Deploying to edge network..." },
  { type: "highlight", text: "✦ Live at https://my-saas-app.startr.dev" },
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
          <span>Now in Public Beta</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14m-7-7 7 7-7 7" />
          </svg>
        </div>

        {/* Glitch Title */}
        <h1 className={styles.title} id="hero-title">
          <span className={styles.titleLine}>Build the Future</span>
          <span className={styles.glitchWrap} data-text="Ship at Light Speed">
            <span className={styles.titleAccent}>Ship at Light Speed</span>
          </span>
        </h1>

        <p className={styles.subtitle} id="hero-subtitle">
          The AI-powered platform that transforms your ideas into production-ready
          products. From concept to launch in{" "}
          <span className={styles.highlight}>minutes, not months.</span>
        </p>

        {/* CTA Group */}
        <div className={styles.ctaGroup}>
          <a href="#cta" className={styles.ctaPrimary} id="hero-cta-primary">
            <span className={styles.ctaText}>Start Building Free</span>
            <span className={styles.ctaIcon}>→</span>
            <span className={styles.ctaShimmer} />
          </a>
          <a href="#features" className={styles.ctaSecondary} id="hero-cta-secondary">
            <span className={styles.playIcon}>▶</span>
            <span>Watch Demo</span>
          </a>
        </div>

        {/* Trust Signals */}
        <div className={styles.trustRow} id="hero-trust">
          <div className={styles.avatarStack}>
            {["🟣", "🔵", "🩷", "🟢", "🟡"].map((dot, i) => (
              <span key={i} className={styles.avatar} style={{ animationDelay: `${i * 0.1}s` }}>
                {dot}
              </span>
            ))}
          </div>
          <p className={styles.trustText}>
            <strong>2,400+</strong> builders already shipping
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
              <span className={styles.termTabIcon}>⬡</span> startr — zsh
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
            <span className={styles.chipLabel}>Deploy Time</span>
            <span className={styles.chipValue}>2.4s</span>
          </div>
        </div>
        <div className={`${styles.chip} ${styles.chip2}`}>
          <span className={styles.chipIcon}>📈</span>
          <div>
            <span className={styles.chipLabel}>Uptime</span>
            <span className={styles.chipValue}>99.99%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
