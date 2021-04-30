import styles from "../../styles/Nav.module.sass";

const Nav = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>hodl</h1>
      <input type="text" className={styles.search} placeholder="Search" />
      <div className={styles.items}>
        <p>Home</p>
        <p>Create</p>
        <p>NFTs</p>
        <p>Leaderboard</p>
      </div>
    </div>
  );
};

export default Nav;
