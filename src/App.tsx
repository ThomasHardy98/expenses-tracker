import NewExpense from "components/NewExpense/NewExpense";
import ExpenseList from "components/ExpenseList/ExpenseList";

import styles from "App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <h1>Expense Tracker</h1>
      <NewExpense />
      <ExpenseList />
    </div>
  );
}

export default App;
