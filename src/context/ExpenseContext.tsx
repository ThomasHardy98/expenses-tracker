import { createContext } from "react";

type ExpenseContext = {
  expenses: Array<ExpenseType>;
  budget: number;
  hiddenBudgetInput: boolean;
  updateBudget: (budget: number) => void;
  addExpense: (expense: ExpenseType) => void;
  deleteExpense: (id: string) => void;
  getTotalExpenditure: () => number;
  changeHiddenBudgetInput: (change: boolean) => void;
};

const defaultState = {
  expenses: [],
  budget: 0,
  hiddenBudgetInput: false,
  updateBudget: () => {},
  addExpense: () => {},
  deleteExpense: () => {},
  getTotalExpenditure: () => 0,
  changeHiddenBudgetInput: () => {},
};

const ExpenseContext = createContext<ExpenseContext>(defaultState);

export default ExpenseContext;
