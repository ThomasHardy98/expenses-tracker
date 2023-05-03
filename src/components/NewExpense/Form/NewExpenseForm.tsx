import { Dispatch, useContext, SetStateAction } from "react";
import { v4 } from "uuid";

import { useForm } from "hooks/useForm";
import ExpenseContext from "context/ExpenseContext";

import styles from "../Form/NewExpenseForm.module.scss";

type ExpenseFormValue = {
  toggleModal: Dispatch<SetStateAction<boolean>>;
};

type ExpenseFormValues = {
  name: string;
  cost: number;
  date: string;
};

const NewExpenseForm = ({ toggleModal }: ExpenseFormValue) => {
  const ctx = useContext(ExpenseContext);

  const initialState = {
    name: "",
    cost: "",
    date: "",
  };

  const onAdd = () => {
    ctx.addExpense({
      id: v4(),
      name: (values as ExpenseFormValues).name,
      cost: Number((values as ExpenseFormValues).cost),
      date: (values as ExpenseFormValues).date,
    });
    clearForm();
    toggleModal(false);
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
        onChange={onChange}
        required
      />
      <label>Cost</label>
      <input
        name="cost"
        id="cost"
        type="number"
        value={(values as ExpenseFormValues).cost || initialState.cost}
        onChange={onChange}
        required
      />
      <label>Date</label>
      <input
        name="date"
        id="date"
        type="date"
        value={(values as ExpenseFormValues).date || initialState.date}
        onChange={onChange}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewExpenseForm;
