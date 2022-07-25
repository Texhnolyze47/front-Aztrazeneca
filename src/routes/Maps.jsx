import Cabecero from "../components/cabecero";
import Navigation from '../components/Navigation'
import Footer from '../components/footer';

import { useEffect, useState } from "react"


export default function Maps() {
    return (
        <div>
            <Cabecero />
            <Navigation />
            <Footer />
        </div>
    );
}