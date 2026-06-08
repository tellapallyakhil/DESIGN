"use client";
import { useState } from "react";
import styles from "./CTA.module.css";

// Generate next 5 working days starting tomorrow
const getAvailableDates = () => {
  const dates = [];
  let current = new Date();
  while (dates.length < 5) {
    current.setDate(current.getDate() + 1);
    const day = current.getDay();
    if (day !== 0 && day !== 6) { // Skip weekends
      dates.push(new Date(current));
    }
  }
  return dates;
};

const timeSlots = ["10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM", "5:00 PM"];

export default function CTA() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"email" | "booking" | "success">("email");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dates = getAvailableDates();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/submit-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStep("booking");
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleBookingSubmit = async () => {
    if (!selectedDate || !selectedTime) {
      setError("Please select both a date and a time slot.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/book-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          date: selectedDate,
          timeSlot: selectedTime,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStep("success");
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatDateValue = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  return (
    <section className={styles.cta} id="cta">
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.bgOrb1} />
          <div className={styles.bgOrb2} />
          <div className={styles.gridOverlay} />

          <div className={styles.content}>
            {step === "email" && (
              <>
                <span className={styles.eyebrow}>Let&apos;s build together</span>
                <h2 className={styles.title} id="cta-title">
                  Let&apos;s build something
                  <br />
                  <span className={styles.accent}>exceptional</span>
                </h2>
                <p className={styles.subtitle}>
                  Ready to scale your business with custom web development and performance optimization?
                  Request a free speed and SEO audit to see how we can help.
                </p>
                <form onSubmit={handleEmailSubmit} className={styles.inputGroup} id="cta-form">
                  <div className={styles.inputWrapper}>
                    <svg className={styles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className={styles.input}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="cta-email-input"
                      required
                    />
                  </div>
                  <button type="submit" className={styles.ctaBtn} id="cta-submit-btn" disabled={loading}>
                    {loading ? "Requesting..." : "Request Free Audit"}
                    <span className={styles.ctaShimmer} />
                  </button>
                </form>
                {error && <p className={styles.errorText}>{error}</p>}
                <p className={styles.note}>
                  ✦ Respond within 24 hours &nbsp;·&nbsp; Free technical audit &nbsp;·&nbsp; No obligation
                </p>
              </>
            )}

            {step === "booking" && (
              <div className={styles.bookingFlow}>
                <span className={styles.eyebrow}>Audit Requested</span>
                <h2 className={styles.title}>
                  Book Your <span className={styles.accent}>Consultation</span>
                </h2>
                <p className={styles.subtitle}>
                  We have queued your free site speed audit! Schedule a quick 15-minute consultation to review results and discuss how we can optimize your project.
                </p>

                <div className={styles.scheduler}>
                  {/* Date Picker Grid */}
                  <div className={styles.scheduleSection}>
                    <h4 className={styles.sectionHeading}>Select Date:</h4>
                    <div className={styles.dateGrid}>
                      {dates.map((d, idx) => {
                        const val = formatDateValue(d);
                        const active = selectedDate === val;
                        return (
                          <button
                            key={idx}
                            type="button"
                            className={`${styles.selectCard} ${active ? styles.cardActive : ""}`}
                            onClick={() => setSelectedDate(val)}
                          >
                            <span className={styles.selectLabel}>{d.toLocaleDateString("en-US", { weekday: "short" })}</span>
                            <span className={styles.selectValue}>{d.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Picker Grid */}
                  <div className={styles.scheduleSection}>
                    <h4 className={styles.sectionHeading}>Select Time Slot (Your Local Time):</h4>
                    <div className={styles.timeGrid}>
                      {timeSlots.map((t, idx) => {
                        const active = selectedTime === t;
                        return (
                          <button
                            key={idx}
                            type="button"
                            className={`${styles.selectCard} ${active ? styles.cardActive : ""}`}
                            onClick={() => setSelectedTime(t)}
                          >
                            <span className={styles.timeValue}>{t}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {error && <p className={styles.errorText}>{error}</p>}

                <div className={styles.btnRow}>
                  <button
                    type="button"
                    className={styles.ctaBtnSecondary}
                    onClick={() => setStep("success")}
                  >
                    Skip Booking
                  </button>
                  <button
                    type="button"
                    className={styles.ctaBtn}
                    onClick={handleBookingSubmit}
                    disabled={loading || !selectedDate || !selectedTime}
                  >
                    {loading ? "Scheduling..." : "Confirm Appointment"}
                    <span className={styles.ctaShimmer} />
                  </button>
                </div>
              </div>
            )}

            {step === "success" && (
              <div className={styles.successFlow}>
                <span className={styles.successIcon}>✓</span>
                <h2 className={styles.title}>
                  You&apos;re <span className={styles.accent}>All Set!</span>
                </h2>
                <p className={styles.subtitle}>
                  We have received your email details. {selectedDate && selectedTime ? `Your consultation is booked for ${new Date(selectedDate + "T00:00:00").toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric' })} at ${selectedTime}.` : "We will review your project and get back to you with the technical audit findings shortly."}
                </p>
                <p className={styles.note}>
                  ✦ An email confirmation and Google Meet link have been logged. Check your inbox!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
