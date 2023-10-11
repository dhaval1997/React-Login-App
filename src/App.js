import React, { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginDetails, setLoginDetails] = useState(null);

  useEffect(() => {
    const loggedinStatus = localStorage.getItem("isLoggedin");
    if (loggedinStatus === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedin", "1");
    setIsLoggedIn(true);
    setLoginDetails({ email, password });
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedin");
    setIsLoggedIn(false);
    setLoginDetails(null);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && (
          <Home onLogout={logoutHandler} loginDetails={loginDetails} />
        )}
      </main>
    </React.Fragment>
  );
}

export default App;
