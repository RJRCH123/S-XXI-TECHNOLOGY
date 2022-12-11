import React from "react";
// CONTEXT
import { useCartContext } from "../../context/CartContext";
// STYLE
import "./_CartWidget.css";
import { FiShoppingBag } from "react-icons/fi";

export const CartWidget = () => {
  const { totalProducts } = useCartContext();

  return (

    <div className="count-container"> 
      <FiShoppingBag className="cart-icon"/>
      {totalProducts() != "" && (
      <span className="count-cart">{totalProducts() || ""}</span>) }
    </div>
  );
};

export default CartWidget;
