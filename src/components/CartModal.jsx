/* eslint-disable react/prop-types */
import { useContext } from "react";
import Modal from "react-modal";
import { CartContext } from "./CartContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import CloseIcon from "@mui/icons-material/Close";

const CartModal = ({ isOpen, onClose }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const handleIncrease = (product) => {
    addToCart(product);
  };

  const handleDecrease = (productId) => {
    removeFromCart(productId);
  };

  const calculateSubtotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      style={{
        overlay: {
          zIndex: 1000,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          maxWidth: "600px",
          maxHeight: "80%",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          overflow: "auto",
          fontFamily: "'Murecho', sans-serif",
        },
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <CloseIcon style={{ fontSize: "24px", color: "#000" }} />
      </button>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table style={{ width: "100%", textAlign: "left" }}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} style={{ marginBottom: "10px" }}>
                  <td style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "10px",
                      }}
                    />
                    <div>
                      <strong>{item.title}</strong>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <button
                        onClick={() => handleDecrease(item.id)}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "#007bff",
                        }}
                      >
                        <RemoveShoppingCartIcon />
                      </button>
                      <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                      <button
                        onClick={() => handleIncrease(item)}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "#007bff",
                        }}
                      >
                        <AddShoppingCartIcon />
                      </button>
                    </div>
                  </td>
                  <td>৳{calculateSubtotal(item.price, item.quantity)}</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td style={{ textAlign: "right" }}>
                  <strong>Total:</strong>
                </td>
                <td style={{ marginRight: "10px" }}>
                  <strong>৳{calculateTotal()}</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              cursor: "pointer",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "1em",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Checkout
          </button>
        </>
      )}
    </Modal>
  );
};

export default CartModal;
