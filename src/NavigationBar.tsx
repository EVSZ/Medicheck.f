export interface NavigationBarProps {

}
 
const NavigationBar: React.SFC<NavigationBarProps> = () => {
    return ( 
        <nav>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#User">User</a></li>
            </ul>
        </nav>
     );
}
 
export default NavigationBar;