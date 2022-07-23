import { Link } from "react-router-dom";

export default function Navigation() {
    return (
            <nav>
                <ul>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/Data'>
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
    );
}