import React, { useState, useEffect } from "react";
// STYLE
import "./_ItemCount.css";
import { BsCartPlus, BsDash, BsPlus} from "react-icons/bs";

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="counter-container">
      <div className="container-btn-count">
        <div className="content-btn-count">
          <button
            className="btn-count-red"
            disabled={count <= 0}
            onClick={decrease}
          >
            <BsDash/>
          </button>
          <span className="counter">{count}</span>
          <button
            className="btn-count-plus"
            disabled={count >= stock}
            onClick={increase}
          >
            <BsPlus/>
          </button>
        </div>
        <button
          className="btn-addcart"
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
