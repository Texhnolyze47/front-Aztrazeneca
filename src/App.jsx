import Cabecero from "./components/cabecero";
import Navigation from './components/Navigation'
import Table from "./components/table";
import SectionButton from './components/sectionbutton';
import Footer from './components/footer';



export default function App(){
    return(

        <div>
             <Cabecero />
            <Navigation />
            <Table />
            <SectionButton />
            <Footer />

        </div>

       
    )
}