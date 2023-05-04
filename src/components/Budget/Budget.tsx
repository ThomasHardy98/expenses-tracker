import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import ExpenseContext from "context/ExpenseContext";
import formatter from "helpers/formatter";

import styles from "../Budget/Budget.module.scss";

const Budget = () => {
  const ctx = useContext(ExpenseContext);

  const buttonHandler = () => {
    ctx.changeHiddenBudgetInput(false);
  };

  const budget = formatter.format(ctx.budget);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Monthly budget</p>
        <button onClick={buttonHandler} className={styles.editButton}>
          <FontAwesomeIcon icon={faPen} />
        </button>
      </div>
      <div className={styles.budgetContainer}>
        <div className={styles.budget}>
          <p className={styles.budgetText}>{budget}</p>
        </div>
      </div>
    </div>
  );
};

export default Budget;
