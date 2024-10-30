/* eslint-disable react/prop-types */
import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { TailSpin } from "react-loader-spinner";

const ProductList = ({ products, loading }) => {
  const [modalProduct, setModalProduct] = useState(null);

  const handleQuickView = (product) => setModalProduct(product);
  const closeModal = () => setModalProduct(null);

  return (
    <div className="product-list-container">
      {loading ? ( // Conditionally render loader or product list
        <div className="loader-container">
          <TailSpin
            height="80"
            width="80"
            color="#00BFFF"
            ariaLabel="loading"
          />
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default ProductList;
