import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from "./about.module.css";

const milestones = [
  { year: "2024", event: "Idea born — frustrated by slow deployment pipelines" },
  { year: "2024", event: "First prototype built in a weekend hackathon" },
  { year: "2025", event: "Closed pre-seed round, assembled core team" },
  { year: "2025", event: "Private alpha launch — 200 early adopters" },
  { year: "2026", event: "Public beta — 2,400+ builders and counting" },
];

const values = [
  {
    icon: "⚡",
    title: "Speed is a Feature",
    description: "Every millisecond matters. We obsess over performance so our users never have to wait.",
  },
  {
    icon: "🔓",
    title: "Radically Open",
    description: "Transparent roadmap, open source core, and honest communication — always.",
  },
  {
    icon: "🎯",
    title: "Builder-First",
    description: "We build for builders. Every feature is designed by engineers, for engineers.",
  },
  {
    icon: "🌏",
    title: "Global by Default",
    description: "Edge-first architecture means your product is fast for everyone, everywhere.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className={styles.aboutPage}>
        {/* Hero */}
        <section className={styles.hero} id="about-hero">
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
          <div className={styles.container}>
            <span className={styles.eyebrow}>About Us</span>
            <h1 className={styles.heroTitle} id="about-title">
              We&apos;re building the platform
              <br />
              <span className={styles.accent}>we always wanted</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Born from frustration with the status quo. Startr exists because
              shipping software should be exhilarating, not excruciating.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.founder} id="about-team">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>The Team</span>
              <h2 className={styles.sectionTitle}>
                Meet the <span className={styles.accent}>founders</span>
              </h2>
            </div>

            <div className={styles.teamGrid}>
              {/* Founder & CEO */}
              <div className={styles.teamCard} id="about-founder">
                <div className={styles.photoWrapper}>
                  <div className={styles.photoFrame}>
                    <Image
                      src="/images/team/founder.jpeg"
                      alt="Founder & CEO of Startr"
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
                    <span>Building in public</span>
                  </div>
                </div>
                <div className={styles.founderInfo}>
                  <span className={styles.founderLabel}>Founder & CEO</span>
                  <h2 className={styles.founderName} id="founder-name">
                    Anonymous
                  </h2>
                  <div className={styles.founderBio}>
                    <p>
                      A passionate engineer and entrepreneur who believes the best
                      tools should be accessible to every builder — not just
                      well-funded teams at big tech companies.
                    </p>
                    <p>
                      His vision is simple — <span className={styles.bioHighlight}>
                        remove every obstacle between a builder and their shipped product.
                      </span>
                    </p>
                  </div>
                  <div className={styles.socialRow}>
                    <a href="#" className={styles.socialLink} aria-label="Twitter">
                      <span>𝕏</span> Twitter
                    </a>
                    <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                      <span>in</span> LinkedIn
                    </a>
                    <a href="#" className={styles.socialLink} aria-label="GitHub">
                      <span>◉</span> GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Co-Founder & CTO */}
              <div className={styles.teamCard} id="about-cofounder">
                <div className={styles.photoWrapper}>
                  <div className={styles.photoFrame}>
                    <Image
                      src="/images/team/cofounder.jpeg"
                      alt="Co-Founder & CTO of Startr"
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
                    <span>Shipping fast</span>
                  </div>
                </div>
                <div className={styles.founderInfo}>
                  <span className={styles.founderLabel}>Co-Founder & CTO</span>
                  <h2 className={styles.founderName} id="cofounder-name">
                    [Name Coming Soon]
                  </h2>
                  <div className={styles.founderBio}>
                    <p>
                      The engineering mind behind Startr&apos;s lightning-fast
                      infrastructure. Obsessed with developer experience, system
                      design, and pushing the boundaries of what&apos;s possible on the edge.
                    </p>
                    <p>
                      His philosophy — <span className={styles.bioHighlight}>
                        if a developer has to think about infrastructure, we&apos;ve already failed.
                      </span>
                    </p>
                  </div>
                  <div className={styles.socialRow}>
                    <a href="#" className={styles.socialLink} aria-label="Twitter">
                      <span>𝕏</span> Twitter
                    </a>
                    <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                      <span>in</span> LinkedIn
                    </a>
                    <a href="#" className={styles.socialLink} aria-label="GitHub">
                      <span>◉</span> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className={styles.values} id="about-values">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>Our Values</span>
              <h2 className={styles.sectionTitle}>
                What drives <span className={styles.accent}>everything</span> we build
              </h2>
            </div>
            <div className={styles.valuesGrid}>
              {values.map((v, i) => (
                <div
                  key={i}
                  className={styles.valueCard}
                  style={{ animationDelay: `${i * 0.12}s` }}
                  id={`value-${i}`}
                >
                  <span className={styles.valueIcon}>{v.icon}</span>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className={styles.timeline} id="about-timeline">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>Our Journey</span>
              <h2 className={styles.sectionTitle}>
                From idea to <span className={styles.accent}>movement</span>
              </h2>
            </div>
            <div className={styles.timelineTrack}>
              <div className={styles.timelineLine} />
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className={styles.timelineItem}
                  style={{ animationDelay: `${i * 0.15}s` }}
                  id={`milestone-${i}`}
                >
                  <div className={styles.timelineDot}>
                    <span className={styles.timelineDotInner} />
                  </div>
                  <div className={styles.timelineContent}>
                    <span className={styles.timelineYear}>{m.year}</span>
                    <p className={styles.timelineEvent}>{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className={styles.ctaBanner} id="about-cta">
          <div className={styles.container}>
            <div className={styles.ctaCard}>
              <div className={styles.ctaOrb} />
              <h2 className={styles.ctaTitle}>
                Ready to join the <span className={styles.accent}>movement</span>?
              </h2>
              <p className={styles.ctaSubtitle}>
                Start building with Startr today. Free forever for side projects.
              </p>
              <a href="/#cta" className={styles.ctaBtn} id="about-cta-btn">
                Get Started Free
                <span className={styles.ctaShimmer} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
