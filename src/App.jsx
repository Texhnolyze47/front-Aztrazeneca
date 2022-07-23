import Navigation from './components/Navigation'
import Cabecero from "./components/cabecero";
import Table from "./components/table";
import SectionButton from './components/sectionbutton';



export default function App(){
    return(

        <div>
             <Cabecero />
            <Navigation />
            <Table />
            <SectionButton />

        </div>

       
    )
}