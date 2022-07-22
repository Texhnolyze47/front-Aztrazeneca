import './cabecero.css'
import logo from '../assets/tmp-logo-q2.png'

function cabecero(){
    return(
        <div id="nav-bar">
            <header id="cabecero">
                <h1 className='nombre-sitio' >Clinical trials</h1>
                <img className="logo" src={logo}  alt='Logo'></img>
            </header>
        </div>

    );

}

export default cabecero;