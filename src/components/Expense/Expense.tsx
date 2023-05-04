import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faPoundSign,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

import ExpenseContext from "context/ExpenseContext";
import formatter from "helpers/formatter";

import styles from "../Expense/Expense.module.scss";

type ExpenseType = {
  id: string;
  name: string;
  cost: number;
  date: string;
};

const Expense = ({ id, name, cost, date }: ExpenseType) => {
  const ctx = useContext(ExpenseContext);

  const costFormatted = formatter.format(cost);
  const formattedDate = new Date(date).toLocaleDateString("en-GB");

  const deleteHandler = () => {
    ctx.deleteExpense(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.value}>
        <FontAwesomeIcon icon={faTag} />
        <p>{name}</p>
      </div>
      <div className={styles.value}>
        <FontAwesomeIcon icon={faPoundSign} />
        <p>{costFormatted}</p>
      </div>
      <div className={styles.value}>
        <FontAwesomeIcon icon={faCalendar} />
        <p>{formattedDate}</p>
      </div>
      <button className={styles.button} onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
};

export default Expense;
