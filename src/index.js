import React from 'react';
import ReactDOM from 'react-dom/client';
import Cabecero from './components/cabecero';
import Navbar from './components/navbar';
import Table from './components/table';
import SectionButton from './components/sectionbutton';
import Footer from './components/footer'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cabecero />
    <Navbar />
    <Table />
    <SectionButton /> 
    <Footer />
  </React.StrictMode>
);
