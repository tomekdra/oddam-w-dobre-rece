import React from "react";
import ContactUsInputs from "./ContactUsInputs";


const ContactUs = () => {

    return (
        <div className={"wrapper"}>
            <div className={"contactus"}>
                <div className={"contact-form-img"}/>

                <div className={"contactus-content half-page"}>
                    <div className={"contactus-items"}>
                        <h2>Skontaktuj sie z nami</h2>
                        <div className={"decoration"}/>
                        <div className={"contactus-form"}>
                                <ContactUsInputs />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactUs;