import react, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import axios from 'axios';

export default function RegistrationForm(props:any) {

    const [login, setLogin] = useState<boolean>(true);
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword1] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");

    function DisplayForm() {
        if (login) {
            return (
                <Form.Group>
                    <div>
                        <Form.Label>
                            Gebruikersnaam
                </Form.Label>
                    </div>
                    <div>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value)
                                }}
                                required
                            />
                        </InputGroup>
                    </div>
                    <div>
                        <Form.Label>
                            Wachtwoord
                </Form.Label>
                    </div>
                    <div>
                        <InputGroup>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword1(e.target.value)
                                }}
                                required
                            />
                        </InputGroup>
                    </div>
                </Form.Group>
            )
        } else {
            return (
                <Form.Group>
                    <div>
                        <Form.Label>
                            Gebruikersnaam
            </Form.Label>
                    </div>
                    <div>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value)
                                }}
                                required
                            />
                        </InputGroup>
                    </div>
                    <div>
                        <Form.Label>
                            Email
            </Form.Label>
                    </div>
                    <div>
                        <InputGroup>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                required
                            />
                        </InputGroup>
                    </div>
                    <div>
                        <Form.Label>
                            Wachtwoord
            </Form.Label>
                    </div>
                    <div>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                value={password}
                                onChange={(e) => {
                                    setPassword1(e.target.value)
                                }}
                                required
                            />
                        </InputGroup>
                    </div>
                    <div>
                        <Form.Label>
                            Wachtwoord Bevestigen
            </Form.Label>
                    </div>
                    <div>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                value={password2}
                                onChange={(e) => {
                                    setPassword2(e.target.value)
                                }}
                                required
                            />
                        </InputGroup>
                    </div>
                </Form.Group>
            )
        }
    }

    function DisplayButtons() {
        if (login) {
            return (
                <>
                    <div>
                        <Button type="submit">Log-In</Button>
                    </div>
                    <div>
                        <a onClick={(e) => {
                            setLogin(false)
                        }}> Not A User Yet?</a>
                    </div>
                </>
            )
        } else {
            return (
                <div>
                    <Button type="submit">Register</Button>
                </div>
            )
        }
    }
    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            if (login) {
                axios.post(`http://localhost:8080/api/Login/post/loginInfo`, { username, password })
                    .then(res => {
                        console.log(res)
                        console.log(res.data)
                        console.log("ingelogd");
                        
                        props.functionCallFromParent(username, password);
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