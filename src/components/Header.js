import { useState } from "react";
import { LOGO_URL  } from "../utils/constants";
import { Link } from "react-router";

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
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/about" > About</Link> </li>
            <li> <Link to="/contact"> Contact </Link> </li>
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