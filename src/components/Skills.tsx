"use client";

import { useFadeUp } from "./useFadeUp";
import styles from "./Skills.module.css";
import shared from "./shared.module.css";

const skillGroups = [
  {
    title: "AI & ML",
    tags: ["Deep Learning", "CNN", "TensorFlow", "RNN", "Computer Vision"],
  },
  {
    title: "Programming",
    tags: ["Python", "C++"],
  },
  {
    title: "Web Development",
    tags: ["React.js", "Node.js", "TypeScript", "MySQL", "Bootstrap", "WordPress"],
  },
  {
    title: "Cloud & DevOps",
    tags: ["AWS", "Docker", "Kubernetes", "Tableau"],
  },
  {
    title: "Hardware",
    tags: ["STM32", "Arduino", "Raspberry Pi", "Orange Pi"],
  },
];

function SkillCard({ title, tags, delay }: { title: string; tags: string[]; delay: number }) {
  const { ref, visible } = useFadeUp(delay);
  return (
    <div ref={ref} className={`${styles.card} ${shared.fadeUp} ${visible ? shared.visible : ""}`}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.tags}>
        {tags.map((t) => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const label = useFadeUp(0);
  const title = useFadeUp(80);

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <p
          ref={label.ref}
          className={`${shared.sectionLabel} ${shared.fadeUp} ${label.visible ? shared.visible : ""}`}
        >
          What I work with
        </p>
        <h2
          ref={title.ref}
          className={`${shared.sectionTitle} ${shared.fadeUp} ${title.visible ? shared.visible : ""}`}
        >
          Skills &amp; Toolkit
        </h2>
        <div className={styles.grid}>
          {skillGroups.map((g, i) => (
            <SkillCard key={g.title} title={g.title} tags={g.tags} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
