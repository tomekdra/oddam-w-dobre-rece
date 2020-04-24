import React, {useState} from "react";

const Login = () => {


    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        const errors = [];

// name validate
        if (name.length < 3) {
            errors.push('Email jest niepoprawny.');
            document.querySelector('input[name=\'email\']').classList.add('error');
            document.querySelector('.error-email').innerText = "Podane imię jest nieprawidłowe!";
        } else {
            document.querySelector('input[name=\'email\']').classList.remove('error');
            document.querySelector('.error-email').innerText = "";
        }

        if (password.length < 6) {
            errors.push('Hasło jest nieprawidłowe');
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

                        <label>Podaj email</label>
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