import React from "react";
import TotalAmount from "./components/TotalAmount";
import classes from "./App.module.css";
import InAndOut from "./components/InAndOut";
import List from "./components/List";
import Form from "./components/Form";
import { ContextProvider } from "./Context/ContextProvider";

const App = () => {
  return (
    <ContextProvider>
      <div className={classes.container}>
        <TotalAmount />
        <InAndOut />
        <List />
        <Form />
      </div>
    </ContextProvider>
  );
};

export default App;
