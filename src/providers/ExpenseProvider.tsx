import { ReactNode, useState } from "react";

import ExpenseContext from "context/ExpenseContext";

type ExpenseProviderType = {
  children: ReactNode;
};

const ExpenseProvider = ({ children }: ExpenseProviderType) => {
  const [expenses, setExpenses] = useState(Array<ExpenseType>);

  const addExpense = (expense: ExpenseType) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  const deleteExpense = (id: string) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        addExpense,
        deleteExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
