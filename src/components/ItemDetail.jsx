import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { ToastContainer  } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Card, Image, CardBody, CardFooter, Stack, Text, Heading, Button } from '@chakra-ui/react'


const ItemDetail = (props) => {
  const { name, descrip, categoria, precio, img } = props.productos;

  window.scrollTo(0,0)

  const { addToCart } = useContext(CartContext);

  const [purchaseCompleted, setPurchaseCompleted] = useState(false); 

  const onAdd = (count) => {
    
    setPurchaseCompleted(true);
    addToCart(props.productos, count);
    

  };

  return (
    <div className="detail-container">
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={img}
          alt='productos'
        />

        <Stack>
          <CardBody>
            <Heading size='md' className="title">{name}</Heading>
            <Text py='2' className="descrip">
            {descrip}
            <p className="precio">   $ {precio}</p>
            </Text>
          </CardBody>

          <CardFooter>
            {purchaseCompleted ? (
            <Link to="/cart" className="addCarrito">
              <Button variant='solid' colorScheme=''>
                Ver mi Carrito
              </Button>
            </Link>
            ) : (
              <ItemCount className="itemcount" onAdd={onAdd} />
            )}
          </CardFooter>
        </Stack>
      </Card>
      <ToastContainer/>
    </div>
  );
};



export default ItemDetail;