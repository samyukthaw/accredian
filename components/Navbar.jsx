import styles from "./Navbar.module.css";

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            
            <div className={styles.logo}> Accredian 
                <span className={styles.subtext}>credentials that matter</span>
            </div>

            <ul className={styles.links}>

                <li className={styles.active}> 
                    <a href="#home">Home</a>
                </li>

                <li> 
                    <a href="#features">Features</a>
                </li>

                <li> 
                    <a href="#programs">Programs</a>
                </li>

                <li> 
                    <a href="#testimonials">Testimonials</a>
                </li>

                <li>  
                    <a href="#footer">Footer</a>
                </li>
            </ul>

        </nav>
    )
}