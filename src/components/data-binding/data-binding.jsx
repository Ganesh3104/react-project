import { useEffect, useState } from "react"

export function DataBinding(){
    
    const [price, setPrice] = useState(0);
    const [name, setName] = useState('');
    const [views] = useState(5600009);
    
    useEffect(()=>{
        setPrice(40500);
        setName('Samsung TV');
    },[]);

    return(
        <div className="container-fluid">
            <h2 className={`text-center text-warning p-3`}>Data Binding</h2>
            <dl>
                <dt>Product Name</dt>
                <dd>{name}</dd>
                <dt>Price</dt>
                <dd>{price}</dd>
                 <dt>Views</dt>
                <dd>{views.toLocaleString('en-us', {notation:'compact'})}</dd>
            </dl>
        </div>
    )
}