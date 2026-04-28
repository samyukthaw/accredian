import styles from "./Programs.module.css";

export default function Programs() {
  const programs = [
    "Product & Innovation Hub",
    "Gen-AI Mastery",
    "Leadership Elevation",
    "Tech & Data Insights",
    "Operations Excellence",
    "Digital Enterprise",
    "Fintech Innovation Lab",
  ];

  return (
    <section id="programs" className={styles.programs}>
      <h2>
        Our <span>Domain Expertise</span>
      </h2>

      <p className={styles.subtitle}>
        Specialized Programs Designed to Fuel Innovation
      </p>

      <div className={styles.grid}>
        {programs.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>★</div>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}