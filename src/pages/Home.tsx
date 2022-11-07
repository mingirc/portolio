import React from "react";
import Logo from "../components/Logo";
import styles from "../styles/pages/home.module.scss";


const Home:React.FC = () => {
    
    return(
        <div className={styles.container} id="home">
            <Logo styles={styles} id="logo" />
        </div>
    ) 
}

export default Home;