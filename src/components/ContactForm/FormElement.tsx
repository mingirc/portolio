import React, {useState, useRef, useEffect} from "react";
import styles from "../../styles/component/formElement.module.scss";

interface Props extends React.AllHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>{
    value:string
    label: string
    errorMessage: string
    tagType: string
}

const FormElement: React.FC<Props> = ({value, label, errorMessage, tagType, ...props}:Props) => {

    const {onChange, ...restProps} = props
    const [focused, setFocused] = useState(false)
    const [validity, setValidity] = useState(false)
    const errorMessageEl = useRef<HTMLSpanElement>(null!)
    const inputEl = useRef<HTMLInputElement & HTMLTextAreaElement>(null!)


    useEffect(() => {
        if(focused && !validity){
            errorMessageEl.current.style.display = "block";
        }else {
            errorMessageEl.current.style.display = "none";
        }
    }, [focused, validity])

    const changeHandler:React.FormEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        if(inputEl.current.checkValidity()){
            setValidity(true)
        } else {
            setValidity(false)
        }
        props.onChange && props.onChange(e)
    }

    const handleBlur:React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = () => {
        setFocused(true)
    }

    return(
        <div className={styles.formElement}>
            {
               tagType === "input" && 
               <input className={styles.formInput} ref={inputEl} value={value} onChange={(e) => {changeHandler(e)}} onBlur={handleBlur} {...restProps} />
            }
            {
                tagType === "textarea" && 
                <textarea className={styles.formInput} ref={inputEl} value={value} onChange={(e) => {changeHandler(e)}} onBlur={handleBlur} {...restProps} />
            }
    
            <label htmlFor={props.id} className={styles.formLabel}>{label}</label>
            <span ref={errorMessageEl} className={styles.errorMessage}>{errorMessage}</span>
        </div>
    )
}

export default FormElement;