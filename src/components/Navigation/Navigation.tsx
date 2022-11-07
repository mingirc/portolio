import React, {useContext} from "react";
import { MobileContext } from "../../context/MobileContext";
import NameLogo from "../svg/NameLogo";
import NavigationElement from "./NavigationElement";
import Button from "../Button";
import externalClick from "../../helpers/externalClickHelper";
import styles from "../../styles/component/navigation.module.scss";

const Navigation:React.FC = () => {
    
    const {mobile} = useContext(MobileContext);

    return(
        <div className={`${styles.navigationContainer} ${mobile && styles.mobile}`}>
            <div className={styles.navigation}>
                <div className={styles.logoWrapper}>
                    <NameLogo id="topNavigationLogo" />
                </div>
                <div className={styles.navElementWrapper} id="navElementWrapper">
                    <NavigationElement label="Home" to="home" />
                    <NavigationElement label="About" to="about" />
                    <NavigationElement label="Portfolio" to="portfolio" />
                    {/* <NavigationElement label="Lab" to="lab" /> */}
                    <NavigationElement label="Contact" to="contact" />
                    <Button type="button" buttonLabel="Resume" buttonType="button button-small" onClick={() => externalClick('../../assets/Cemal_Mingir_Resume.pdf', "self")} />
                </div>
            </div>
        </div>
    )
}

export default Navigation;