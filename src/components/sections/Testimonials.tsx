"use client";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "Shaik and Prasad modernized our legacy reservations system into the unified HMS Core. The real-time occupancy updates and automated guest check-in reduced customer wait times by 60%.",
    name: "Dr. Rajesh Kumar",
    role: "CIO, Taj Hotels & Resorts",
    avatar: "RK",
  },
  {
    quote:
      "The HMS Core room allocation module is incredibly fast. Moving to their Next.js and PostgreSQL engine helped our housekeeping staff coordinate rooms 40% faster.",
    name: "Aarav Sharma",
    role: "Director of Operations, ITC Hotels",
    avatar: "AS",
  },
  {
    quote:
      "Our digital room booking, billing, and guest profiling systems are now fully synchronized via their secure HMS API gateways. The deployment was flawless.",
    name: "Ananya Iyer",
    role: "VP of Digital, Oberoi Group",
    avatar: "AI",
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
