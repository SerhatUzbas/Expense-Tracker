import { useContext } from "react";
import { Context } from "../Context/ContextProvider";
import classes from "./TotalAmount.module.css";
const TotalAmount = () => {
  const listCtx = useContext(Context);

  const amounts = listCtx.transactions.map((transaction) =>
    Number(transaction.amount)
  );
  const totalAmount = amounts.reduce(
    (acc, val) => Number(acc) + Number(val),
    0
  );
  console.log(totalAmount);
  const classList = `${classes.total} ${
    totalAmount > 0 ? classes.income : classes.expense
  }`;
  return (
    <div className={classList}>
      <h1 className={classes.title}>Balance</h1>
      <h1 className={classes.text}>
        {totalAmount < 0 ? "- $" : "+ $"}
        {Math.abs(totalAmount)}
      </h1>
    </div>
  );
};

export default TotalAmount;
