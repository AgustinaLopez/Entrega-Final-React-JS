import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    // <div style={{backgrundImage:`https://res.cloudinary.com/dvg9bxeas/image/upload/v1671477811/REACT%20-%20Limonero/producto-9_yftzip.jpg `}}>
   
      <div className='www'> 
      <div className="container-landing">
        
        <h1> Bienvenidos a Limonero Decoración para Niños </h1>
        <Link className="Link" to={"/productos"}>
          {" "}
          ¡Juguemos!
        </Link>
      </div>
      </div>
    // </div>
  );
};

export default LandingPage;