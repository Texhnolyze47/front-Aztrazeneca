import { useEffect, useState } from "react"


export default function Maps() {

    const[Localizaciones, fetchLocalizaciones] = useState([])
    useEffect(() =>{
        fetch("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAoPUlGXugJGTr1qOZsV8cF3GFJ2qgPTxc")
        .then((res) => res.json())
        .then((res) => {
            fetchLocalizaciones(res)
            console.log(res)
        })
    },[]);
    return (
        <div>
            <head>
                
            </head>
        </div>
    );
}