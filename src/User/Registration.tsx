import react, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import '../Styleguide.css';
import './Registration.css'
import {Link} from 'react-router-dom';

export default function RegistrationForm({props}:{props:any}) {

    const [login, setLogin] = useState<boolean>(true);
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");

    function DisplayForm() {
        return (
            <Form.Group className="mainForm">
                <div className="element">
                    <label className="formLabel">gebruikersnaam
                    <input
                            type="text"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                            required />
                    </label>
                </div>
                <div className="element">
                    <label className="formLabel">wachtwoord
                    <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            required />
                    </label>
                </div>
                {login ? null : <>
                    <div className="element">
                        <label className="formLabel">wachtwoord opnieuw
                    <input
                                type="text"
                                value={password2}
                                onChange={(e) => {
                                    setPassword2(e.target.value)
                                }}
                                required />
                        </label>
                    </div>
                    <div className="element">
                        <label className="formLabel">email
                    <input
                                type="text"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                required />
                        </label>
                    </div>
                </>}
            </Form.Group>
        )
    }
    function DisplayButtons() {
        return login ? (
            <>
                <button className="btnSmall btnNormal">Inloggen</button>
                <div>
                    <a className="hyperLink"
                    onClick={(e) => {
                        setLogin(false)
                    }}>Nog geen gebruiker?</a>
                </div>
            </>)
            : <>
            <button className="btnSmall btnNormal">Registreer</button>
            <div>
                    <a className="hyperLink"
                    onClick={(e) => {
                        setLogin(true)
                    }}>Heeft u al een account?</a>
                </div>
            </>
    }

    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            if (login) {
                const payload = { username, password };
                axios.post(`http://localhost:8080/api/Login/post/loginInfo`, payload)
                    .then(res => {
                        localStorage.setItem("userId", res.data);
                        // iId.setId(res.data);
                        props();
                        window.location.href = 'http://localhost:3000/Advice';
                    })
                    .catch(() => {
                        alert("Uw inloggegevens waren incorrect");
                    })
                    
            } else {
                if (password === password2) {
                    const payload = { username, email, password };
                    axios.post(`http://localhost:8080/api/register/post/accountInfo`, payload)
                        .then(res => {
                            // iId.setId(res.data);
                            props();
                            window.location.href = 'http://localhost:3000/Registration';
                        })
                    setLogin(true);
                } else {
                    alert("Uw wachtwoorden komen niet met elkaar overeen");
                }
            }
        }}>
            <div>
                {DisplayForm()}
            </div>
            <div>
                {DisplayButtons()}
            </div>
        </Form>
    );
}