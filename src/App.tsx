import NewExpense from "components/NewExpense/NewExpense";
import ExpenseList from "components/ExpenseList/ExpenseList";
import BudgetForm from "components/Budget/Form/BudgetForm";
import Budget from "components/Budget/Budget";

import styles from "App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <h1>Monthly expense tracker</h1>
      <br />
      <p>Enter your monthly budget</p>
      <BudgetForm />
      <br />
      <Budget />
      <br />
      <NewExpense />
      <ExpenseList />
    </div>
  );
}

export default App;
