"use client";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "Startr cut our deployment pipeline from 45 minutes to under 3 seconds. Our engineering velocity increased 10x overnight.",
    name: "Sarah Chen",
    role: "CTO, NexaFlow",
    avatar: "SC",
  },
  {
    quote:
      "The AI code engine is genuinely mind-blowing. It understood our entire monorepo and generated a complete auth system in minutes.",
    name: "Marcus Rivera",
    role: "Lead Engineer, Drift Labs",
    avatar: "MR",
  },
  {
    quote:
      "We scaled from 1K to 2M users without touching infrastructure. Startr's auto-scaling just handled everything seamlessly.",
    name: "Aisha Patel",
    role: "Founder, CloudPeak",
    avatar: "AP",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Testimonials</span>
          <h2 className={styles.title} id="testimonials-title">
            Loved by builders
            <span className={styles.accent}> worldwide</span>
          </h2>
        </div>

        {/* Cards */}
        <div className={styles.grid} id="testimonials-grid">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={styles.card}
              style={{ animationDelay: `${i * 0.15}s` }}
              id={`testimonial-${i}`}
            >
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className={styles.star}>★</span>
                ))}
              </div>
              <blockquote className={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
              <div className={styles.author}>
                <div className={styles.avatarCircle}>
                  <span>{t.avatar}</span>
                </div>
                <div>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </div>
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
