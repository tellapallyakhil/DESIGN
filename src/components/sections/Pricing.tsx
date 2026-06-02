"use client";
import styles from "./Pricing.module.css";

const plans = [
  {
    name: "Starter",
    price: "0",
    period: "forever",
    description: "Perfect for side projects and experimentation.",
    features: [
      "3 projects",
      "1GB storage",
      "Community support",
      "Basic analytics",
      "Shared compute",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "29",
    period: "/month",
    description: "For serious builders shipping to production.",
    features: [
      "Unlimited projects",
      "50GB storage",
      "Priority support",
      "Advanced analytics",
      "Dedicated compute",
      "AI Code Engine",
      "Custom domains",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For teams that need enterprise-grade controls.",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "24/7 dedicated support",
      "SOC 2 & HIPAA",
      "SSO & SAML",
      "SLA guarantee",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Pricing</span>
          <h2 className={styles.title} id="pricing-title">
            Simple, transparent
            <span className={styles.accent}> pricing</span>
          </h2>
          <p className={styles.subtitle}>
            Start free. Scale when you&apos;re ready. No hidden fees, no surprises.
          </p>
        </div>

        {/* Cards */}
        <div className={styles.grid} id="pricing-grid">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`${styles.card} ${plan.popular ? styles.popular : ""}`}
              style={{ animationDelay: `${i * 0.15}s` }}
              id={`pricing-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <div className={styles.popularBadge}>
                  <span>Most Popular</span>
                </div>
              )}
              <div className={styles.cardBody}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDesc}>{plan.description}</p>
                <div className={styles.priceRow}>
                  {plan.price !== "Custom" && (
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
