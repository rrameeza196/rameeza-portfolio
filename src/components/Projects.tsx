"use client";

import { useFadeUp } from "./useFadeUp";
import styles from "./Projects.module.css";
import shared from "./shared.module.css";

const projects = [
  {
    type: "Final Year Project",
    name: "Benchmarking CV Models on Edge Devices",
    desc: "Evaluating YOLOv8, YOLOv11, and MobileNet on Raspberry Pi 4 and Orange Pi 3 LTS — measuring inference time, accuracy, memory, and power consumption.",
    tags: ["YOLOv8", "YOLOv11", "MobileNet", "Raspberry Pi", "Orange Pi"],
  },
  {
    type: "Computer Vision",
    name: "Facial Emotion Detection System",
    desc: "Real-time emotion classifier using OpenCV and TensorFlow with high classification accuracy across multiple emotion categories.",
    tags: ["OpenCV", "TensorFlow", "Python"],
  },
  {
    type: "Full-Stack",
    name: "Makeup E-Commerce Website",
    desc: "Full-stack platform with product catalog, cart, and checkout flow built with React, Node.js, and MySQL.",
    tags: ["React.js", "Node.js", "MySQL"],
  },
  {
    type: "Embedded",
    name: "Home Automation System",
    desc: "Smart home automation system built around the STM32 microcontroller with real-time device control.",
    tags: ["STM32", "C", "Embedded"],
  },
  {
    type: "Systems",
    name: "Library Management System",
    desc: "Student and library data management system in C++ with full CRUD and file persistence.",
    tags: ["C++", "OOP"],
  },
  {
    type: "C++ / JSON",
    name: "Boutique Management & 2048 Game",
    desc: "Boutique inventory manager and a classic 2048 puzzle, both in C++ with JSON data persistence.",
    tags: ["C++", "JSON"],
  },
];

function ProjectCard({ type, name, desc, tags, delay }: {
  type: string; name: string; desc: string; tags: string[]; delay: number;
}) {
  const { ref, visible } = useFadeUp(delay);
  return (
    <div ref={ref} className={`${styles.card} ${shared.fadeUp} ${visible ? shared.visible : ""}`}>
      <span className={styles.type}>{type}</span>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.tags}>
        {tags.map((t) => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const label = useFadeUp(0);
  const title = useFadeUp(80);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <p ref={label.ref} className={`${shared.sectionLabel} ${shared.fadeUp} ${label.visible ? shared.visible : ""}`}>
          Selected work
        </p>
        <h2 ref={title.ref} className={`${shared.sectionTitle} ${shared.fadeUp} ${title.visible ? shared.visible : ""}`}>
          Projects
        </h2>
        <div className={styles.grid}>
          {projects.map((p, i) => (
            <ProjectCard key={p.name} {...p} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
