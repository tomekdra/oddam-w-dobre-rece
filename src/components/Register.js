import React, {useState} from "react";

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault();

        const errors = [];

// name validate
        if (email.length < 3) {
            errors.push('Email jest za krótkie.');
            document.querySelector('input[name=\'email\']').classList.add('error');
            document.querySelector('.error-email').innerText = "Podane Email jest nieprawidłowy!";
        } else {
            document.querySelector('input[name=\'email\']').classList.remove('error');
            document.querySelector('.error-email').innerText = "";
        }

        if (password.length < 6) {
            errors.push('Haslo niepoprawne');
            document.querySelector('input[name=\'password\']').classList.add('error');
            document.querySelector('.error-password').innerText = "Podane hasło jest niepoprawne!";
        } else {
            document.querySelector('input[name=\'password\']').classList.remove('error');
            document.querySelector('.error-password').innerText = "";
        }



        if(errors.length > 0) {
            console.log("Bledy brak dzialania")
        } else {
            if (password === validPassword) {
                console.log("ok")
            } else {
                console.log("rozne hasla")
            }
        }
    }

    return (
        <div className={"container"}>
            <div className={"login-container"}>
                <div>
                    <h2>Załóź konto</h2>
                    <div className={"decoration"}/>

                    <form onSubmit={handleSubmit} className={"login-form"}>

                        <label>Wpisz swój email</label>
                    <input type="email" name={"email"} value={email} placeholder={"adres@email"} className={"input-text"}
                           onChange={e => setEmail(e.target.value)}/>
                    <div className={"error-email"}></div>

                        <label>Podaj hasło</label>
                        <input type="password" name={"password"} value={password} placeholder={"Podaj hasło"}
                               className={"input-text"}
                               onChange={e => setPassword(e.target.value)}/>
                        <div className={"error-password"}></div>
                        <label>Powtórz hasło</label>
                        <input type="password" name={"validPassword"} value={validPassword} placeholder={"Podaj ponownie hasło"}
                               className={"input-text"}
                               onChange={e => setValidPassword(e.target.value)}/>
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

export default Register;