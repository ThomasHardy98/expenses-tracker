import formatter from "helpers/formatter";

type ExpenseType = {
  name: string;
  cost: number;
  date: string;
};

const Expense = ({ name, cost, date }: ExpenseType) => {
  const costFormatted = formatter.format(cost);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Cost: {costFormatted}</p>
      <p>Date: {date}</p>
    </div>
  );
};

export default Expense;
