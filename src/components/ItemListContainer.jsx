import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router";
import ReactLoading from "react-loading";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";



const ItemListContainer = () => {

  const db = getFirestore();
  const productosCollection = collection(db, "productos");

  const { id } = useParams();

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    if (id) {
      const queryFiltrado = query(productosCollection, where("categoria", "==", id));
      getDocs(queryFiltrado).then((data) => {
        setProductos(
          data.docs.map((document) => ({ id: document.id, ...document.data() }))
        );
      });
      setLoading(false);
    } else {
      getDocs(productosCollection)
        .then((data) => {
          setProductos(
            data.docs.map((document) => ({
              id: document.id,
              ...document.data(),
            }))
          );
          setLoading(false)
        });
    }
  }, [id]);


  return (
    <>
     
        <div className="container">
          {loading ? (
            <ReactLoading className="loading" color="#586f61" type="spin" />
          ) : (
            <div className="container1">
              <h1 style={{ textAlign: "center" }}> Jugando y Decorando </h1>
              <ItemList
                productos={productos}
              />
            </div>
          )}
        </div>
      
    </>
  );
};

export default ItemListContainer;
