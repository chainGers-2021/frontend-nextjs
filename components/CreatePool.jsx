import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

import styles from "../styles/CreatePool.module.css";

const CreatePool = () => {
  return (
    <div className={styles.createPoolDiv}>
      <form className={styles.createPoolForm}>
        <Dropdown>
          <Dropdown.Toggle
            className={styles.createPoolForm}
            id={styles.dropdownBasic}
          >
            Select Token
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>LINK</Dropdown.Item>
            <Dropdown.Item>ETH</Dropdown.Item>
            <Dropdown.Item>WBTC</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <br />
        <input placeholder="Pool Name" className={styles.createPoolFields} />
        <br />
        <input placeholder="$" className={styles.currency} readOnly />
        <input
          type="number"
          placeholder="Target Price"
          id={styles.targetPrice}
        />
        <br />
        <button className={styles.createBtn}>Create Pool</button>
      </form>
    </div>
  );
};

export default CreatePool;
