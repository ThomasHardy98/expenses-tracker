import { useContext } from "react";

import formatter from "helpers/formatter";
import ExpenseContext from "context/ExpenseContext";

import styles from "../TotalExpense/TotalExpense.module.scss";

const TotalExpense = () => {
  const ctx = useContext(ExpenseContext);

  const expenditure = formatter.format(ctx.getTotalExpenditure());

  return (
    <div className={styles.container}>
      <p className={styles.title}>Total expenditure</p>
      <div className={styles.expenditureContainer}>
        <p className={styles.expenditureText}>{expenditure}</p>
      </div>
    </div>
  );
};

export default TotalExpense;
