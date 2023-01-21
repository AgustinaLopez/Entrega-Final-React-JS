import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react'

const Item = ({ producto }) => {
  

  return (
    <div>
      <Card maxW='sm'>
            <CardBody>
              <Image
                src={producto.img}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{producto.name}</Heading>
                <Text color='' fontSize='2xl' className="textPrecio">
                  {producto.precio}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          <CardFooter>
          <Link className='link' to={`/productos/${producto.id}`}>
            <ButtonGroup spacing='2'>
                    <Button  colorScheme=''>
                        Agregar al Carrito
                    </Button>   
            </ButtonGroup>
          </Link>{" "}  
          </CardFooter>
        </Card>
    </div>
  );
};

export default Item;