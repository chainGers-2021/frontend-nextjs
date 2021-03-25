import React from "react";
import Link from "next/link";

import logo from "../public/assets/logo.png";
import searchIcon from "../public/assets/search.png";

const NavBar = () => {
  return (
    <div className="navBar">
      <img src={logo} alt="logo" className="logo navBarElement" />
      <div style={{ margin: 20 }}>
        <Link href="/">HOME</Link>
      </div>
      <div style={{ margin: 20 }}>
        <Link href="/create">CREATE</Link>
      </div>
      <div style={{ margin: 20 }}>
        <Link href="/marketplace">NGOs</Link>
      </div>
      <div className="searchField">
        <input placeholder="Search for pools" />
      </div>
      <div className="searchButton">
        <button>
          <img
            src={searchIcon}
            style={{ width: 20, height: 20 }}
            alt="search icon"
          />
        </button>
      </div>
      <div>
        <button className="connectBtn">Connect Wallet</button>
      </div>
    </div>
  );
};

export default NavBar;
