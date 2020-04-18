import React, {useState} from "react";

const ContactUsInputs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
    e.preventDefault();

    let val = [];
    let isValid = true;

    if(name.length < 3) {
        isValid = false
        val.push('Imię jest za krótkie.');
    }
    if(email.length < 5) {
        isValid = false;
        val.push('Email jest za krótki.');
    }

    if(isValid) {
        console.log("Wyslano")
    } else {
        console.log(val)
    }

}

    return (
        <form onSubmit={handleSubmit} className={"contact-form"}>
            <div className={"half-page"}>
            <label>Wpisz swoje imię</label>
            <input type="text" name={"name"} placeholder={"Podaj imię"} className={"input-text"} onChange={e => setName(e.target.value)}/>
            </div>
            <div className={"half-page"}>
            <label>Wpisz swój email</label>
            <input type="email" name={"email"} placeholder={"adres@email"} className={"input-text"} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className={"textarea"}>
            <label>Wpisz swoją wiadomość</label>
            <textarea name="message" placeholder={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, repellat?"} className={"input-text"} rows={"5"} onChange={e => setMessage(e.target.value)}/>
            </div>
            <div>
            <input type="submit" value={"Wyślij"} className={"button"}/>
            </div>
        </form>
    )
}

export default ContactUsInputs;