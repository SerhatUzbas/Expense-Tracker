import { useContext } from "react";
import { Context } from "../Context/ContextProvider";
import Item from "./item";
import classes from "./List.module.css";

const List = () => {
  const listCtx = useContext(Context);
  return (
    <div className={classes.container}>
      {listCtx.transactions.map((transaction) => (
        <Item
          key={transaction.id}
          description={transaction.description}
          amount={transaction.amount}
          id={transaction.id}
        />
      ))}
    </div>
  );
};

export default List;
