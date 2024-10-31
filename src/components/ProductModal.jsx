/* eslint-disable react/prop-types */
import Modal from "react-modal";

const ProductModal = ({ product, onClose }) => (
  <Modal
    isOpen
    onRequestClose={onClose}
    ariaHideApp={false}
    style={{
      overlay: {
        zIndex: 1000, // Ensure the modal is above all other content
        backgroundColor: "rgba(0, 0, 0, 0.75)", // Add a background overlay
      },
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        maxWidth: "500px",
        maxHeight: "80%", // Adjust the height of the modal
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        overflow: "auto", // Ensure content is scrollable if it overflows
        fontFamily: "'Murecho', sans-serif", // Use the same font as the product list
      },
    }}
  >
    <img
      src={product.thumbnail}
      alt={product.title}
      style={{ width: "50%", borderRadius: "10px" }}
    />
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <p>Price: ৳{product.price}</p>
    <button
      onClick={onClose}
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
      Close
    </button>
  </Modal>
);

export default ProductModal;
