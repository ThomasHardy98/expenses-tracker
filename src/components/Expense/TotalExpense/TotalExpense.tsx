import { Fragment, useContext, useEffect } from "react";

import ExpenseContext from "context/ExpenseContext";

import styles from "../TotalExpense/TotalExpense.module.scss";

const TotalExpense = () => {
  const ctx = useContext(ExpenseContext);

  return (
    <div>
      <p>Total expenditure</p>
      <p>£{ctx.getTotalExpenditure()}</p>
    </div>
  );
};

export default TotalExpense;
