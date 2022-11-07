import React from "react";
import LabCardElement from "./LabCardElement";
import styles from "../../styles/component/labCards.module.scss";

const LabCards:React.FC = () =>{
    return(
        <div className={styles.labCards}>
            <LabCardElement img="test.png" caption="New Survey Form" desc="This is the description area" />
            <LabCardElement img="test.png" caption="New Survey Form" desc="This is the description area" />
            <LabCardElement img="test.png" caption="New Survey Form" desc="This is the description area" />
            <LabCardElement img="test.png" caption="New Survey Form" desc="This is the description area" />
            <LabCardElement img="test.png" caption="New Survey Form" desc="This is the description area" />
            <LabCardElement img="test.png" caption="New Survey Form" desc="This is the description area" />
        </div>
    )
}

export default LabCards;