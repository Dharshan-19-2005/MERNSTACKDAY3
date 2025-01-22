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
            <li><a class="link" href="/">Home</a></li>
            <li><a class="link" href="/About">About</a></li>
            <li><a class="link" href="/Contact">Contact</a></li>
            <li><a class="link" href="/Gallery">Gallery</a></li>
            <li><a class="link" href="/Signup">Signup</a></li>
        </ul>
        </nav>
        </header>
    )
}
export default Navbar;