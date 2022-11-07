import React, {useContext} from "react";
import Breakline from "../../helpers/breakline";
import { MobileContext } from "../../context/MobileContext";
import styles from "../../styles/component/portfolioCardElement.module.scss";

interface Props{
    caption?:string,
    description?:string,
    roles?:string,
    links?:React.ReactNode,
    stack?:React.ReactNode,
    img?:string,
    fallbackimg?:string,
    imgtype?:string,
    alt?:string,
    reverse?:boolean
}

const PortfolioCardElement:React.FC<Props> = ({caption, description, roles, links, stack, img, fallbackimg, imgtype, alt, reverse}) => {

    const {mobile} = useContext(MobileContext);

    let containerName=styles.pcContainer;
    reverse && (containerName = styles.pcContainerReverse)
    mobile && (containerName = `${styles.pcContainer} ${styles.mobile}`)

    return(
        <div className={containerName}>
            <div className={styles.pcCaption}>
                {caption}
            </div>
            <div className={styles.pcDesc}>
                <Breakline str={description} />
            </div>
            <div className={styles.pcFooter}>
                <div className={styles.pcRoles}>
                    <span className={styles.rolesCaption}>Roles: </span>{roles}
                </div>
                <div className={styles.pcLinks}>
                    {links}
                </div>
                
            </div>
            <div className={styles.pcImageContainer}>
                <div className={styles.pcImage}>
                    <picture className={styles.portfolioCardPicture}>
                        <source srcSet={img} type={imgtype} />
                        <img src={fallbackimg} alt={alt} className={styles.portfolioCardImg} />
                    </picture>
                </div>
                <div className={styles.pcImageFilter}>
                </div>
            </div>
            <div className={styles.pcStack}>
                {stack}
            </div>
        </div>
    )
}

export default PortfolioCardElement;