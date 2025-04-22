import { useContext, useState } from "react";
import { LOGO_URL  } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Title = () => (
    <a href="/">
      <img
        className="logo flex w-[150px]"
        alt="logo"
        src={LOGO_URL}
      />
    </a>
  );

const Header = () => {

  const {loggedInUser} = useContext(UserContext);

  const [logbtn, setLogbtn] =  useState("Login");
  const onlineStatus = useOnlineStatus();

    return (
      <div className="header flex py-8 px-4 items-center justify-between">
        <Title />
        <div className="nav-items">
          <ul className="flex gap-5">
            <li> Online Status : {onlineStatus ? "Yes" : "No"  }  </li>
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/about" > About</Link> </li>
            <li> <Link to="/contact"> Contact </Link> </li>
            <li> <Link to="/grocery"> Grocery </Link> </li>
            <button className="login" 
              onClick={() => {
                logbtn === "Login" ? setLogbtn("Logout") : setLogbtn("Login");              
              }}
            >
              {logbtn }
            </button>
            <li> <Link to="/grocery"> {loggedInUser} </Link> </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;