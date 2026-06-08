"use client";
import styles from "./LogoMarquee.module.css";

const brands = [
  "Next.js",
  "React",
  "Tailwind",
  "Figma",
  "Stripe",
  "Shopify",
  "Sanity",
  "Supabase",
  "Vercel",
  "AWS",
];

export default function LogoMarquee() {
  const doubled = [...brands, ...brands];

  return (
    <section className={styles.marquee} id="logo-marquee">
      <div className={styles.header}>
        <p className={styles.label}>Technologies and platforms we leverage</p>
      </div>
      <div className={styles.track}>
        <div className={styles.inner}>
          {doubled.map((name, i) => (
            <div key={i} className={styles.logoItem}>
              <span className={styles.logoGlyph}>◆</span>
              <span className={styles.logoName}>{name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.fadeLeft} />
      <div className={styles.fadeRight} />
    </section>
  );
}
