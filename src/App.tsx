import { useContext, Fragment } from "react";

import NewExpense from "components/NewExpense/NewExpense";
import ExpenseList from "components/ExpenseList/ExpenseList";
import BudgetForm from "components/Budget/Form/BudgetForm";
import Budget from "components/Budget/Budget";
import TotalExpense from "components/Expense/TotalExpense/TotalExpense";
import RemainingBudget from "components/Budget/RemainingBudget/RemainingBudget";
import ExpenseContext from "context/ExpenseContext";

import styles from "App.module.scss";
import formatter from "helpers/formatter";

function App() {
  const ctx = useContext(ExpenseContext);
  const formattedBudget = formatter.format(ctx.budget);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Monthly Expense Tracker</h1>
      {!ctx.hiddenBudgetInput ? (
        <div className={styles.container}>
          <p className={styles.subheading}>Enter your monthly budget</p>
          {ctx.budget > 0 && (
            <p className={styles.subheadingTwo}>
              Current budget: <b>{formattedBudget}</b>
            </p>
          )}
          <BudgetForm />
        </div>
      ) : (
        <Fragment>
          <div className={styles.analytics}>
            <Budget />
            <RemainingBudget />
            <TotalExpense />
          </div>
          <NewExpense />
          <ExpenseList />
        </Fragment>
      )}
    </div>
  );
}

export default App;
