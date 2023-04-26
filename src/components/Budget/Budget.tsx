import { Fragment, useContext } from "react";

import ExpenseContext from "context/ExpenseContext";

const Budget = () => {
  const ctx = useContext(ExpenseContext);

  return (
    <Fragment>
      {ctx.budget > 0 && (
        <Fragment>
          <p>Monthly budget</p>
          <p>£{ctx.budget}</p>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Budget;
