import { createContext, useReducer } from "react";

const initialState = {
  transactions: [],
  //   addItem: (item) => {},
  //   removeItem: (id) => {},
};

export const Context = createContext(initialState);

const ReducerFunc = (state, action) => {
  switch (action.type) {
    case "REMOVE":
      return {
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD":
      return {
        transactions: [action.payload, ...state.transactions],
      };

    default:
      return state;
  }
};

export const ContextProvider = (props) => {
  const [curState, dispatch] = useReducer(ReducerFunc, initialState);

  const handleAddItem = (item) => {
    dispatch({ type: "ADD", payload: item });
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <Context.Provider
      value={{
        transactions: curState.transactions,
        addItem: handleAddItem,
        removeItem: handleRemoveItem,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
