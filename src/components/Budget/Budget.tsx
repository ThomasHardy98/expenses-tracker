import { useContext } from "react";

import ExpenseContext from "context/ExpenseContext";
import formatter from "helpers/formatter";

const Budget = () => {
  const ctx = useContext(ExpenseContext);

  const buttonHandler = () => {
    ctx.changeHiddenBudgetInput(false);
  };

  const budget = formatter.format(ctx.budget);

  return (
    <div>
      <p>Monthly budget</p>
      <p>{budget}</p>
      <button onClick={buttonHandler}>Edit</button>
    </div>
  );
};

export default Budget;
