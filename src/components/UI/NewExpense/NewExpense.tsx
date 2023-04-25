import { Fragment, useState } from "react";

import Modal from "../Modal/Modal";
import NewExpenseForm from "./Form/NewExpenseForm";

const NewExpense = () => {
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
        <NewExpenseForm />
      </Modal>
      <button onClick={clickHandler}>Add expense</button>
    </Fragment>
  );
};

export default NewExpense;
