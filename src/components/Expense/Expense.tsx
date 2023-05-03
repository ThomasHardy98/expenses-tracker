import { useContext } from "react";

import ExpenseContext from "context/ExpenseContext";
import formatter from "helpers/formatter";

type ExpenseType = {
  id: string;
  name: string;
  cost: number;
  date: string;
};

const Expense = ({ id, name, cost, date }: ExpenseType) => {
  const ctx = useContext(ExpenseContext);

  const costFormatted = formatter.format(cost);

  const clickHandler = () => {
    ctx.deleteExpense(id);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>Cost: {costFormatted}</p>
      <p>Date: {date}</p>
      <button onClick={clickHandler}>Delete</button>
    </div>
  );
};

export default Expense;
