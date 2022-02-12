import React, { useContext } from "react";
import { Context } from "../Context/ContextProvider";
import classes from "./Item.module.css";
const Item = (props) => {
  const classList = `${classes.item} ${
    props.amount > 0 ? classes.income : classes.expense
  }`;

  const { removeItem } = useContext(Context);

  const removeHandler = (e) => {
    e.preventDefault();
    removeItem(props.id);
  };

  return (
    <div className={classList}>
      <h2>{props.description}</h2>
      <h2>
        {props.amount < 0 ? "- $" : "+ $"}
        {Math.abs(props.amount)}
      </h2>
      <button className={classes.remove} onClick={removeHandler}>
        Remove
      </button>
    </div>
  );
};

export default Item;
