import React, {useState} from "react";

const ContactUsInputs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errName, setErrName] = useState([]);
    const [errEmail, setErrEmail] = useState([]);
    const [errMessage, setErrMessage] = useState([]);
    const [succes, setSucces] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        let isValid = true;
// name validate
        if (name.length < 3) {
            setErrName('Imię jest za krótkie.');
            isValid = false;
        } else {
            setErrName('');
        }

// email validate
        const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email.length < 5 || !regEmail.test(email)) {
            setErrEmail('Email jest nieprawidłowy');
            isValid = false;
        } else {
            setErrEmail('');
        }

// message validate
        if (message.length < 120) {
            setErrMessage("Wiadomość ma zawierać conajmniej 120 znaków");
            isValid = false;
        } else {
            setErrMessage('');
        }

// send or not form

        if (!isValid) {
            console.log("bledy")
        } else {
            setName('');
            setEmail('');
            setMessage('');
            setErrName('');
            setErrEmail('');
            setErrMessage('');
            setSucces("Wiadomość została wysłana. Wkrótce się skontaktujemy.")
        }
    }

    return (
        <form onSubmit={handleSubmit} className={"contact-form"}>
            <div className="succes-send">{succes}</div>
            <div className={"half-page"}>
                <label>Wpisz swoje imię</label>
                <input type="text" name={"name"} value={name} placeholder={"Podaj imię"} className={"input-text"}
                       onChange={e => setName(e.target.value)}/>
                <div className={"error-name"}>{errName}</div>
            </div>
            <div className={"half-page"}>
                <label>Wpisz swój email</label>
                <input type="email" name={"email"} value={email} placeholder={"adres@email"} className={"input-text"}
                       onChange={e => setEmail(e.target.value)}/>
                <div className={"error-email"}>{errEmail}</div>
            </div>
            <div className={"textarea"}>
                <label>Wpisz swoją wiadomość</label>
                <textarea name="message" value={message}
                          placeholder={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, repellat?"}
                          className={"input-text"} rows={"5"} onChange={e => setMessage(e.target.value)}/>
                <div className={"error-message"}>{errMessage}</div>
            </div>
            <div>
                <input type="submit" value={"Wyślij"} className={"button"}/>
            </div>
        </form>
    )
}

export default ContactUsInputs;