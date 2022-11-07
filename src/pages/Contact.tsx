import React from "react";
import PageContainer from "./PageContainer";
import ContactForm from "../components/ContactForm/ContactForm";

const Contact:React.FC = () => {
    return(
        <PageContainer theme="light" id="contact" name="contact">
            <span className="verticalCaptionText lightCaption">Contact</span>
            <span className="horizontalCaptionText lightCaption">Contact</span>
            <ContactForm />
        </PageContainer>
    )
}

export default Contact;