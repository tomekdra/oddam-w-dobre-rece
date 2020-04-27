import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errEmail, setErrEmail] = useState('');
    const [errPassword, setErrPassword] = useState('');

    const handleSubmit = e => {

        e.preventDefault();

        let isValid = true;
// name validate
        if (email.length < 3) {
            setErrEmail('Podany email jest niepoprawny');
            isValid = false;
        }

        if (password.length < 6) {
            setErrPassword('Podane hasło jest nieprawidłowe');
            isValid = false;
        }

        if(isValid) {
            console.log("send")
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
                                   onChange={e => setEmail(e.target.value)}/>
                            <div className={"error-email"}>{errEmail}</div>

                            <label>Podaj hasło</label>
                            <input type="password" name={"password"} placeholder={"Podaj hasło"}
                                   className={"input-text"}
                                   onChange={e => setPassword(e.target.value)}/>
                            <div className={"error-password"}>{errPassword}</div>

                            <div className={"login-buttons"}>
                                <input type="submit" value={"Zaloguj"} className={"button"}/><NavLink to="/rejestracja" className={"button"}>Załóż konto</NavLink>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    };

    export default Login;