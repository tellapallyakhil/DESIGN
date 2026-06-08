"use client";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "Shaik and Prasad modernized our entire front-desk operations into the unified HMS Core platform. The real-time occupancy dashboard and automated guest check-in reduced our customer wait times by 60%.",
    name: "Dr. Rajesh Kumar",
    role: "General Manager, Hotel Nallabagam",
    avatar: "RK",
  },
  {
    quote:
      "The HMS Core room allocation engine is incredibly fast and reliable. Our housekeeping staff now coordinates rooms 40% faster, and billing errors have dropped to nearly zero since we went live.",
    name: "Aarav Sharma",
    role: "Director of Operations, Radha Krishna Hotels",
    avatar: "AS",
  },
  {
    quote:
      "Our digital room booking, billing, and guest profiling systems are now fully synchronized through the HMS API layer. The deployment was seamless — our staff picked it up within a day.",
    name: "Ananya Iyer",
    role: "Head of Hospitality Tech, Nallabagam Group",
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
