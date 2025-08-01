import { useEffect, useState } from "react";
import moment from "moment";

export function DataBinding(){
    
    const [price, setPrice] = useState(0);
    const [name, setName] = useState('');
    const [views] = useState(5600009);
    const [categories] = useState(['All', 'Electronics', 'Fashion', 'Footwear']);
    const [product] = useState({Name: 'Samsung TV', Price: 45000, ShippedTo: ['Delhi, Hyd'], Rating:{Rate:4.2, count:600}});
    const [products] = useState([
         {Name: 'Samsung TV', Price: 45000},
         {Name: 'Mobile', Price: 23000},
         {Name: 'Nike Casuals', Price: 2560}
    ]);

    const [data] = useState([
        {Category: 'Electronics', Products: ['Televisions', 'Mobiles']},
        {Category: 'Fashion', Products: ['Footwear', 'Jeans']}
    ]);

    const [departure] = useState(Date());
    const [mobile, setMobile] = useState('');
    
    useEffect(()=>{
        // setPrice(40500);
        setPrice(parseInt(prompt('Enter Price')))
        setName('Samsung TV');
        setMobile('+919876543210')
    },[]);

    return(
        <div className="container-fluid">
             <header className="mt-4 p-4 d-flex justify-content-between border border-2">
                <div className="h3">Amazon</div>
                <nav>
                    {
                        categories.map((category, i)=> <span className="mx-4" key={i}><a href="#">{category}</a></span> )
                    }
                </nav>
                <div>
                    <span className="bi bi-heart"></span>
                    <span className="bi bi-cart3 mx-2"></span>
                </div>
            </header>
            <h2 className={` text-warning p-3`}>Data Binding</h2>
            <dl>
                <dt>Product Name</dt>
                <dd>{name}</dd>
                <dt>Price</dt>
                {/* <dd>{(price)?price: 'price not defined'}</dd> */}
                <dd>{(price===null)? 'not defined':price}</dd>
                 <dt>Views</dt>
                <dd>{views.toLocaleString('en-us', {notation:'compact'})}</dd>
            </dl>

            <ol>
                {
                
                   categories.map((category, index) => <li key={index}>{category}</li>)
                }
                
            </ol>


            <select>
                {
                
                   categories.map((category, index) => <option key={index}>{category}</option>)
                }
                
            </select>

            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>

                 <dt>Price</dt>
                <dd>{product.Price}</dd>

                 <dt>Shipped To</dt>
                <dd>
                    <ul>
                        {
                            product.ShippedTo.map(city=><li key={city}>{city}</li>)
                        }
                    </ul>
                </dd>

                 <dt>Rating</dt>
                <dd>
                    {product.Rating.Rate} <span className="bi bi-star-fill text-success"></span> [{product.Rating.count}]
                </dd>
            </dl>

           

           <h2>Products Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product,index)=><tr key={index}><td>{product.Name}</td><td>{product.Price}</td><td> <button className="btn btn-warning bi bi-pen-fill"></button> <button className="btn btn-danger bi bi-trash mx-2"></button> </td></tr>)
                    }
                </tbody>
            </table>

           
           <h2>Products</h2>
            <ol>
                {
                    data.map(item=>
                        <li key={item}>
                            {item.Category}
                            <ul>
                                {
                                    item.Products.map(product=><li key={product}>{product}</li>)
                                }
                            </ul>
                        </li>
                    )
                }
            </ol>
            <select className="mb-4">
                {
                    data.map(item=>
                    <optgroup key={item} label={item.Category}>
                        {
                            item.Products.map(product=><option key={product}>{product}</option>)
                        }
                    </optgroup>)
                }
            </select>

            <h2>Time</h2>
                {departure}
                <h2>moment</h2>
                {moment(departure).format('dddd D, MMMM yyyy')}

             <h2>Regular Expression</h2>
             {(mobile.match(/\+91\d{10}/))? 'Verify':'invalid Mobile'}


        </div>
    )
}