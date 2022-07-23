import Home from './routes/Home'
import Navigation from './components/Navigation'
import Cabecero from "./components/cabecero";
import Table from "./components/table";

import { Link } from "react-router-dom";


export default function App(){
    return(

        <div>
             <Cabecero />
            <Navigation />
            <Table />
                       
        </div>

       
    )
}