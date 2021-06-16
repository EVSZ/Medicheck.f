import react from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../NavBar/Navbar.css';
import LOGO from './Logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface NavigationBarProps {

}

export default function NavigationBar() {
    let logged: boolean = true;
    return (
        <nav className="mainContainer">
            <div className="content">
                <div className="Logo">
                    <img src={LOGO} alt="error" />
                </div>
                <div className="LoginButton">
                    {localStorage.getItem("userId") === null && logged ? 
                    <Link to="/Registration">
                    <button onClick={() => {logged = false}} id="userLogin" className="btnImageOutline"><FontAwesomeIcon style={{width:"75px", height:"75px"}} icon={["fas", "user"]} /></button>
                </Link> :
                <button className="btnMedium btnOutline" 
                        onClick={() => {
                            localStorage.removeItem("userId")
                            window.location.href = 'http://localhost:3000/Registration';
                        }} >Logout</button>
                    }

                </div>
            </div>
        </nav>
    );
}
