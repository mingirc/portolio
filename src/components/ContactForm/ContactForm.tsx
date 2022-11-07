import React, {useState, useRef, useContext, FormEventHandler} from "react";
import FormElement from "./FormElement";
import Button from "../Button";
import inputs from "./inputs";
import styles from "../../styles/component/contactForm.module.scss";
import { MobileContext } from "../../context/MobileContext";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "./axios";


interface Values{
    fullname:string;
    email:string;
    message:string;
}

interface ButtonValues{
    label:string
    disabled:boolean
}

interface Input{
        tagType:string,
        id:string,
        name:string,
        label:string,
        type?:string,
        placeholder:string,
        autoComplete?:string,
        pattern?:string,
        required:boolean,
        rows?:number,
        errorMessage: string
}

const ContactForm:React.FC = () => {

    const formEl = useRef<HTMLFormElement>(null!)
    const messageEl = useRef<HTMLSpanElement>(null!)
    const {mobile} = useContext(MobileContext)
    const reRef = useRef<ReCAPTCHA>(null!)

    const defaultButtonValue = {"label":"Submit", "disabled":false}

    const defaultFormValue = {
        "fullname": "",
        "email": "",
        "message": "",
    }

    const [values, setValues] = useState<Values>(defaultFormValue)
    const [buttonValues, setButonValues] = useState<ButtonValues>(defaultButtonValue);

    const onChange: React.FormEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        setValues({...values, [e.currentTarget.name]:e.currentTarget.value})
    }

    const inputArr = (inputs:Input[]):JSX.Element[] => {
        return inputs.map(input => {
            return <FormElement key={input.id} {...input} value={values[input.name as keyof Values]} label={input.label} onChange={onChange} errorMessage={input.errorMessage} />
        })
    }

    const onSubmit:FormEventHandler = async (e) => {

        e.preventDefault();
        setButonValues({"label":"Submitting...", "disabled":true})
        
        const recaptchaRef = await reRef.current.executeAsync()

        await axios.post("api/sendmail/", {...values, "recaptcha":recaptchaRef})
            .then(_ => {
                setValues(defaultFormValue)
                setButonValues(defaultButtonValue)
                formEl.current.reset()
                reRef.current.reset()
                messageEl.current.style.display = "block";
                setTimeout(() => messageEl.current.style.display = "none", 3000)
        })  

    }   

    return(
        <div className={styles.contactContainer}>
            <form ref={formEl} onSubmit={onSubmit} className={`${styles.formWrapper} ${mobile && styles.mobile}`}>
                {inputArr(inputs)}
                <div className={styles.formFooter}>
                    <div className={styles.messageContainer}>
                        <span className={styles.formMessage} id="formMessage" ref={messageEl}>Your message has been sent.</span> 
                    </div>
                    <ReCAPTCHA ref={reRef} sitekey={process.env.REACT_APP_RECAPTCHA_KEY!} size="invisible" badge="inline" className={styles.recaptcha} />
                    <div className={styles.buttonContainer}>
                        <Button type="submit" buttonLabel={buttonValues.label} buttonType="button button-big" disabled={buttonValues.disabled} /> 
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;