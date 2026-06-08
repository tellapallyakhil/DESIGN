"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.inner}>
        {/* Logo */}
        <a href="/" className={styles.logo} id="navbar-logo">
          <span className={styles.logoIcon}>⬡</span>
          <span className={styles.logoText}>Startr</span>
        </a>

        {/* Desktop Links */}
        <ul className={styles.links}>
          <li><a href="/#features" id="nav-features">Services</a></li>
          <li><a href="/#stats" id="nav-stats">Results</a></li>
          <li><a href="/#testimonials" id="nav-testimonials">Testimonials</a></li>
          <li><a href="/#pricing" id="nav-pricing">Packages</a></li>
          <li><a href="/about" id="nav-about">About</a></li>
        </ul>

        {/* CTA */}
        <div className={styles.actions}>
          <a href="/#cta" className={styles.loginBtn} id="nav-login">
            Free Audit
          </a>
          <a href="/#cta" className={styles.ctaBtn} id="nav-get-started">
            Book a Call
            <span className={styles.ctaBtnGlow} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          id="navbar-burger"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu} id="mobile-menu">
          <a href="/#features" onClick={() => setMobileOpen(false)}>Services</a>
          <a href="/#stats" onClick={() => setMobileOpen(false)}>Results</a>
          <a href="/#testimonials" onClick={() => setMobileOpen(false)}>Testimonials</a>
          <a href="/#pricing" onClick={() => setMobileOpen(false)}>Packages</a>
          <a href="/about" onClick={() => setMobileOpen(false)}>About</a>
          <a href="/#cta" className={styles.ctaBtn} onClick={() => setMobileOpen(false)}>
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
