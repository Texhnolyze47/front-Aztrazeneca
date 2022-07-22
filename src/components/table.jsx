import { useEffect, useState } from "react"
import './table.css'



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
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title Name</th>
                        <th>Last Refresh</th>
                        <th>Url Site</th>
                        <th>Recruiting</th>
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