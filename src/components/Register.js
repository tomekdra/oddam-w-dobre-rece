import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState('');
    const [errEmail, setErrEmail] = useState('');
    const [errPassword, setErrPassword] = useState('');


    const handleSubmit = e => {
        e.preventDefault();

        let isValid = true;
// name validate
        if (email.length < 3) {
            setErrEmail("Podane Email jest nieprawidłowy!");
            isValid = false;
        }

//password validate
        if (password.length < 6) {
            setErrPassword("Podane hasło jest niepoprawne!");
            isValid = false;
        }

        if(validPassword !== password) {
            setErrPassword("Hasła różnią sie od siebie");
            isValid = false;
        }

// send or not
        if(isValid) {
            console.log('done');
            setEmail('');
            setPassword('');
            setValidPassword('');
            setErrEmail('');
            setErrPassword('');
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
                    <div className={"error-email"}>{errEmail}</div>

                        <label>Podaj hasło</label>
                        <input type="password" name={"password"} value={password} placeholder={"Podaj hasło"}
                               className={"input-text"}
                               onChange={e => setPassword(e.target.value)}/>
                        <div className={"error-password"}>{errPassword}</div>
                        <label>Powtórz hasło</label>
                        <input type="password" name={"validPassword"} value={validPassword} placeholder={"Podaj ponownie hasło"}
                               className={"input-text"}
                               onChange={e => setValidPassword(e.target.value)}/>
                        <div className={"error-password"}>{errPassword}</div>

                        <div className={"login-buttons"}>
                            <input type="submit" value={"Załóż konto"} className={"button"}/><NavLink to="/logowanie" className={"button"}>Zaloguj </NavLink>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
};

export default Register;