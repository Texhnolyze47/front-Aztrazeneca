import { useEffect, useState } from "react"



function Table (){
    const[Estudios, fetchEstudios] = useState([])
    useEffect(() =>{
        fetch("http://localhost:8080/api/estudio/fetch/get-all")
        .then((res) => res.json())
        .then((res) => {
            fetchEstudios(res)
            console.log(res)
        })
    },[]);

    return(
        <div className="container">
            <h2> Tabla de datos</h2>

        </div>
    )
}

export default Table