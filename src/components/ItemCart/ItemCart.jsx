import React from "react";
// CONTEXT
import { useCartContext } from "../../context/CartContext";
// STYLE
import "./_ItemCart.css";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();

  return (
    <div className="itemCart">
      <img src={product.image} alt={product.title} />
      <div className="cardCarrito">
        <div className="contenido_item">
          <p>Título: {product.title}</p>
          <p>Cantidad: {product.quantity}</p>
          <p>Precio por unidad: S/. {product.price}</p>
          <button className="btn-delete" onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
