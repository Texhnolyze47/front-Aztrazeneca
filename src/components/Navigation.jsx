import { Link } from "react-router-dom";
import './Navigation.css';

export default function Navigation() {
    return (
           <div>
             <nav>
                <ul className="listas">
                    <li >
                        <Link className="listas-links" to='/'>
                            Home
                        </Link>
                    </li>
                    <li >
                        <Link className="listas-links" to='/Data'>
                            Data
                        </Link>
                    </li>
                    <li >
                        <Link className="listas-links" to='/Maps'>
                            Maps
                        </Link>
                    </li>
                    <li >
                        <Link className="listas-links"  to='/Contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
           </div>
    );
}