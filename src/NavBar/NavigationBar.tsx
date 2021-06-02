import react from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../NavBar/Navbar.css';

export interface NavigationBarProps {

}
 
export default function NavigationBar() {
    return ( 
        <nav>
            <ul>
                <Link to="/"><a href="#Home">Home</a></Link>
                <Link to="/Advice"><a href="#Advice">Advice</a></Link>
                <Link to="/Personal"><a href="#User">Personal</a></Link>
                <Link to="/Registration"><Button variant="danger">Login</Button></Link>
            </ul>
        </nav>
     );
}
