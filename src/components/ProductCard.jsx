/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ProductCard = ({ product, onQuickView }) => {
  const { cart, addToCart, removeFromCart, updateCartQuantity } =
    useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  const isInCart = cart.some((item) => item.id === product.id);

  // Calculate old price if discount percentage is available
  const oldPrice = product.discountPercentage
    ? (product.price / (1 - product.discountPercentage / 100)).toFixed(2)
    : null;
  const discount = (oldPrice - product.price).toFixed(2);

  const handleAddToCart = () => {
    setQuantity((prev) => prev + 1);
    addToCart(product);
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
    updateCartQuantity(product, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      updateCartQuantity(product, quantity - 1);
    } else {
      setQuantity(0);
      removeFromCart(product);
    }
  };

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="product-card">
      <div className="discount-badge">- ৳ {discount} </div>
      <div className="favorite-icon" onClick={toggleFavorite}>
        {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </div>
      <div className="product-image-container">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
        <div className="hover-buttons">
          {isInCart ? (
            <div className="add-to-cart-button added">
              <button className="quantity-btn" onClick={handleDecrease}>
                <RemoveShoppingCartIcon />
              </button>
              <span>{quantity} Added in Cart</span>
              <button className="quantity-btn" onClick={handleIncrease}>
                <AddShoppingCartIcon />
              </button>
            </div>
          ) : (
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              <AddShoppingCartIcon /> Add to Cart
            </button>
          )}
          <button
            className="quick-view-button"
            onClick={() => onQuickView(product)}
          >
            <VisibilityIcon /> Quick View
          </button>
        </div>
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <div>
          <span className="product-price">৳ {product.price}</span>
          {oldPrice && <span className="product-old-price">৳ {oldPrice}</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
