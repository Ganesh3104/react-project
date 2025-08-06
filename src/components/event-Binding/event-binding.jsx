import { useEffect, useState } from "react";


export function EventBinding(){

   const [msg, setMsg] = useState(null);

    function handleInsertClick(e, ...product){
        setMsg('Insert Successfully...');
        let [id, name, stock, cities, rating] = product;
        console.log(`id=${id}\nName=${name}\nStock=${stock}\nCities=${cities}\nRating=${rating.Rate}`);
        console.log(`Button Value=${e.target.value}\n X position=${e.clientX}\n Y position=${e.clientY}`);
    }
    return(
        <div className="container-fluid">
             
             <button value="insert" id="btnInsert" className="mt-5" onClick={(event)=>handleInsertClick(event, 1, 'TV',  true, ['Delhi', 'Hyd'], {Rate:4.2})}>Insert</button>
             <p>{msg}</p>
        </div>
    )
}