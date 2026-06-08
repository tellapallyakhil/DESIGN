"use client";
import styles from "./Pricing.module.css";

const plans = [
  {
    name: "Modernization Audit",
    price: "Quote",
    period: " / project",
    description: "Deep-dive technical assessment of Core Web Vitals, speed bottlenecks, and search visibility.",
    features: [
      "Lighthouse performance diagnostics",
      "Core Web Vitals gap analysis",
      "Legacy codebase dependency check",
      "Actionable remediation blueprint",
      "Consultation with Lead Architect",
    ],
    cta: "Request Audit Scoping",
    popular: false,
  },
  {
    name: "Bespoke Engineering",
    price: "Custom",
    period: " scoping",
    description: "End-to-end digital product engineering, Next.js architecture, and CMS integrations.",
    features: [
      "Enterprise systems architecture design",
      "Next-generation Next.js engineering",
      "Secure API integration & middleware",
      "Headless CMS setup (Sanity/Shopify)",
      "High-end motion UI & custom branding",
      "3-month post-delivery SLA support",
    ],
    cta: "Schedule Scoping Call",
    popular: true,
  },
  {
    name: "Managed Retainer",
    price: "Retainer",
    period: " / monthly",
    description: "Dedicated engineering team, continuous optimization, and cloud infrastructure management.",
    features: [
      "Dedicated development squad access",
      "Continuous speed & conversion tune-ups",
      "DevOps orchestration (AWS / Vercel)",
      "Weekly security & dependency updates",
      "99.99% uptime SLA guarantee",
      "24/7 critical incident response",
    ],
    cta: "Contact Sales Team",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Engagement Models</span>
          <h2 className={styles.title} id="pricing-title">
            Flexible, transparent
            <span className={styles.accent}> engagements</span>
          </h2>
          <p className={styles.subtitle}>
            SLA-backed professional digital consulting and software engineering tailored to your operational requirements.
          </p>
        </div>

        {/* Cards */}
        <div className={styles.grid} id="pricing-grid">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`${styles.card} ${plan.popular ? styles.popular : ""}`}
              style={{ animationDelay: `${i * 0.15}s` }}
              id={`pricing-${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {plan.popular && (
                <div className={styles.popularBadge}>
                  <span>Recommended</span>
                </div>
              )}
              <div className={styles.cardBody}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDesc}>{plan.description}</p>
                <div className={styles.priceRow}>
                  {!["Custom", "Quote", "Retainer"].includes(plan.price) && (
                    <span className={styles.dollar}>$</span>
                  )}
                  <span className={styles.priceValue}>{plan.price}</span>
                  {plan.period && (
                    <span className={styles.period}>{plan.period}</span>
                  )}
                </div>
                <a
                  href="#cta"
                  className={`${styles.ctaBtn} ${plan.popular ? styles.ctaPrimary : styles.ctaOutline}`}
                >
                  {plan.cta}
                  <span className={plan.popular ? styles.ctaShimmer : ""} />
                </a>
                <ul className={styles.featureList}>
                  {plan.features.map((f, j) => (
                    <li key={j} className={styles.featureItem}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {plan.popular && <div className={styles.cardBorderGlow} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
