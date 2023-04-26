type ExpenseType = {
  name: string;
  cost: string;
  date: string;
};

const Expense = ({ name, cost, date }: ExpenseType) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Cost: {cost}</p>
      <p>Date: {date}</p>
    </div>
  );
};

export default Expense;
