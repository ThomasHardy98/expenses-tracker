import { useForm } from "hooks/useForm";

import "../Form/NewExpenseForm.module.scss";

type ExpenseFormValues = {
  name: string;
  cost: string;
  date: string;
};

const NewExpenseForm = () => {
  const initialState = {
    name: "",
    cost: "",
    date: "",
  };

  const onAdd = () => {
    console.log(values);
    clearForm();
  };

  const { onChange, onSubmit, clearForm, values } = useForm(
    onAdd,
    initialState
  );

  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input
        name="name"
        id="name"
        type="text"
        value={(values as ExpenseFormValues).name || initialState.name}
        placeholder="Name"
        onChange={onChange}
        required
      />
      <label>Cost</label>
      <input
        name="cost"
        id="cost"
        type="number"
        value={(values as ExpenseFormValues).cost || initialState.cost}
        placeholder="Cost"
        onChange={onChange}
        required
      />
      <label>Date</label>
      <input
        name="date"
        id="date"
        type="date"
        value={(values as ExpenseFormValues).date || initialState.date}
        placeholder="Date"
        onChange={onChange}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewExpenseForm;
