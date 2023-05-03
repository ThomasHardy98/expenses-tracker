import { ReactNode, useState } from "react";

import ExpenseContext from "context/ExpenseContext";

type ExpenseProviderType = {
  children: ReactNode;
};

const ExpenseProvider = ({ children }: ExpenseProviderType) => {
  const [expenses, setExpenses] = useState(Array<ExpenseType>);
  const [budget, setBudget] = useState(0);
  const [hiddenBudgetInput, setHiddenBudgetInput] = useState(false);

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

  const getTotalExpenditure = () => {
    const result = expenses.reduce(
      (total, currentValue) => (total = total + currentValue.cost),
      0
    );
    return result;
  };

  const changeHiddenBudgetInput = (change: boolean) => {
    setHiddenBudgetInput(change);
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        budget,
        hiddenBudgetInput,
        updateBudget,
        addExpense,
        deleteExpense,
        getTotalExpenditure,
        changeHiddenBudgetInput,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
