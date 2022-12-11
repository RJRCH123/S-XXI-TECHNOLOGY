import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// FIREBASE
import { getFirestore, doc, getDoc } from "firebase/firestore";
// STYLE
import "./_ItemDetailContainer.css";
// COMPONENTS
import ItemDetail from "../ItemDetail/ItemDetail";
import SpinnerCircle from "../Spinner/Spinner";

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { detalleId } = useParams();

  const [loading, setLoading] = useState(true);

  const getData = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos Obtenidos");
    }, 2000);
  });

  useEffect(() => {
    getData.then((data) => {
      console.log(data);
      setLoading(false);
    });

    const querydb = getFirestore();
    const queryDoc = doc(querydb, "products", detalleId);
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, [detalleId]);

  return (
    <>
      <div>
        {loading ? (
          <div className="">
            <SpinnerCircle />
          </div>
        ) : (
          <ItemDetail data={data} />
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;
