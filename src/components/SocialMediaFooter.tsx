import React from "react";
import styles from "../styles/component/socialMediaFooter.module.scss";
import SocialMedia from "./SocialMedia";

const SocialMediaFooter:React.FC = () => {
    return <SocialMedia type="footer" styles={styles} />
}

export default SocialMediaFooter;