"use client";
import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Leadership</span>
          <h2 className={styles.title} id="about-section-title">
            Meet Our
            <span className={styles.accent}> Architects</span>
          </h2>
          <p className={styles.subtitle}>
            Senior digital consultants and systems engineers specializing in enterprise web architecture, speed optimization, and secure API integrations.
          </p>
        </div>

        {/* Team Grid */}
        <div className={styles.teamGrid}>
          {/* Shaik Fayaz */}
          <div className={styles.teamCard} id="about-founder">
            <div className={styles.photoWrapper}>
              <div className={styles.photoFrame}>
                <Image
                  src="/images/team/founder.jpeg"
                  alt="Shaik Fayaz - Founder & CEO"
                  width={400}
                  height={480}
                  className={styles.photo}
                  priority
                />
                <div className={styles.photoGlow} />
                <div className={styles.photoBorder} />
              </div>
              <div className={styles.statusChip}>
                <span className={styles.statusDot} />
                <span>Lead Architect</span>
              </div>
            </div>
            <div className={styles.founderInfo}>
              <span className={styles.founderLabel}>Founder & CEO</span>
              <h3 className={styles.founderName}>
                SHAIK FAYAZ
              </h3>
              <div className={styles.founderBio}>
                <p>
                  A passionate enterprise architect and digital strategist dedicated to delivering high-end web solutions. Shaik is obsessed with blending cutting-edge technology with conversion-focused design to help brands stand out.
                </p>
                <p>
                  His vision is simple — <span className={styles.bioHighlight}>
                    remove every technical barrier between your business and its digital growth.
                  </span>
                </p>
              </div>
              <div className={styles.socialRow}>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  LinkedIn <span>↗</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  GitHub <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Prasad Lakakulla */}
          <div className={styles.teamCard} id="about-cofounder">
            <div className={styles.photoWrapper}>
              <div className={styles.photoFrame}>
                <Image
                  src="/images/team/cofounder.jpeg"
                  alt="Prasad Lakakulla - Co-Founder & CTO"
                  width={400}
                  height={480}
                  className={styles.photo}
                  priority
                />
                <div className={styles.photoGlow} />
                <div className={styles.photoBorder} />
              </div>
              <div className={styles.statusChip}>
                <span className={styles.statusDot} />
                <span>Technical Director</span>
              </div>
            </div>
            <div className={styles.founderInfo}>
              <span className={styles.founderLabel}>Co-Founder & CTO</span>
              <h3 className={styles.founderName}>
                PRASAD LAKAKULLA
              </h3>
              <div className={styles.founderBio}>
                <p>
                  A performance-obsessed systems engineer leading our technical engineering divisions. Prasad specializes in server-side Next.js architectures, edge optimization, and database middleware integrations.
                </p>
                <p>
                  His philosophy — <span className={styles.bioHighlight}>
                    if a corporate application takes more than two seconds to load, it is failing your customers.
                  </span>
                </p>
              </div>
              <div className={styles.socialRow}>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  LinkedIn <span>↗</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  GitHub <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
