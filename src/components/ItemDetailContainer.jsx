import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState([]);

  const [loading, setLoading] = useState(true);

  const { productoId } = useParams();

  const db = getFirestore();
  const referenciaProductos = doc(db, "productos", productoId);

  useEffect(() => {
    getDoc(referenciaProductos)
      .then((data) => {
        setDetail({ id: data.id, ...data.data() });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="todo-container">
      {loading ? (
        <ReactLoading className="loading" color="#586f61" type="spin" />
      ) : (
        <div className="itemdetail-container">
          <ItemDetail
           productos={detail}
          />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;