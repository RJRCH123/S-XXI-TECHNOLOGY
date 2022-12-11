import React from "react";
import { Link } from "react-router-dom";
// STYLE
import "./_Item.css";
import { FiEye } from "react-icons/fi";

const Item = ({ info }) => {
  return (
    <div className="card">
      <img src={info.image} alt={info.title} />
      {info.title}
      <div className="subcontain_item">
        <div className="stock-item"> Stock {info.stock}</div>
        <Link className="details-item" to={`/detalle/${info.id}`}>
          <FiEye /> Ver Detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
