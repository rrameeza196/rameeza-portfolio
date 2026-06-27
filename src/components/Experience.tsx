"use client";

import { useFadeUp } from "./useFadeUp";
import styles from "./Experience.module.css";
import shared from "./shared.module.css";

const experiences = [
  {
    role: "Teaching Assistant – AI & Machine Learning",
    org: "ITU Lahore",
    date: "Sep 2025 – Present",
    desc: "Lead ML lab sessions guiding students through model training, dataset preparation, and debugging of deep learning pipelines; support AI course delivery including assignments, evaluation workflows, and student queries.",
  },
  {
    role: "Full-Stack & Network Support Intern",
    org: "Pink Ribbon Pakistan",
    date: "Jul 2025 – Sep 2025",
    desc: "Built and maintained web applications, assisted in network configuration, and designed user-friendly interfaces.",
  },
  {
    role: "Machine Learning Intern",
    org: "DevelopersHub.co (Remote)",
    date: "Dec 2024 – Feb 2025",
    desc: "Trained and optimized CNN-based models for image classification, implemented preprocessing and evaluation workflows.",
  },
];

function TimelineItem({ role, org, date, desc, delay }: {
  role: string; org: string; date: string; desc: string; delay: number;
}) {
  const { ref, visible } = useFadeUp<HTMLLIElement>(delay);
  return (
    <li ref={ref} className={`${styles.item} ${shared.fadeUp} ${visible ? shared.visible : ""}`}>
      <div className={styles.dot} />
      <div className={styles.meta}>
        <h3 className={styles.role}>{role}</h3>
        <span className={styles.date}>{date}</span>
      </div>
      <p className={styles.org}>{org}</p>
      <p className={styles.desc}>{desc}</p>
    </li>
  );
}

export default function Experience() {
  const label = useFadeUp(0);
  const title = useFadeUp(80);

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <p ref={label.ref} className={`${shared.sectionLabel} ${shared.fadeUp} ${label.visible ? shared.visible : ""}`}>
          Where I&apos;ve been
        </p>
        <h2 ref={title.ref} className={`${shared.sectionTitle} ${shared.fadeUp} ${title.visible ? shared.visible : ""}`}>
          Experience
        </h2>
        <ol className={styles.timeline}>
          {experiences.map((e, i) => (
            <TimelineItem key={i} {...e} delay={i * 100} />
          ))}
        </ol>
      </div>
    </section>
  );
}
