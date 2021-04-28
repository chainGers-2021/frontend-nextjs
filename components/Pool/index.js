import Input from "../Input";
import styles from "../../styles/Pool.module.sass";

const Pool = () => {
  return (
    <div className={styles.container}>
      <form className={styles.details}>
        <Input
          inputClass={styles.inputs}
          id="symbol"
          label="Symbol"
          value="BAT"
          disabled
        />
        <Input
          inputClass={styles.inputs}
          id="name"
          label="Name"
          value="BPUBLIC"
          disabled
        />
        <Input
          inputClass={styles.inputs}
          id="current"
          label="Current"
          value="0.00000 BAT"
          disabled
        />
        <Input
          inputClass={styles.inputs}
          id="target"
          label="Target Price"
          value="$ 2"
          disabled
        />
        <Input inputClass={styles.inputs} id="amount" label="Amount" />
        <div className={styles.buttonsContainer}>
          <button className={styles.button}>Deposit</button>
          <button className={styles.button}>Withdraw</button>
        </div>
      </form>
    </div>
  );
};

export default Pool;
