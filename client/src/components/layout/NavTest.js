import React from "react";
import NavBar from "./navbar2";
const leftItems = [
    { as: "a", content: "Home", key: "home" },
    { as: "a", content: "Users", key: "users" }
  ];
  const rightItems = [
    { as: "a", content: "Login", key: "login" },
    { as: "a", content: "Register", key: "register" }
  ];
  
  const NavTest = () => (
    <NavBar leftItems={leftItems} rightItems={rightItems}>
    </NavBar>
  );
  
  export default NavTest;