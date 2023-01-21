import { BsCart4 } from 'react-icons/bs';
import React from "react";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";


const CartWidget = () => {

const {getQuantity} = useContext(CartContext)

  return (
    <div>
        { getQuantity() ?  
      <Link to='/cart'>
        
        <div className='widget-container'>
         <BsCart4 color='white' className='icon'/>
        <span className='cantidad'> {getQuantity()} </span>
        </div>
      </Link>
      :
      <>

       </>
      }
    </div>
  );
};

export default CartWidget;