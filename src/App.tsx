import NewExpense from "components/UI/NewExpense/NewExpense";

import styles from "App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <h1>Expense Tracker</h1>
      <NewExpense />
      {/* Expense list */}
    </div>
  );
}

export default App;
