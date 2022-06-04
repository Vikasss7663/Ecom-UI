import React, {useEffect, useState} from 'react';
import Header from './component/Header';
import HeaderCategory from './component/HeaderCategory';
import Product from './component/product/Product';
import {
  Navigate
} from 'react-router-dom';

function App() {

  const [user, setUser] = useState([])
  const [logout, setLogout] = useState(false)
  const [redirectLogin, setRedirectLogin] = useState(false);
  const [redirectSignUp, setRedirectSignUp] = useState(false);


  const handleLogout = () => {
    localStorage.clear();
    setLogout(true);
    setUser("");
  };

  const handleLoginBtn = () => {
    setRedirectLogin(true);
  }

  const handleSignUpBtn = () => {
    setRedirectSignUp(true);
  }

  useEffect(() => {

    const user_json = JSON.parse(localStorage.getItem("user"));

    if (user_json) {
      setLogout(false);
      setUser(user_json);
      console.log(user_json);
    }
  }, [logout]);


  if(redirectLogin) {
    return (
        < Navigate to="/login" replace />
    );
  }

  if(redirectSignUp) {
    return (
        < Navigate to="/signup" replace />
    );
  }

  return (  

    <div>
      <Header
        user={user}
        handleLoginBtn={handleLoginBtn}
        handleSignUpBtn={handleSignUpBtn}
        handleLogout={handleLogout}
      />
      <HeaderCategory />
      <Product />
    </div>
  );
}

export default App;