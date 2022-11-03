import React from "react";
import { Link } from "react-router-dom";

const CartWidget = (cartItems) => {
  return (
    <>
      <Link
        to="/cart"
        className=" text-decoration-none text-dark position-relative text-center align-items-center me-2"
        id="cart-bg"
      >
        <i className="h3 bi bi-shop"></i>
        <span
          id="badge-radius"
          className="position-absolute top-0 start-100 translate-middle-x badge bg-danger"
        >
          5
        </span>
      </Link>
    </>
  );
};

export default CartWidget;
