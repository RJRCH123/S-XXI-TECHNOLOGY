import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// FIREBASE
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
// STYLE
import "./_ItemListContainer.css";
import SliderList from "../../assets/sliderList.json";
// COMPONENTS
import ItemList from "../ItemList/ItemList";
import Slider from "../Slider/Slider";
import Spinner from "../Spinner/Spinner";


export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);
  const { categoriaId } = useParams();
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
    const queryCollection = collection(querydb, "products");
    if (categoriaId) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", categoriaId)
      );
      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [categoriaId]);

  return (
    <>
      <Slider path="images/" baner={SliderList} />
      <div>
        {loading ? (
            <Spinner />
        ) : (
          <ItemList data={data} />
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
