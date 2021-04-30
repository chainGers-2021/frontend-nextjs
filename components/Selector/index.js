import styles from "../../styles/Scrollable.module.sass";

const Selector = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overflow}>
        <button className={`${styles.cards} ${styles.selectButton}`}>
          Select Public Pools
        </button>
        <div className={styles.selectContainer}>
          <button className={styles.cards}>BPUBLIC</button>
          <button className={styles.cards}>BPUBLIC</button>
          <button className={styles.cards}>BPUBLIC</button>
          <button className={styles.cards}>BPUBLIC</button>
          <button className={styles.cards}>BPUBLIC</button>
        </div>
      </div>
    </div>
  );
};

export default Selector;
