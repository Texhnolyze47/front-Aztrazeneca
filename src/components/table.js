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

            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title Name</th>
                        <th>Last Refresh</th>
                        <th>Recruiting</th>
                        <th>Url Site</th>
                    </tr>
                </thead>
                <tbody>
                {Estudios.map((item,i) => {
                    return <tr>
                        <td>{item.id}</td>
                        <td>{item.titleName}</td>
                        <td>{item.lastRefresh}</td>
                        <td>{item.urlSite}</td>
                        <td>{item.recruiting}</td>
                    </tr>
                })}
                <tr>

                </tr>
                </tbody>
    

            </table>
        </div>

    )
}

export default Table