import { useEffect, useState } from "react";


export function EventonChange(){
   
    const [uname, setUname]= useState('john')
    const [msg, setMsg] = useState(null)

    function handleChange(e){
       setUname(e.target.value);
    }

    function verifyName(e){
        if(e.target.value==='David'){
            setMsg('Name Taken - Try another');
        }else{
            setMsg('Name Available')
        }
    }

    function handleBlur(){
        setMsg('');
    }


    return(
         
        <div className="container-fluid">
            <dl>
                <dt>User Name</dt>
                <dd> <input type="text"  onBlur={handleBlur} onKeyUp={verifyName} onChange={handleChange}  value={uname}/>  </dd>
                <dd>{msg}</dd>
            </dl>
            <h2>Hello! {uname}</h2>

        </div>
    )
}