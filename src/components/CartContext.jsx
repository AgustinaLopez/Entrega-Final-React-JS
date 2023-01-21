import { createContext, useState } from "react";



export const CartContext = createContext({})

const {Provider} = CartContext


export const CartProvider = ({ defaultValue = [], children }) => {

    const [cart, setCart] = useState(defaultValue)

     const addToCart = (item, quantity ) => {
         console.log(isInCart(item.id));
        if(isInCart(item.id)) { 
          const newCart = [...cart]  
          for (const element of newCart) { 
              if(element.item.id === item.id) {    
                  element.quantity = element.quantity + quantity 
              }                    
          }
          setCart(newCart) 
        } else {
            setCart([...cart, {  item: item, quantity: quantity}]) 
        } 
        }


       const removeFromCart = (id) => {
           const newCart = [...cart].filter(element => element.item.id !== id) 
           setCart(newCart)   
       }

       

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.find((element) => element.item.id === id)
    }
    

    
    const getQuantity = () => {
        let cantidad = 0
        cart.forEach((element) => cantidad = cantidad + element.quantity)
        return cantidad
    }
    
    const getTotal = () => {
        let total = 0
        cart.forEach((element) => {
            total = total + (element.quantity * element.item.price)
        })
        return total
    }
 
     const context = {
            cart,   
            addToCart, 
            clearCart, 
            removeFromCart,
            getQuantity,
            getTotal
        } 

  return (
     <Provider value={context}>
         {children}
     </Provider>
  )
}