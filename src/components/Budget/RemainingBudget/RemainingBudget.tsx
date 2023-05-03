import ExpenseContext from "context/ExpenseContext";
import formatter from "helpers/formatter";
import { useContext } from "react";

const RemainingBudget = () => {
  const ctx = useContext(ExpenseContext);

  const remaining = formatter.format(ctx.budget - ctx.getTotalExpenditure());

  return (
    <div>
      <p>Remaining budget</p>
      <p>{remaining}</p>
    </div>
  );
};

export default RemainingBudget;
