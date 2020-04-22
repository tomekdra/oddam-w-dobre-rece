import React, {useState} from "react";

const ContactUsInputs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        const errors = [];
        const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        if (name.length < 3) {
            errors.push('Imię jest za krótkie.');
            document.querySelector('input[name=\'name\']').classList.add('error');
            document.querySelector('.error-name').innerText = "Podane imię jest nieprawidłowe!";
        } else {
            document.querySelector('input[name=\'name\']').classList.remove('error');
            document.querySelector('.error-name').innerText = "";
        }

        if (email.length < 5 || !regEmail.test(email)) {
            errors.push('Email jest nieprawidlowy');
            document.querySelector('input[name=\'email\']').classList.add('error');
            document.querySelector('.error-email').innerText = "Podany email jest nieprawidłowy!";
        } else {
            document.querySelector('input[name=\'email\']').classList.remove('error');
            document.querySelector('.error-email').innerText = "";
        }

        if (message.length < 120) {
            errors.push("Wiadomość ma zawierać conajmniej 120 znaków")
            document.querySelector('textarea[name=\'message\']').classList.add('error');
            document.querySelector('.error-message').innerText = "Wiadomość musi mieć conajmniej 120 znaków!";
        } else {
            document.querySelector('textarea[name=\'message\']').classList.remove('error');
            document.querySelector('.error-message').innerText = "";
        }

        if (errors.length > 0) {
            console.log(errors)
        } else {
            console.log("Wyslano")
            document.querySelector('.succes-send').innerText = "Wiadomość została wysłana \n Wkrótce się skontaktujemy."
        }

    }

    return (
        <form onSubmit={handleSubmit} className={"contact-form"}>
            <div className={"half-page"}>
                <label>Wpisz swoje imię</label>
                <input type="text" name={"name"} placeholder={"Podaj imię"} className={"input-text"}
                       onChange={e => setName(e.target.value)}/>
                <div className={"error-name"}></div>
            </div>
            <div className={"half-page"}>
                <label>Wpisz swój email</label>
                <input type="email" name={"email"} placeholder={"adres@email"} className={"input-text"}
                       onChange={e => setEmail(e.target.value)}/>
                <div className={"error-email"}></div>
            </div>
            <div className={"textarea"}>
                <label>Wpisz swoją wiadomość</label>
                <textarea name="message"
                          placeholder={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, repellat?"}
                          className={"input-text"} rows={"5"} onChange={e => setMessage(e.target.value)}/>
                <div className={"error-message"}></div>
            </div>
            <div>
                <input type="submit" value={"Wyślij"} className={"button"}/>
            </div>
        </form>
    )
}

export default ContactUsInputs;