import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ShoppingProducts } from "./shopping-products";
import { ShoppingDetails } from "./shopping-details";



export function ShoppingIndex() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <header className="border border-dark mt-2 p-2">
          <h3 className="ms-2">Shopping</h3>
        </header>

        <section className="mt-5 ms-4">
          <h4>Categories</h4>
          <ul>
  {categories.map((category) => (
    <li key={category}>
      <Link to={`/products/${category}`}>{category}</Link>
    </li>
  ))}
</ul>

        </section>

    
        <Routes>
          <Route path="/products/:category" element={<ShoppingProducts />} />
           <Route path="/products/:category/:id" element={<ShoppingDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
