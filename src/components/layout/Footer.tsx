import styles from "./Footer.module.css";

const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Documentation", "API"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Community", "Guides", "Templates", "Support"],
  Legal: ["Privacy", "Terms", "Security", "GDPR"],
};

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.topLine} />
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>⬡</span>
              <span className={styles.logoText}>Startr</span>
            </div>
            <p className={styles.tagline}>
              Build the future, ship at light speed.
            </p>
            <div className={styles.socials}>
              {["𝕏", "◉", "▶", "⬡"].map((icon, i) => (
                <a key={i} href="#" className={styles.socialIcon} aria-label="Social link">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className={styles.column}>
              <h4 className={styles.columnTitle}>{title}</h4>
              <ul className={styles.columnLinks}>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Startr. All rights reserved.
            </p>
            <p className={styles.credits}>
              Built by <span className={styles.creditHighlight}>Akhil Tellapally</span> and team
            </p>
          </div>
          <div className={styles.status}>
            <span className={styles.statusDot} />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
