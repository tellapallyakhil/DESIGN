import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from "./about.module.css";

const milestones = [
  { year: "2024", event: "Agency founded — starting out with custom website design" },
  { year: "2024", event: "Expanded services to full-stack Next.js and custom web apps" },
  { year: "2025", event: "Pioneered automated conversion & performance optimization audits" },
  { year: "2025", event: "Served 50+ clients globally, driving over $10M in client revenue" },
  { year: "2026", event: "Expanded team to provide end-to-end design, dev, and SEO solutions" },
];

const values = [
  {
    icon: "⚡",
    title: "Performance First",
    description: "Speed dictates conversion. We optimize every pixel so your visitors never wait.",
  },
  {
    icon: "🤝",
    title: "Transparent Partner",
    description: "Honest feedback, detailed timelines, and direct collaboration — always.",
  },
  {
    icon: "🎯",
    title: "Conversion-Focused",
    description: "We design with purpose. Every layout is structured to drive leads, signups, or sales.",
  },
  {
    icon: "🌏",
    title: "Modern Stacks",
    description: "We leverage Next.js, Headless CMS, and edge-first CDN delivery for future-proof sites.",
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
              Crafting digital experiences
              <br />
              <span className={styles.accent}>that demand attention</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Born from a passion for clean code and loading speeds. Startr is a premium digital agency that builds high-end web applications and optimizes Core Web Vitals to elevate your business.
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
                    <span>Lead Architect</span>
                  </div>
                </div>
                <div className={styles.founderInfo}>
                  <span className={styles.founderLabel}>Founder & CEO</span>
                  <h2 className={styles.founderName} id="founder-name">
                    Akhil Tellapally
                  </h2>
                  <div className={styles.founderBio}>
                    <p>
                      A passionate developer and digital strategist dedicated to delivering high-end web solutions. Akhil is obsessed with blending cutting-edge technology with conversion-focused design to help brands stand out.
                    </p>
                    <p>
                      His vision is simple — <span className={styles.bioHighlight}>
                        remove every technical barrier between your business and its digital growth.
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
                    <span>Technical Director</span>
                  </div>
                </div>
                <div className={styles.founderInfo}>
                  <span className={styles.founderLabel}>Co-Founder & CTO</span>
                  <h2 className={styles.founderName} id="cofounder-name">
                    Amrith Sandesh
                  </h2>
                  <div className={styles.founderBio}>
                    <p>
                      A performance-obsessed software engineer leading the agency&apos;s technical initiatives. Amrith specializes in Next.js development, Core Web Vitals optimization, and technical SEO architectures.
                    </p>
                    <p>
                      His philosophy — <span className={styles.bioHighlight}>
                        if a website takes more than two seconds to load, it&apos;s failing your customers.
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
                Ready to launch your <span className={styles.accent}>project</span>?
              </h2>
              <p className={styles.ctaSubtitle}>
                Let&apos;s create a high-performance web experience for your business today.
              </p>
              <a href="/#cta" className={styles.ctaBtn} id="about-cta-btn">
                Request a Consultation
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
