import React from "react";
import styles from "../styles/component/socialMediaBar.module.scss";
import SocialMedia from "./SocialMedia";

const SocialMediaBar:React.FC = () => {
    return <SocialMedia type="verticalbar" styles={styles} line />
}

export default SocialMediaBar;