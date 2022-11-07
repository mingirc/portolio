import React from "react";
import SvgSelector from "../svg/SvgSelector";
import styles from "../../styles/component/labCardElement.module.scss";

interface Props{
    img: string,
    caption: string,
    desc: string
}

const LabCardElement:React.FC<Props> = ({img, caption, desc}) => {
    return(
        <div className={styles.cardContainer}>
            <div className={styles.imageWrapper}>
                <img alt="1" src={`../../assets/labcardimages/${img}`} width="256px" />
            </div>
            <div className={styles.descWrapper}>
                <div className={styles.captionWrapper}>
                    <SvgSelector className="arrow" opt="arrow" />
                    {/* <img alt="1" src="../../assets/svg/LabCard_CaptionArrow.svg" width="20px" /> */}
                    <h3>{caption}</h3>
                </div>
                <span className={styles.description}>{desc}</span>
            </div>
        </div>
    )
}

export default LabCardElement;