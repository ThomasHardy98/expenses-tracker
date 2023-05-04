import { useContext } from "react";

import { useForm } from "hooks/useForm";
import ExpenseContext from "context/ExpenseContext";

import styles from "../Form/BudgetForm.module.scss";

type BudgetFormValues = {
  budget: number;
};

const BudgetForm = () => {
  const ctx = useContext(ExpenseContext);

  const initialState = {
    budget: "",
  };

  const onAdd = () => {
    const budget = Number((values as BudgetFormValues).budget);
    ctx.updateBudget(budget);
    ctx.changeHiddenBudgetInput(true);
    clearForm();
  };

  const { onChange, onSubmit, clearForm, values } = useForm(
    onAdd,
    initialState
  );

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <span>
        £
        <input
          name="budget"
          id="budget"
          type="number"
          min="0"
          step=".01"
          value={(values as BudgetFormValues).budget || initialState.budget}
          onChange={onChange}
          required
        />
      </span>
      <button type="submit">Update</button>
    </form>
  );
};

export default BudgetForm;
