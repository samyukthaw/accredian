"use client";
import { useEffect, useState } from "react";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("/api/testimonials")
      .then(res => res.json())
      .then(data => setCompanies(data));
  }, []);

  return (
    <section id="testimonials" className={styles.testimonials}>
      
      <h2>
        Our Proven <span>Partnerships</span>
      </h2>

      <p className={styles.subtitle}>
        Successful Collaborations With the Industry’s Best
      </p>

      <div className={styles.logos}>
        {companies.map((company, index) => (
          <div key={index} className={styles.logo}>
            {company}
          </div>
        ))}
      </div>

    </section>
  );
}