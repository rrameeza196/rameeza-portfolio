"use client";

import { useFadeUp } from "./useFadeUp";
import styles from "./Contact.module.css";
import shared from "./shared.module.css";

const RESUME_LINK =
  "https://drive.google.com/drive/folders/1TLwqn2Rcy-5stmPU7hOboXNG3h_oI7If";

export default function Contact() {
  const label = useFadeUp(0);
  const heading = useFadeUp(80);
  const sub = useFadeUp(160);
  const actions = useFadeUp(240);

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <p ref={label.ref} className={`${shared.sectionLabel} ${shared.fadeUp} ${label.visible ? shared.visible : ""}`}>
          Get in touch
        </p>
        <h2 ref={heading.ref} className={`${styles.heading} ${shared.fadeUp} ${heading.visible ? shared.visible : ""}`}>
          Let&apos;s build something great.
        </h2>
        <p ref={sub.ref} className={`${styles.sub} ${shared.fadeUp} ${sub.visible ? shared.visible : ""}`}>
          Open to internships, research collaborations, and full-stack or ML
          engineering roles starting 2026.
        </p>
        <div ref={actions.ref} className={`${styles.actions} ${shared.fadeUp} ${actions.visible ? shared.visible : ""}`}>
          <a href="mailto:rrameeza196@gmail.com" className={`${shared.btn} ${shared.btnPrimary}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>
            </svg>
            Email me
          </a>
          <a href="https://linkedin.com/in/rameeza-rahim" target="_blank" rel="noopener noreferrer" className={`${shared.btn} ${shared.btnOutline}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>
          <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer" className={`${shared.btn} ${shared.btnOutline}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>
            </svg>
            Resume
          </a>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>
          © 2026 <span className={styles.footerName}>Rameeza Rahim</span> · Built with care in Lahore.
        </p>
      </footer>
    </section>
  );
}
