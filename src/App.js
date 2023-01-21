import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import LandingPage from "./components/LandingPage";
import { CartProvider } from "./components/CartContext";
import Footer from "./components/Footer";
import CartView from "./components/CartView/CartView";
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:productoId" element={<ItemDetailContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;