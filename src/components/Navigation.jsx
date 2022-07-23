import { Link } from "react-router-dom";

export default function Navigation() {
    return (
           <div>
             <nav>
                <ul>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/Date'>
                            Data
                        </Link>
                    </li>
                    <li>
                        <Link to='/Maps'>
                            Maps
                        </Link>
                    </li>
                    <li>
                        <Link to='/Contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
           </div>
    );
}