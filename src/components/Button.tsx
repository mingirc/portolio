import React from "react";
import styleSerializer from "../helpers/styleSerializer";
import styles from "../styles/component/button.module.scss";

interface Props {
    buttonLabel:string
    buttonType:string
    disabled?:boolean
    type: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}

const Button:React.FC<Props> = (props:Props) => {
    const { buttonLabel, buttonType, type, disabled, onClick } = props

    return(
            <button type={type} disabled={disabled} onClick={onClick} className={styleSerializer(styles, buttonType)}>{buttonLabel}</button>
    )
}

export default Button;