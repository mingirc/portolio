import React, {useContext} from 'react';
import { MobileContext } from '../../context/MobileContext';
import styles from "../../styles/component/mobileNavigationButton.module.scss"
import {ReactComponent as MobileNavButton} from "../../assets/svg/mobile/MobileMenu.svg"
import {ReactComponent as MobileNavCloseButton} from "../../assets/svg/mobile/MobileMenuClose.svg"

interface Props{
    toggle: boolean
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNavigationButton:React.FC<Props> = ({toggle, setToggle}:Props) => {

    const {mobile} = useContext(MobileContext);

    const clickHandler = () => {
        toggle ? setToggle(false) : setToggle(true)
    }

    
    return (
        <div className={`${styles.mobileNavButton} ${mobile && styles.mobile} ${toggle && styles.toggle}`} onClick={clickHandler}>
            {toggle ? <MobileNavCloseButton /> : <MobileNavButton />}
        </div>  
    )
}

export default MobileNavigationButton;