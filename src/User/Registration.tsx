import react, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import axios, {AxiosResponse} from 'axios';
import '../Styleguide.css';
import './Registration.css'
import {Link} from 'react-router-dom';
import UserPForm from "./UserPForm";
import {Patient} from "./UserPForm";

export default function RegistrationForm() {

    const [login, setLogin] = useState<boolean>(true);
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");
    const [loginsuccess, setLoginsuccess] = useState<boolean>(false)
    const [Patient, setPatient] = useState<Patient>()


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
                            required/>
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
                            required/>
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
                                required/>
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
                                required/>
                        </label>
                    </div>
                </>}
                {loginsuccess ? true : <>
                    <UserPForm properties={Patient}/>
                </>}
            </Form.Group>
        )
    }

    function GetCookie (cname:string) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function GetPatient(){
        let axios = require('axios');

        axios.get('http://localhost:8080/api/patienten/get')
            .then((resp: AxiosResponse<any>) =>{
                let res = resp.data;
            setPatient(JSON.parse(JSON.stringify(resp.data)))
        });
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
                try{
                    GetCookie("JSESSIONID");
                    setLoginsuccess(true);
                }
                catch(err){

                }
            } else {
                if (password === password2) {
                    axios.post(`http://localhost:8080/api/register/post/accountInfo`, { username, email, password })
                        .then(res => {
                            console.log(res);
                            console.log(res.data);
                        })
                    setLogin(true);
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