import react from 'react';
import { Link } from 'react-router-dom';
import '../NavBar/Navbar.css';

export interface NavigationBarProps {

}
 
const NavigationBar: React.SFC<NavigationBarProps> = () => {
    return ( 
        <nav>
            <ul>
                <Link to="/"><a href="#Home">Home</a></Link>
                <Link to="/Advice"><a href="#Advice">Advice</a></Link>
                <Link to="/Registration"><a href="#User">User</a></Link>
            </ul>
        </nav>
     );
}
 
export default NavigationBar;