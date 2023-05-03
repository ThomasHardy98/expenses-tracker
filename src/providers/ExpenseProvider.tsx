import { ReactNode, useEffect, useState } from "react";

import ExpenseContext from "context/ExpenseContext";

type ExpenseProviderType = {
  children: ReactNode;
};

const ExpenseProvider = ({ children }: ExpenseProviderType) => {
  const [expenses, setExpenses] = useState(Array<ExpenseType>);
  const [budget, setBudget] = useState(0);
  const [hiddenBudgetInput, setHiddenBudgetInput] = useState(false);

  useEffect(() => {
    const localBudget = localStorage.getItem("thardy_budget");
    if (localBudget) {
      setBudget(JSON.parse(localBudget));
    }
    const localExpenses = localStorage.getItem("thardy_expenses");
    if (localExpenses) {
      setExpenses(JSON.parse(localExpenses));
    }
    const hiddenBool = localStorage.getItem("thardy_hiddenBudgetInput");
    if (hiddenBool) {
      setHiddenBudgetInput(JSON.parse(hiddenBool) === true);
    }
  }, []);

  const updateBudget = (budget: number) => {
    (Math.round(budget * 100) / 100).toFixed(2);
    setBudget(budget);
    localStorage.setItem("thardy_budget", JSON.stringify(budget));
  };

  const addExpense = (expense: ExpenseType) => {
    setExpenses((prev) => [expense, ...prev]);
    const currentExpenses = localStorage.getItem("thardy_expenses");
    if (currentExpenses) {
      const parsed = JSON.parse(currentExpenses);
      parsed.unshift(expense);
      localStorage.setItem("thardy_expenses", JSON.stringify(parsed));
    } else {
      localStorage.setItem("thardy_expenses", JSON.stringify([expense]));
    }
  };

  const deleteExpense = (id: string) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
    localStorage.setItem("thardy_expenses", JSON.stringify(newExpenses));
  };

  const getTotalExpenditure = () => {
    const result = expenses.reduce(
      (total, currentValue) => (total = total + currentValue.cost),
      0
    );
    result.toFixed(2);
    return result;
  };

  const changeHiddenBudgetInput = (change: boolean) => {
    setHiddenBudgetInput(change);
    localStorage.setItem("thardy_hiddenBudgetInput", JSON.stringify(change));
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
