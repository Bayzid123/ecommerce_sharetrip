/* eslint-disable react/prop-types */
import Modal from "react-modal";

const ProductModal = ({ product, onClose }) => (
  <Modal
    isOpen
    onRequestClose={onClose}
    ariaHideApp={false}
    style={{
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        maxWidth: "500px",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
      },
    }}
  >
    <button
      onClick={onClose}
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        cursor: "pointer",
      }}
    >
      X
    </button>
    <img
      src={product.thumbnail}
      alt={product.title}
      style={{ width: "100%", borderRadius: "10px" }}
    />
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <p>Price: ৳{product.price}</p>
    <button
      onClick={onClose}
      style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}
    >
      Close
    </button>
  </Modal>
);

export default ProductModal;
