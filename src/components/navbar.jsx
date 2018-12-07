import React, { Component } from "react";

//Stateless functional component

const NavBar = ({ totalCounters, totalItems, log }) => {
  if (log) console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary m-2">
          Number of unique items : {totalCounters}
        </span>
        <span className="badge badge-pill badge-secondary m-2">
          Number of items :{totalItems}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
