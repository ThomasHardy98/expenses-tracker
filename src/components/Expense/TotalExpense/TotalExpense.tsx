import { useContext } from "react";

import formatter from "helpers/formatter";
import ExpenseContext from "context/ExpenseContext";

import styles from "../TotalExpense/TotalExpense.module.scss";

const TotalExpense = () => {
  const ctx = useContext(ExpenseContext);

  const expenditure = formatter.format(ctx.getTotalExpenditure());

  return (
    <div>
      <p>Total expenditure</p>
      <p>{expenditure}</p>
    </div>
  );
};

export default TotalExpense;
