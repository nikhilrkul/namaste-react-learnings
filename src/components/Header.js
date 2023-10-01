import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  // const [btnNameReact, setbtnNameReact] = useState("Login");
  let btnName = "Login";
  const [btnNameReact, setbtnNameReact] = useState("Login");

  console.log("Header Rendered");

  // if there is no dependency array => useEffect is called on every render
  // If dependency array is empty = [] => useEffect is called on inital render(just once)
  // if dependency array is [btnNameReact] => useEffect is called everytime btnNameReact is updated.
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  const onlineState = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-links">
        <ul>
          <li>Online Status : {onlineState ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
              // console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
