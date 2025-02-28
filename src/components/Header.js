import { useState } from "react";
import { LOGO_URL  } from "../utils/constants";

const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src={LOGO_URL}
      />
    </a>
  );

const Header = () => {

  const [logbtn, setLogbtn] =  useState("Login");

    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <button className="login" 
              onClick={() => {
                logbtn === "Login" ? setLogbtn("Logout") : setLogbtn("Login");              
              }}
            >
              {logbtn }
            </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;