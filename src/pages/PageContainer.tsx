import React, { Children, useContext } from "react";
import { MobileContext } from "../context/MobileContext";
import styles from "../styles/pages/pageContainer.module.scss";
import { Element } from 'react-scroll';

interface Props{
    children:React.ReactNode,
    theme:string,
    id:string,
    name:string,
}

const PageContainer:React.FC<Props> = ({children, theme, id, name}) => {
    const childrenArray = Children.toArray(children)
    
    const {mobile} = useContext(MobileContext);

    return(
        <Element name={name}>
            <div className={`${styles.bodyContainer} ${theme === 'dark' ? styles.dark : styles.light} ${mobile && styles.mobile}`} id={id}>
                <div className={styles.pageContainer}>
                    <div className={styles.verticalCaption}>
                        {childrenArray[0]}
                    </div>
                    <div className={styles.horizontalCaption}>
                        {childrenArray[1]}
                    </div>
                    <div className={styles.mainStream}>
                        {childrenArray[2]}
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default PageContainer;