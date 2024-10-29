import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error(error));
  }, []);

  const handleQuickView = (product) => setModalProduct(product);
  const closeModal = () => setModalProduct(null);

  return (
    <div className="product-list-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onQuickView={handleQuickView}
        />
      ))}
      {modalProduct && (
        <ProductModal product={modalProduct} onClose={closeModal} />
      )}
    </div>
  );
};

export default ProductList;
