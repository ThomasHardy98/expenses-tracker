import { createContext } from "react";

type ExpenseContext = {
  expenses: Array<ExpenseType>;
  budget: number;
  updateBudget: (budget: number) => void;
  addExpense: (expense: ExpenseType) => void;
  deleteExpense: (id: string) => void;
};

const defaultState = {
  expenses: [],
  budget: 0,
  updateBudget: () => {},
  addExpense: () => {},
  deleteExpense: () => {},
};

const ExpenseContext = createContext<ExpenseContext>(defaultState);

export default ExpenseContext;
