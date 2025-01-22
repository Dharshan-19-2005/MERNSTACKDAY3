import {Link} from 'react-router-dom'
import '../../css/Navbar.css';
const Navbar = () => {
    var styling={textDecoration:"underline",
        color:"blue",
        listStyleType:"none",
        textAlign:"center",
    }
    return(
        <header>
        <nav>
        <ul>
            <li><Link class="link" to="/">Home</Link></li>
            <li><Link class="link" to="/About">About</Link></li>
            <li><Link class="link" to="/Contact">Contact</Link></li>
            <li><Link class="link" to="/Gallery">Gallery</Link></li>
            <li><Link class="link" to="/Signup">Signup</Link></li>
        </ul>
        </nav>
        </header>
    )
}
export default Navbar;