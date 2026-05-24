"use client";

import { useFadeUp } from "./useFadeUp";
import styles from "./Education.module.css";
import shared from "./shared.module.css";

const GradIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/>
    <path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>
  </svg>
);

const education = [
  { degree: "BS Computer Engineering", inst: "ITU Lahore", meta: "CGPA 3.34 · 2022 – 2026" },
  { degree: "ICS — Intermediate in Computer Science", inst: "PGC Lahore", meta: "Grade A+ · 2020 – 2022" },
];

function EduCard({ degree, inst, meta, delay }: { degree: string; inst: string; meta: string; delay: number }) {
  const { ref, visible } = useFadeUp(delay);
  return (
    <div ref={ref} className={`${styles.card} ${shared.fadeUp} ${visible ? shared.visible : ""}`}>
      <div className={styles.icon}><GradIcon /></div>
      <div>
        <h3 className={styles.degree}>{degree}</h3>
        <p className={styles.inst}>{inst}</p>
        <p className={styles.meta}>{meta}</p>
      </div>
    </div>
  );
}

export default function Education() {
  const label = useFadeUp(0);
  const title = useFadeUp(80);

  return (
    <section id="education" className={styles.section}>
      <div className={styles.inner}>
        <p ref={label.ref} className={`${shared.sectionLabel} ${shared.fadeUp} ${label.visible ? shared.visible : ""}`}>
          Academics
        </p>
        <h2 ref={title.ref} className={`${shared.sectionTitle} ${shared.fadeUp} ${title.visible ? shared.visible : ""}`}>
          Education
        </h2>
        <div className={styles.grid}>
          {education.map((e, i) => (
            <EduCard key={e.degree} {...e} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
