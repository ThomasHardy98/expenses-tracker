import { useContext } from "react";

import ExpenseContext from "context/ExpenseContext";
import { useForm } from "hooks/useForm";

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
    <form onSubmit={onSubmit}>
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
