import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function ShoppingDetails() {
  const { category, id } = useParams();   // read both params
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return; // avoid undefined id
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p className="ms-4 mt-3">Loading product...</p>;

  return (
    <div className="ms-4 mt-3">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="150" />
      <p><b>Price:</b> ${product.price}</p>
      <p><b>Description:</b> {product.description}</p>
      <p><b>Category:</b> {product.category}</p>
      <Link to="/products/${category}`}>{category}" >back</Link>
    </div>

  );
}
