import React from "react";
import NameLogo from "./svg/NameLogo";
import styles from "../styles/component/footer.module.scss";

const Footer:React.FC = () => {
    return(
        <div className={styles.footerContainer}>
            <div className={styles.lineContainer}>
                <span className={styles.footerText}>
                    Design and developed by
                </span>
                <NameLogo id="footerLogo" small light />
                <span className={styles.footerText}>
                    .
                </span>
            </div>
            <div className={`${styles.lineContainer} ${styles.addBlank}`}>
                <span className={styles.footerText}>All rights reserved ©</span>
            </div>
        </div>
    )
}

export default Footer;