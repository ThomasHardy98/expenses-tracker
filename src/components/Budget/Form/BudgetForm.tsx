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
    ctx.updateBudget((values as BudgetFormValues).budget);
    clearForm();
  };

  const { onChange, onSubmit, clearForm, values } = useForm(
    onAdd,
    initialState
  );

  return (
    <form onSubmit={onSubmit}>
      <input
        name="budget"
        id="budget"
        type="number"
        min="0"
        value={(values as BudgetFormValues).budget || initialState.budget}
        onChange={onChange}
        required
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default BudgetForm;
