import './sectionbutton.css';

export default function SectionButton(){
    return (
        <div className="contenedor-button">
        <button className="button">
            <i className="button-action"></i>
            Download CSV
        </button>
        <button className="button">
            <i className="button-action"></i>
            Download xlsx
        </button>
        </div> 
    );
}

