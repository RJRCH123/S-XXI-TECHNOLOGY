import React, { useState } from "react";
import { Link } from "react-router-dom";
// CONTEXT
import { useCartContext } from "../../context/CartContext";
// STYLE
import "./_ItemDetail.css";
// COMPONENTS
import ItemCount from "../ItemCount/ItemCount";

export const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();
  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  };

  return (
    <div className="container_detail">
      <img className="detail_image" src={data.image} alt={data.title} />
      <div className="content_detail">
        <div className="content-info">
          <h1>{data.title}</h1>
          <p className="descripcion"><b>Descripción:</b> {data.description}</p>
          <p className="price">
             S/. {data.price} c/u
          </p>
        </div>
        
        {goToCart ? (
          <Link className="btn-listcart" to={`/cart`}>
            Ir al Carrito
          </Link>
        ) : (
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
