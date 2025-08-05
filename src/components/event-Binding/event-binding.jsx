import { useEffect, useState } from "react";


export function EventBinding(){

   const [msg, setMsg] = useState(null);

    function handleInsertClick(e){
        setMsg('Insert Successfully...');
        console.log(`Button Value : ${e.target.value}\n Button Id : ${e.target.id} \n X Position :${e.clientX} \n Y Position :${e.clientY}`)
    }
    return(
        <div className="container-fluid">
             
             <button value="insert" id="btnInsert" className="mt-5" onClick={handleInsertClick}>Insert</button>
             <p>{msg}</p>
        </div>
    )
}