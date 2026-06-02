"use client";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta} id="cta">
      <div className={styles.container}>
        <div className={styles.card}>
          {/* Background effects */}
          <div className={styles.bgOrb1} />
          <div className={styles.bgOrb2} />
          <div className={styles.gridOverlay} />

          <div className={styles.content}>
            <span className={styles.eyebrow}>Ready to launch?</span>
            <h2 className={styles.title} id="cta-title">
              Start building the
              <br />
              <span className={styles.accent}>future today</span>
            </h2>
            <p className={styles.subtitle}>
              Join 2,400+ teams already shipping faster with Startr.
              Free to start, no credit card required.
            </p>
            <div className={styles.inputGroup} id="cta-form">
              <div className={styles.inputWrapper}>
                <svg className={styles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.input}
                  id="cta-email-input"
                />
              </div>
              <button className={styles.ctaBtn} id="cta-submit-btn">
                Get Early Access
                <span className={styles.ctaShimmer} />
              </button>
            </div>
            <p className={styles.note}>
              ✦ Free tier includes 3 projects &nbsp;·&nbsp; No credit card required &nbsp;·&nbsp; Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
