import './navbar.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Maps from './view/maps'


function Navbar (){
    return(
        <div className='navbar'>
            <ul>
                <li>Home</li>
                <li>Data</li>
                <li>Maps</li>
                <li>Contact</li>
            </ul>
        </div>

    );
}

export default Navbar