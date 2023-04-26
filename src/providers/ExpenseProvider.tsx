import { ReactNode, useState } from "react";

import ExpenseContext from "context/ExpenseContext";

type ExpenseProviderType = {
  children: ReactNode;
};

const ExpenseProvider = ({ children }: ExpenseProviderType) => {
  const [expenses, setExpenses] = useState(Array<ExpenseType>);
  const [budget, setBudget] = useState(0);

  const updateBudget = (budget: number) => {
    setBudget(budget);
  };

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
        budget,
        updateBudget,
        addExpense,
        deleteExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
