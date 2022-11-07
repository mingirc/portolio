import React, {useContext} from "react";
import { Link } from 'react-scroll';
import { MobileContext } from "../../context/MobileContext";
import styles from "../../styles/component/navigationElement.module.scss";


interface Props{
    label: string
    to: string
    setToggle?: React.Dispatch<React.SetStateAction<boolean>>
}

const NavigationElement: React.FC<Props> = ({label, to, setToggle}:Props) => {

    const {mobile} = useContext(MobileContext);

    return(
        <>
            <Link href={to} className={`${styles.element} ${mobile && styles.mobile}`} activeClass={`${mobile ? styles.mobileActive : styles.elementActive} ${mobile && styles.mobile}`} to={to} spy={true} smooth={true} offset={0} duration={500} onClick={() => {setToggle && setToggle(false)}}>
                {label}
            </Link>
        </>
    )
}

export default NavigationElement;