import { Linter } from "eslint";
import { useEffect, useState } from "react";

export function DataApi(){

    const [product, setProduct] = useState({title:'', price:0, image:'', rating:{rate:0, ratings:0, reviews:0}, offers:[] });

    function getProduct(){
        var http = new XMLHttpRequest();
        http.open("get", "product.json", true);
        http.send(); 

        http.onreadystatechange = function(){
            if(http.readyState===4){
                setProduct(JSON.parse(http.responseText));
            }
        }
    }

    useEffect(()=>{
     getProduct();
    },[]);

    return(
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-3">
                 <img src={product.image} width="100%"/>
                </div>
                <div className="col-9">
                    <div className="fs-4">{product.title}</div>
                    {/* <div>
                        <span className="badge bg-success rounded">{product.rating.ratings} <span className="bi bi-star-fill"></span></span>
                        <span className="mx-4">{product.rating.ratings}</span>
                    </div> */}
                    <div className="mt-3">
                        <div className="h1">{product.price.toLocaleString('en-in', {style:"currency", currency:"INR", minimumFractionDigits:0})}</div>

                    </div>
                    <div className="mt-3">
                        <h5>Available Offers</h5>
                        <ul className="list-unstyled">
                            {
                                product.offers.map(offer=><li key={offer}>{offer}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}