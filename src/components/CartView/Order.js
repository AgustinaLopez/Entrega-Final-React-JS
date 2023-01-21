import React from "react";
import "./order.css";
import {
  collection,
  addDoc,
  getFirestore,
  
} from "@firebase/firestore";
import Swal from "sweetalert2";
import {
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'


const Order = ({ order, getTotal }) => {
  const db = getFirestore();
  const collectionReference = collection(db, "orders");

  window.scrollTo(0,0)

  
  const date = new Date().toLocaleString + "";
  const orderList = {
    buyer: {
      name: "Pepita",
      email: "pepitapepita@gmail.com",
      tel: 123456789,
      direccion: "muchos lugares",
    },
    items: order.map((element) => ({
      id: element.item.id,
      cantidad: element.quantity,
      precio: element.item.precio,
      nombre: element.item.name,
    })),
    date: date,
    total: getTotal(),
  };

  const handleCheckout = () => {
    addDoc(collectionReference, orderList).then((response) => {
      console.log(response);
      Swal.fire({
        icon: "success",
        title: "¡Pedido Confirmado!",
        text:
          `El número de Pedido es: ` +
          response.id,
      });
    });
  };

  return (
    <div className="all-container">
      <h2> ¿Confirmar? </h2>

      {order.map((element) => (
        <div className="order-item-container" key={element.item.id}>
          <p> {element.item.name} </p> 
          -
          <span> ${element.item.precio} </span>
          <br/> 
          <span> Cantidad: {element.quantity} </span>
          <hr></hr>
        </div>
      ))}
      <h4> Total de la compra: ${getTotal()} </h4>

      <div className="formulario">
        <div className="formulario-p">
          <h3>Completa el formulario para finalizar la compra</h3>
        </div>
      <FormControl isRequired>
        <FormLabel>Nombre y Apellido</FormLabel>
        <Input valueInput= "name" placeholder='Nombre y Apellido' />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Telefono</FormLabel>
        <Input valueInput="phone" type="number" placeholder='Apellido' />
      </FormControl>
      <FormControl>
        <FormLabel>Correo Electronico</FormLabel>
        <Input valueInput="email" type='email' />
      </FormControl>
      <FormControl>
        <FormLabel>Confirmar Correo Electronico</FormLabel>
        <Input valueInput="emailConfirm" type='email' />
      </FormControl>
      </div>

      <button 
                onClick={handleCheckout}> Confirmar </button>
    </div>
  );
};

export default Order;

