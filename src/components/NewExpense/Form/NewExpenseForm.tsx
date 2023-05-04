import { Dispatch, useContext, SetStateAction, Fragment } from "react";
import { v4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faTag,
  faPoundSign,
} from "@fortawesome/free-solid-svg-icons";

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
    <Fragment>
      <h2 className={styles.title}>New expense form</h2>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          <label>
            <FontAwesomeIcon icon={faTag} />
          </label>
          <input
            className={styles.input}
            name="name"
            id="name"
            type="text"
            value={(values as ExpenseFormValues).name || initialState.name}
            onChange={onChange}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label>
            <FontAwesomeIcon icon={faPoundSign} />
          </label>
          <span>
            <input
              className={styles.input}
              name="cost"
              id="cost"
              type="number"
              value={(values as ExpenseFormValues).cost || initialState.cost}
              onChange={onChange}
              required
            />
          </span>
        </div>
        <div className={styles.inputContainer}>
          <label>
            <FontAwesomeIcon icon={faCalendar} />
          </label>
          <input
            className={styles.input}
            name="date"
            id="date"
            type="date"
            value={(values as ExpenseFormValues).date || initialState.date}
            onChange={onChange}
            required
          />
        </div>
        <button className={styles.button} type="submit">
          Add expense
        </button>
      </form>
    </Fragment>
  );
};

export default NewExpenseForm;
