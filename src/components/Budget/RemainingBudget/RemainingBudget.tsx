import { useContext } from "react";

import ExpenseContext from "context/ExpenseContext";
import formatter from "helpers/formatter";

import styles from "../RemainingBudget/RemainingBudget.module.scss";

const RemainingBudget = () => {
  const ctx = useContext(ExpenseContext);

  const remaining = formatter.format(ctx.budget - ctx.getTotalExpenditure());

  return (
    <div className={styles.container}>
      <p className={styles.title}>Remaining budget</p>
      <div
        className={
          Number((ctx.budget - ctx.getTotalExpenditure()).toFixed(2)) > 0
            ? styles.remainingBudgetContainer
            : styles.remainingBudgetContainerNegative
        }
      >
        <p className={styles.remainingBudgetText}>{remaining}</p>
      </div>
    </div>
  );
};

export default RemainingBudget;
