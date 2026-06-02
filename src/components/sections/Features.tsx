"use client";
import styles from "./Features.module.css";

const features = [
  {
    icon: "⚡",
    title: "Lightning Deploy",
    description:
      "Push to production in seconds. Zero-config deployments with edge-first architecture and instant rollbacks.",
    tag: "Core",
    size: "wide",
    visual: "metrics",
  },
  {
    icon: "🧠",
    title: "AI Code Engine",
    description:
      "Generate entire features from natural language. Our AI understands your codebase and writes production-grade code.",
    tag: "AI",
    size: "tall",
    visual: "code",
  },
  {
    icon: "🔒",
    title: "Fort Knox Security",
    description:
      "SOC 2 Type II. E2E encryption, RBAC, audit logs, and automated vulnerability scanning.",
    tag: "Security",
    size: "normal",
    visual: null,
  },
  {
    icon: "📊",
    title: "Real-time Analytics",
    description:
      "Custom dashboards, anomaly detection, and predictive insights powered by ML.",
    tag: "Insights",
    size: "normal",
    visual: null,
  },
  {
    icon: "🔌",
    title: "Universal Integrations",
    description:
      "Connect with 200+ tools. REST, GraphQL, webhooks — your entire stack, unified.",
    tag: "Connect",
    size: "normal",
    visual: "integrations",
  },
  {
    icon: "🚀",
    title: "Auto-Scaling",
    description:
      "From zero to millions. Intelligent auto-scaling adapts to traffic spikes without breaking a sweat.",
    tag: "Scale",
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
          <span className={styles.eyebrow}>Features</span>
          <h2 className={styles.title} id="features-title">
            Everything you need to
            <span className={styles.accent}> dominate</span>
          </h2>
          <p className={styles.subtitle}>
            A complete toolkit engineered for teams who refuse to compromise on
            speed, security, or developer experience.
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
