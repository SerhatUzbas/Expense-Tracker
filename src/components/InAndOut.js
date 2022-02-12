import { useContext } from "react";
import { Context } from "../Context/ContextProvider";
import classes from "./InAndOut.module.css";

const InAndOut = () => {
  const listCtx = useContext(Context);
  const plus = listCtx.transactions.map((transaction) =>
    transaction.amount > 0 ? transaction.amount : 0
  );

  const minus = listCtx.transactions.map((transaction) =>
    transaction.amount < 0 ? transaction.amount : 0
  );

  const income = plus.reduce((acc, val) => Number(acc) + Number(val), 0);
  const expense = minus.reduce((acc, val) => Number(acc) + Number(val), 0);

  const inClass = `${classes.block} ${classes.income}`;
  const expClass = `${classes.block} ${classes.expense}`;
  return (
    <div className={classes.container}>
      <div className={inClass}>
        <h1>+${+income}</h1>
      </div>
      <div className={expClass}>
        <h1>-${Math.abs(+expense)}</h1>
      </div>
    </div>
  );
};

export default InAndOut;
