
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



export function ShoppingProducts() {
  const { category } = useParams();   // read category from URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <div className="mt-4 ms-4">

      <h3>{category.toUpperCase()} Products</h3>
      <ol>
        {products.map((product) => (
          <Link to={`/products/${category}/${product.id}`}><li>{product.title}</li></Link>

        ))}
      </ol>
       
    </div>
  );
}
