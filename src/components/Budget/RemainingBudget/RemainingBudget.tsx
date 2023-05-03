import ExpenseContext from "context/ExpenseContext";
import { Fragment, useContext } from "react";

const RemainingBudget = () => {
  const ctx = useContext(ExpenseContext);

  return (
    <div>
      <p>Remaining budget</p>
      <p>£{ctx.budget - ctx.getTotalExpenditure()}</p>
    </div>
  );
};

export default RemainingBudget;
