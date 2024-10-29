/* eslint-disable react/prop-types */
import Modal from 'react-modal';

const ProductModal = ({ product, onClose }) => (
  <Modal isOpen onRequestClose={onClose} ariaHideApp={false}>
    <button onClick={onClose}>X</button>
    <img src={product.thumbnail} alt={product.title} />
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <p>Price: ৳{product.price}</p>
    <button onClick={onClose}>Close</button>
  </Modal>
);

export default ProductModal;
