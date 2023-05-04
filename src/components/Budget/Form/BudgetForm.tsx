import { FormEvent, useContext, useEffect, useRef } from "react";

import ExpenseContext from "context/ExpenseContext";

import styles from "../Form/BudgetForm.module.scss";

const BudgetForm = () => {
  const ctx = useContext(ExpenseContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ctx.changeHiddenBudgetInput(true);
  };

  const handleInput = () => {
    if (inputRef.current) {
      ctx.updateBudget(inputRef.current.valueAsNumber);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <span className={styles.inputContainer}>
        £
        <input
          className={styles.input}
          name="budget"
          id="budget"
          type="number"
          min="0"
          step=".01"
          ref={inputRef}
          value={ctx.budget || ""}
          onChange={handleInput}
          required
          autoFocus
        />
      </span>
      <button className={styles.button} type="submit">
        Update
      </button>
    </form>
  );
};

export default BudgetForm;
