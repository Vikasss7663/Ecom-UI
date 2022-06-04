import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './component/login/Login';
import Signup from './component/login/Signup';
import ProductAddItem from './component/product/ProductAddItem';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
        <Routes>
          <Route exact path='/' element={< App />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/signup' element={< Signup />}></Route>
          <Route exact path='/addProduct' element={< ProductAddItem />}></Route>
      </Routes>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
