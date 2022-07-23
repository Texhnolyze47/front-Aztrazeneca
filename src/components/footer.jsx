import './footer.css'
function Footer(){
    return(
        <div className="container">
            <footer>
            <div className="title marca">
                <h2 className="title-pink">Clinical Trials</h2>
            </div>
            <div className="text">
                <p>Dirección: Av. las Torres</p>
                <p>Teléfono: 2222222222</p>
                <p>Horario: 10am - 5:00pm</p>
            </div>
            <div className="text">
                <p>Acerca de nosotros</p>
                <p>Aviso Legal</p>
                <p>Política de de cancelación</p>
            </div>
            </footer>
        </div>
    )
}
export default Footer;