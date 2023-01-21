import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyB_L8xxeMxCvpQzhj6Ik49DIxnpJsrb0wk",
  authDomain: "limonero-ecommerce.firebaseapp.com",
  projectId: "limonero-ecommerce",
  storageBucket: "limonero-ecommerce.appspot.com",
  messagingSenderId: "739441925471",
  appId: "1:739441925471:web:32df934caa6d7b645e2aea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
