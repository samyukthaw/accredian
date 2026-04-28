import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      
      {/* Left (Content) */}
      <div className={styles.left}>
        <h1>
          Next-Gen <span>Expertise</span><br />
          For Your <span>Enterprise</span>
        </h1>

        <p>
          Cultivate high-performance teams through expert learning.
        </p>

        <div className={styles.points}>
          <span>✔ Tailored Solutions</span>
          <span>✔ Industry Insights</span>
          <span>✔ Expert Guidance</span>
        </div>

        <button className={styles.button}>Enquire Now</button>
      </div>

      {/* Right (Image) */}
      <div className={styles.right}>
        <img 
          src="/hero.png" 
          alt="hero" 
        />
      </div>

    </section>
  );
}