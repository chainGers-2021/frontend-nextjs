import React from "react";
import Link from "next/link";

import logo from "../public/assets/logo.png";
import styles from "../styles/NavBar.module.css";
import searchIcon from "../public/assets/search.png";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div style={{ margin: 20 }}>
        <Link href="/">HOME</Link>
      </div>
      <div style={{ margin: 20 }}>
        <Link href="/create">CREATE</Link>
      </div>
      <div style={{ margin: 20 }}>
        <Link href="/marketplace">NGOs</Link>
      </div>
      <div className={styles.searchField}>
        <input placeholder="Search for pools" />
      </div>
      <div className={styles.searchButton}>
        <button>
          <img
            src={searchIcon}
            style={{ width: 20, height: 20 }}
            alt="search icon"
          />
        </button>
      </div>
      <div>
        <button className={styles.connectBtn}>Connect Wallet</button>
      </div>
    </div>
  );
};

export default NavBar;
