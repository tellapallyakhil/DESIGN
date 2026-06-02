"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Stats.module.css";

const stats = [
  { value: 99.99, suffix: "%", label: "Uptime SLA", prefix: "" },
  { value: 2.4, suffix: "s", label: "Avg Deploy Time", prefix: "" },
  { value: 150, suffix: "K+", label: "APIs Served Daily", prefix: "" },
  { value: 50, suffix: "ms", label: "Global Latency", prefix: "<" },
];

function AnimatedNumber({
  value,
  suffix,
  prefix,
  active,
}: {
  value: number;
  suffix: string;
  prefix: string;
  active: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) {
        setDisplay(value);
        clearInterval(interval);
      } else {
        setDisplay(current);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [active, value]);

  const formatted =
    value % 1 !== 0 ? display.toFixed(2) : Math.round(display).toString();

  return (
    <span className={styles.statValue}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.stats} ref={sectionRef} id="stats">
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`${styles.card} ${visible ? styles.visible : ""}`}
              style={{ animationDelay: `${i * 0.15}s` }}
              id={`stat-${i}`}
            >
              <AnimatedNumber
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                active={visible}
              />
              <span className={styles.statLabel}>{stat.label}</span>
              <div className={styles.cardLine} />
            </div>
          ))}
        </div>
      </div>
      {/* Divider glow */}
      <div className={styles.topGlow} />
      <div className={styles.bottomGlow} />
    </section>
  );
}
