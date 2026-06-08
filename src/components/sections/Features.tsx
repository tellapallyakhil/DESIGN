"use client";
import styles from "./Features.module.css";

const features = [
  {
    icon: "⚡",
    title: "Application Modernization",
    description:
      "Remediate slow legacy platforms. We overhaul frontends to secure 100/100 Core Web Vitals, reducing infrastructure cost and bounce rates.",
    tag: "Performance",
    size: "wide",
    visual: "metrics",
  },
  {
    icon: "💻",
    title: "Bespoke Product Engineering",
    description:
      "Scalable Next.js, React, and TypeScript systems built for high traffic. Formulated with robust state engines and micro-frontends.",
    tag: "Development",
    size: "tall",
    visual: "code",
  },
  {
    icon: "🎨",
    title: "Experience (DX) Design",
    description:
      "Modern UI/UX architectures focusing on high conversion, cohesive brand identity, fluid responsiveness, and motion aesthetics.",
    tag: "Design",
    size: "normal",
    visual: null,
  },
  {
    icon: "🔒",
    title: "Cloud Infrastructure & DevOps",
    description:
      "Secure global multi-region deployments, automated CI/CD pipelines, and cloud orchestration (AWS, Vercel, Azure) with SOC 2 policies.",
    tag: "DevOps",
    size: "normal",
    visual: null,
  },
  {
    icon: "🔌",
    title: "Headless CMS & Middleware",
    description:
      "Integrate headless content managers (Sanity, Contentful) or connect ERP/CRM backends using custom enterprise-grade API layers.",
    tag: "Integrations",
    size: "normal",
    visual: "integrations",
  },
  {
    icon: "📈",
    title: "SEO Engineering & Marketing Tech",
    description:
      "Advanced server-side rendering, schema markup orchestration, and real-time marketing analytics to maximize search discoverability.",
    tag: "Marketing Tech",
    size: "wide",
    visual: "graph",
  },
];

function MiniMetrics() {
  return (
    <div className={styles.miniMetrics}>
      {[72, 45, 88, 56, 94, 38, 80, 62, 91, 70, 55, 85].map((h, i) => (
        <div
          key={i}
          className={styles.bar}
          style={{
            height: `${h}%`,
            animationDelay: `${i * 0.08}s`,
            background: h > 70
              ? "linear-gradient(180deg, var(--neon-pink), rgba(255,45,120,0.3))"
              : "linear-gradient(180deg, var(--neon-purple), rgba(168,85,247,0.2))",
          }}
        />
      ))}
    </div>
  );
}

function MiniCode() {
  const lines = [
    { indent: 0, width: "60%", color: "var(--neon-purple-light)" },
    { indent: 1, width: "75%", color: "var(--text-tertiary)" },
    { indent: 2, width: "50%", color: "var(--neon-pink-light)" },
    { indent: 2, width: "65%", color: "var(--text-tertiary)" },
    { indent: 1, width: "40%", color: "var(--neon-cyan)" },
    { indent: 0, width: "30%", color: "var(--text-tertiary)" },
  ];
  return (
    <div className={styles.miniCode}>
      {lines.map((l, i) => (
        <div
          key={i}
          className={styles.codeLine}
          style={{
            marginLeft: `${l.indent * 14}px`,
            width: l.width,
            background: l.color,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}

function MiniGraph() {
  const points = [20, 35, 25, 55, 45, 70, 60, 85, 75, 95];
  const pathD = points
    .map((y, i) => {
      const x = (i / (points.length - 1)) * 100;
      const yy = 100 - y;
      return `${i === 0 ? "M" : "L"} ${x} ${yy}`;
    })
    .join(" ");

  return (
    <div className={styles.miniGraph}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.graphSvg}>
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--neon-pink)" />
            <stop offset="100%" stopColor="var(--neon-purple)" />
          </linearGradient>
          <linearGradient id="fillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,45,120,0.15)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path d={`${pathD} L 100 100 L 0 100 Z`} fill="url(#fillGrad)" />
        <path d={pathD} fill="none" stroke="url(#lineGrad)" strokeWidth="2" className={styles.graphLine} />
      </svg>
    </div>
  );
}

function MiniIntegrations() {
  const icons = ["⬡", "◈", "◉", "△", "□", "⬢"];
  return (
    <div className={styles.miniIntegrations}>
      {icons.map((icon, i) => (
        <span
          key={i}
          className={styles.intNode}
          style={{ animationDelay: `${i * 0.2}s` }}
        >
          {icon}
        </span>
      ))}
      <div className={styles.intLine} />
    </div>
  );
}

export default function Features() {
  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Consulting & Services</span>
          <h2 className={styles.title} id="features-title">
            Enterprise-grade web
            <span className={styles.accent}> consulting</span>
          </h2>
          <p className={styles.subtitle}>
            We design, build, and optimize high-end digital applications tailored to your marketing objectives and business operations.
          </p>
        </div>

        {/* Bento Grid */}
        <div className={styles.bento} id="features-grid">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`${styles.card} ${styles[`card_${feature.size}`]}`}
              style={{ animationDelay: `${i * 0.1}s` }}
              id={`feature-card-${i}`}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>{feature.icon}</span>
                  <span className={styles.cardTag}>{feature.tag}</span>
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.description}</p>
              </div>
              {/* Mini visuals */}
              {feature.visual === "metrics" && <MiniMetrics />}
              {feature.visual === "code" && <MiniCode />}
              {feature.visual === "graph" && <MiniGraph />}
              {feature.visual === "integrations" && <MiniIntegrations />}
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
