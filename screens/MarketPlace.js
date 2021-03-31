import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "../config/particlejs-config";

import ProductCard from "../components/ProductCard";
import styles from "../styles/MarketPlace.module.css";

const MarketPlace = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        overflow: "scroll",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: 100,
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "'Righteous', cursive",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: 60,
          color: "#79D2E5",
          textShadow: "2px 2px black",
        }}
      >
        Marketplace
      </div>
      <div className={styles.cardGrid}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Particles params={particlesConfig} />
    </div>
  );
};

export default MarketPlace;
