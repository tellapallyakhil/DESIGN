"use client";
import Image from "next/image";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Our Projects</span>
          <h2 className={styles.title} id="projects-section-title">
            Featured
            <span className={styles.accent}> Work</span>
          </h2>
          <p className={styles.subtitle}>
            Explore our architectural excellence through our latest digital transformation project.
          </p>
        </div>

        {/* Featured Project Details */}
        <div className={styles.projectCard}>
          <div className={styles.projectContent}>
            <span className={styles.projectCategory}>Enterprise Software Development</span>
            <h3 className={styles.projectTitle}>HMS Core — Hotel Management System</h3>
            <p className={styles.projectDesc}>
              A comprehensive, multi-region property management platform engineered for a luxury hospitality brand. It unifies reservations, dynamic room assignment logs, guest profiles, POS billing checkpoints, and automated housekeeping dispatch.
            </p>

            {/* Performance outcomes */}
            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <span className={styles.statValue}>60%</span>
                <span className={styles.statLabel}>Faster Check-In</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statValue}>40%</span>
                <span className={styles.statLabel}>Room Turnaround</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statValue}>Real-Time</span>
                <span className={styles.statLabel}>Occupancy Analytics</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className={styles.techWrapper}>
              <span className={styles.techTitle}>Technologies Integrated:</span>
              <div className={styles.techTags}>
                {["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "AWS S3", "Chart.js"].map((tech, i) => (
                  <span key={i} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.projectImageWrapper}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/projects/hotel_dashboard.png"
                alt="HMS Core - Hotel Management System Dashboard"
                width={800}
                height={500}
                className={styles.projectImage}
                priority
              />
              <div className={styles.imageOverlay} />
              <div className={styles.imageGlow} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
