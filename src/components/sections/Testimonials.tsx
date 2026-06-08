"use client";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "Startr Studio successfully modernized our legacy customer portal into a unified Next.js experience. They slashed page load speeds by 70% and delivered a secure, cloud-native architecture on schedule.",
    name: "Sarah Chen",
    role: "CIO, Aventis Global",
    avatar: "SC",
  },
  {
    quote:
      "Their application modernization and performance engineering was a complete game-changer. Our core platform vitals jumped to 100/100, saving us over $40k/mo in server costs while driving organic traffic up by 150%.",
    name: "Marcus Rivera",
    role: "Director of Engineering, Veridian Tech",
    avatar: "MR",
  },
  {
    quote:
      "From architectural design to DevOps automation, Startr delivered a robust, edge-native infrastructure. Their integration of headless CMS modules and ERP middleware was flawless.",
    name: "Aisha Patel",
    role: "Head of Digital Experience, Nova Health",
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
            Trusted by clients
            <span className={styles.accent}> everywhere</span>
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
