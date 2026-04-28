import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      
      <div className={styles.container}>
        
        {/* Left */}
        <div className={styles.left}>
          <h2>accredian</h2>
          <p>credentials that matter</p>
        </div>

        {/* Middle */}
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Programs</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Right */}
        <div className={styles.contact}>
          <h4>Contact</h4>
          <p>Email: info@accredian.com</p>
          <p>Phone: +91 1234567890</p>
        </div>

      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        © 2026 Accredian. All rights reserved.
      </div>

    </footer>
  );
}