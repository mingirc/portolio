import React, {useState} from "react";
import NavigationElement from "./NavigationElement";
import MobileNavigationButton from "./MobileNavigationButton";
import styles from "../../styles/component/mobileNavigation.module.scss";
import Logo from "../Logo";
import SocialMedia from "../SocialMedia";



const MobileNavigation:React.FC = () => {

    const [toggle, setToggle] = useState(false) 

    return(
        <>
            <MobileNavigationButton toggle={toggle} setToggle={setToggle}/>
            <div className={`${styles.mobileNavigationContainer} ${toggle && styles.navToggle}`}> 
                
                <div className={styles.mobileLogoContainer}>
                <Logo styles={styles} id="mobileLogo" />
                </div>
                <div className={styles.navigationGroupContainer}>
                    <SocialMedia type="mobile" styles={styles} resume />
                    <div className={styles.navigationElements}>
                        <NavigationElement label="Home" to="home" setToggle={setToggle} />
                        <NavigationElement label="About" to="about" setToggle={setToggle} />
                        <NavigationElement label="Portfolio" to="portfolio" setToggle={setToggle} />
                        {/* <NavigationElement label="Lab" to="lab" setToggle={setToggle} /> */}
                        <NavigationElement label="Contact" to="contact" setToggle={setToggle} />
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default MobileNavigation;