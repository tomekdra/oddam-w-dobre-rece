import React, {useState} from "react";

const Login = () => {


    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        const errors = [];

// name validate
        if (name.length < 3) {
            errors.push('Imię jest za krótkie.');
            document.querySelector('input[name=\'name\']').classList.add('error');
            document.querySelector('.error-name').innerText = "Podane imię jest nieprawidłowe!";
        } else {
            document.querySelector('input[name=\'name\']').classList.remove('error');
            document.querySelector('.error-name').innerText = "";
        }

        if (password.length < 6) {
            errors.push('Email jest nieprawidłowy');
            document.querySelector('input[name=\'password\']').classList.add('error');
            document.querySelector('.error-password').innerText = "Podane hasło jest niepoprawne!";
        } else {
            document.querySelector('input[name=\'password\']').classList.remove('error');
            document.querySelector('.error-password').innerText = "";
        }
    }

    return (
        <div className={"container"}>
            <div className={"login-container"}>
                <div>
                    <h2>Zaloguj się</h2>
                    <div className={"decoration"}/>

                    <form onSubmit={handleSubmit} className={"login-form"}>

                        <label>Wpisz swoje imię</label>
                        <input type="text" name={"email"} placeholder={"Podaj email"} className={"input-text"}
                               onChange={e => setName(e.target.value)}/>
                        <div className={"error-email"}></div>

                        <label>Podaj hasło</label>
                        <input type="password" name={"password"} placeholder={"Podaj hasło"}
                               className={"input-text"}
                               onChange={e => setPassword(e.target.value)}/>
                        <div className={"error-password"}></div>

                        <div>
                            <input type="submit" value={"Wyślij"} className={"button"}/>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;