import './sectionbutton.css';

function SectionButton(){
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

export default SectionButton;