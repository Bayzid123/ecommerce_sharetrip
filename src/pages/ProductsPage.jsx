// src/pages/ProductsPage.jsx
import { useState } from "react";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

const ProductsPage = () => {
  document.title = "Products Page";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state

  return (
    <div className="products-page">
      <div className="header">
        <SearchBar setProducts={setProducts} setLoading={setLoading} />
      </div>
      {loading ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default ProductsPage;
