import { Fragment, useContext } from "react";

import ExpenseContext from "context/ExpenseContext";

const Budget = () => {
  const ctx = useContext(ExpenseContext);

  const buttonHandler = () => {
    ctx.changeHiddenBudgetInput(false);
  };

  return (
    <div>
      <p>Monthly budget</p>
      <p>£{ctx.budget}</p>
      <button onClick={buttonHandler}>Edit</button>
    </div>
  );
};

export default Budget;
