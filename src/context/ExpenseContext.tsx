import { createContext } from "react";

type ExpenseContext = {
  expenses: Array<ExpenseType>;
  addExpense: (expense: ExpenseType) => void;
  deleteExpense: (id: string) => void;
};

const defaultState = {
  expenses: [],
  addExpense: () => {},
  deleteExpense: () => {},
};

const ExpenseContext = createContext<ExpenseContext>(defaultState);

export default ExpenseContext;
