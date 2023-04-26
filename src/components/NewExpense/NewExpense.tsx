import { Fragment, useContext, useState } from "react";

import Modal from "../UI/Modal/Modal";
import NewExpenseForm from "./Form/NewExpenseForm";
import ExpenseContext from "context/ExpenseContext";

const NewExpense = () => {
  const ctx = useContext(ExpenseContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const clickHandler = () => {
    setIsOpen(true);
  };

  return (
    <Fragment>
      <Modal isOpen={isOpen} toggle={toggle} closeText="Cancel">
        <NewExpenseForm toggleModal={setIsOpen} />
      </Modal>
      {ctx.budget > 0 && <button onClick={clickHandler}>Add expense</button>}
    </Fragment>
  );
};

export default NewExpense;
