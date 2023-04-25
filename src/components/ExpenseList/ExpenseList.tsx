import { useContext } from "react";

import ExpenseContext from "context/ExpenseContext";

import styles from "../ExpenseList/ExpenseList.module.scss";

const ExpenseList = () => {
  const ctx = useContext(ExpenseContext);

  return (
    <ul className={styles.list}>
      {ctx.expenses.map((expense, i) => {
        return (
          <li key={i} className={styles.listItem}>
            {expense.name}
            {expense.cost}
            {expense.date}
          </li>
        );
      })}
    </ul>
  );
};

export default ExpenseList;
