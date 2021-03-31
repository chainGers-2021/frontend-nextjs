import React from "react";

import styles from "../styles/Home.module.css";
import PoolContent from "../components/PoolContent";
import graph from "../public/assets/sampleGraph.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <button className={styles.arrowLeftBtn}>
        <FaAngleLeft style={{ color: "#79D2E5", fontSize: 20 }} />
      </button>
      <img src={graph} className={styles.graph} alt="sampleGraph" />
      <PoolContent />
      <button className={styles.arrowRightBtn}>
        <FaAngleRight style={{ color: "#79D2E5", fontSize: 20 }} />
      </button>
    </>
  );
};

export default Home;
