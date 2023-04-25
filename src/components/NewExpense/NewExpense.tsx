import { Fragment, useState } from "react";

import Modal from "../UI/Modal/Modal";
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
        <NewExpenseForm toggleModal={setIsOpen} />
      </Modal>
      <button onClick={clickHandler}>Add expense</button>
    </Fragment>
  );
};

export default NewExpense;
