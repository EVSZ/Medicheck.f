import react from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../NavBar/Navbar.css';
import LOGO from './Logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface NavigationBarProps {

}

export default function NavigationBar() {
    return (
        <nav className="mainContainer">
            <div className="content">
                <div className="Logo">
                    <img src={LOGO} alt="error" />
                </div>
                {/* <div className="LoginButton">
                    <Link to="/Registration">
                        <button id="userLogin" className="btnImageOutline"><FontAwesomeIcon style={{ width: "75px", height: "75px" }} icon={["fas", "user"]} /></button>
                    </Link>
                </div> */}
            </div>
        </nav>
    );
}
