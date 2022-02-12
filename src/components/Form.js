import { useContext, useState } from "react";
import { Context } from "../Context/ContextProvider";
import classes from "./Form.module.css";
const Form = () => {
  const listCtx = useContext(Context);

  const [desState, setDesState] = useState("");
  const [amState, setAmState] = useState("");

  const desHandler = (e) => {
    e.preventDefault();
    setDesState(e.target.value);
  };

  const amHandler = (e) => {
    e.preventDefault();
    setAmState(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const item = {
      description: desState,
      amount: amState,
      id: Math.random().toString(),
    };
    listCtx.addItem(item);
    setAmState("");
    setDesState("");
  };

  return (
    <form className={classes.container} onSubmit={submitHandler}>
      <div className={classes.row}>
        <label htmlFor='description'>Description</label>
        <input
          id='description'
          type='text'
          value={desState}
          onChange={desHandler}
        ></input>
      </div>

      <div className={classes.row}>
        <label>Amount</label>
        <input
          id='amount'
          type='number'
          value={amState}
          onChange={amHandler}
        ></input>
      </div>

      <div className={classes.row}>
        <button className={classes.button} type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
