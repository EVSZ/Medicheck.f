import react, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import '../Styleguide.css';

export default function RegistrationForm() {

    const [login, setLogin] = useState<boolean>(true);
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");

    function DisplayForm() {
        return (
            <Form.Group>
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
                            type="text"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            required />
                    </label>
                </div>
                {login ? null : <>
                    <div className="element">
                        <label className="formLabel">password check
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
                axios.post(`http://localhost:8080/api/Login/post/loginInfo`, { username, password })
                    .then(res => {
                        console.log(res)
                        console.log(res.data)
                    })
            } else {
                if (password === password2) {
                    axios.post(`http://localhost:8080/api/register/post/accountInfo`, { username, email, password })
                        .then(res => {
                            console.log(res);
                            console.log(res.data);
                        })
                } else {
                    console.log("jammer man")
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