import React from "react";
// STYLE
import "./_ItemList.css";
// COMPONENTS
import Item from "../Item/Item";

const ItemList = ({ data = [] }) => {
  return (
    <div className="item-container-map">
     { data.map(film =>
      <Item key={film.id} info={film} />)}
    </div>
  );
};

export default ItemList;
