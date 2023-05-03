import { useContext, Fragment } from "react";

import NewExpense from "components/NewExpense/NewExpense";
import ExpenseList from "components/ExpenseList/ExpenseList";
import BudgetForm from "components/Budget/Form/BudgetForm";
import Budget from "components/Budget/Budget";
import TotalExpense from "components/Expense/TotalExpense/TotalExpense";
import RemainingBudget from "components/Budget/RemainingBudget/RemainingBudget";
import ExpenseContext from "context/ExpenseContext";

import styles from "App.module.scss";

function App() {
  const ctx = useContext(ExpenseContext);

  return (
    <div className={styles.container}>
      <h1>Monthly expense tracker</h1>
      {!ctx.hiddenBudgetInput && (
        <Fragment>
          <p>Enter your monthly budget</p>
          {ctx.budget > 0 && <p>Current budget: £{ctx.budget}</p>}
          <BudgetForm />
        </Fragment>
      )}
      <br />
      {ctx.hiddenBudgetInput && (
        <Fragment>
          <div className={styles.analytics}>
            <Budget />
            <TotalExpense />
            <RemainingBudget />
          </div>
          <NewExpense />
          <ExpenseList />
        </Fragment>
      )}
    </div>
  );
}

export default App;
