"use client";

import { useFadeUp } from "./useFadeUp";
import styles from "./Projects.module.css";
import shared from "./shared.module.css";

const GITHUB_USER = "rrameeza196";

const projects = [
  {
    type: "Final Year Project",
    name: "Benchmarking CV Models on Edge Devices",
    desc: "Evaluating YOLOv8, YOLOv11, and MobileNet on Raspberry Pi 4 and Orange Pi 3 LTS — measuring inference time, accuracy, memory, and power consumption.",
    tags: ["YOLOv8", "YOLOv11", "MobileNet", "Raspberry Pi", "Orange Pi"],
    repo: null,
  },
  {
    type: "Human-Computer Interaction",
    name: "Touchless Gesture-Controlled Media Player",
    desc: "Webcam-based hand gesture control for any media player — play/pause, volume, track skip, and mute — using MediaPipe hand-landmark detection and k-NN/SVM/Random Forest classifiers, mapped to system key events via PyAutoGUI.",
    tags: ["MediaPipe", "OpenCV", "k-NN", "SVM", "Random Forest", "PyAutoGUI"],
    repo: "gesture-media-player",
  },
  {
    type: "Full-Stack",
    name: "CineLens – Movie Recommendation Platform",
    desc: "Full-stack app delivering personalized movie recommendations with a Node.js + MySQL REST API backend, integrating the TMDB API for real-time data and deployed on Vercel.",
    tags: ["React.js", "Node.js", "MySQL", "TMDB API"],
    repo: "CineLens",
  },
  {
    type: "Hackathon",
    name: "CodeRush: Fleet Command Simulation",
    desc: "Real-time maritime fleet command simulation built in a team of 3 — a 1 Hz live ship simulator with WebSocket fleet updates, REST API snapshots, and Gemini LLM-powered distress/threat NLP analysis, containerized with Docker Compose.",
    tags: ["MERN", "Socket.io", "Docker", "MongoDB", "Gemini API"],
    repo: null,
  },
  {
    type: "Data Visualization",
    name: "AI Data Analytics Dashboard",
    desc: "Full-stack dashboard ingesting data from public REST APIs, storing it in PostgreSQL, and visualizing trends in real time with interactive React charts.",
    tags: ["React.js", "Python", "PostgreSQL", "REST APIs"],
    repo: null,
  },
  {
    type: "Computer Vision",
    name: "Facial Emotion Detection System",
    desc: "Real-time emotion classifier using OpenCV and TensorFlow with high classification accuracy across multiple emotion categories.",
    tags: ["OpenCV", "TensorFlow", "Python"],
    repo: "Face-Emotion-Detection",
  },
  {
    type: "Full-Stack",
    name: "Makeup E-Commerce Website",
    desc: "Full-stack platform with product catalog, cart, and checkout flow built with React, Node.js, and MySQL.",
    tags: ["React.js", "Node.js", "MySQL"],
    repo: "Makeup_world",
  },
  {
    type: "Embedded",
    name: "Home Automation System",
    desc: "Smart home automation system built around the STM32 microcontroller with real-time device control.",
    tags: ["STM32", "C", "Embedded"],
    repo: null,
  },
  {
    type: "Systems",
    name: "Library Management System",
    desc: "Student and library data management system in C++ with full CRUD and file persistence.",
    tags: ["C++", "OOP"],
    repo: null,
  },
  {
    type: "C++ / JSON",
    name: "Boutique Management & 2048 Game",
    desc: "Boutique inventory manager and a classic 2048 puzzle, both in C++ with JSON data persistence.",
    tags: ["C++", "JSON"],
    repo: "Boutique-management-system",
  },
];

function ProjectCard({ type, name, desc, tags, repo, delay }: {
  type: string; name: string; desc: string; tags: string[]; repo: string | null; delay: number;
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
      {repo && (
        <a
          href={`https://github.com/${GITHUB_USER}/${repo}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.53-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.07.78 2.15 0 1.56-.01 2.81-.01 3.19 0 .31.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
          </svg>
          View on GitHub
        </a>
      )}
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
