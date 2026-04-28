import styles from "./Features.module.css";

export default function Features() {
  return (
    <section id="features" className={styles.features}>

      <h2>
        Our <span>Track Record</span>
      </h2>

      <p className={styles.subtitle}>
        The Numbers Behind Our Success
      </p>

      <div className={styles.stats}>

        <div className={styles.card}>
          <h3>10K+</h3>
          <p>Professionals Trained For Exceptional Career Success</p>
        </div>

        <div className={styles.card}>
          <h3>200+</h3>
          <p>Sessions Delivered With Unmatched Learning Excellence</p>
        </div>

        <div className={styles.card}>
          <h3>5K+</h3>
          <p>Active Learners Engaged In Dynamic Courses</p>
        </div>

      </div>

    </section>
  );
}