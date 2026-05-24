import styles from "./Hero.module.css";
import shared from "./shared.module.css";

const RESUME_LINK =
  "https://drive.google.com/file/d/1Bpx2DbKEvmsusuazI-7IN13Lgj5EyD7x/view";

export default function Hero() {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.heroBg} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Graduating ITU Lahore · 2026
        </div>

        <h1 className={styles.name}>
          Hi, I&apos;m<br />Rameeza Rahim.
        </h1>

        <p className={styles.title}>
          Computer Engineer · AI/ML &amp; Full-Stack Developer
        </p>

        <p className={styles.bio}>
          Computer Engineering student at ITU Lahore with hands-on experience
          in full-stack development and AI/ML engineering. I build
          production-ready web apps and train computer vision models —
          currently benchmarking YOLOv8, YOLOv11, and MobileNet on edge
          devices for my final year project.
        </p>

        <div className={styles.actions}>
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${shared.btn} ${shared.btnPrimary}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>
            </svg>
            Download Resume
          </a>
          <a href="#contact" className={`${shared.btn} ${shared.btnOutline}`}>
            Get in Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
