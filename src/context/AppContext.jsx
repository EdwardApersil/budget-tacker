import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "Add_expense":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "Set_budget":
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 10200,
  expenses: [
    { id: 1, name: "Shopping", cost: 50, time: "Today", category: "Food", priority: "High"},
    { id: 2, name: "Holiday", cost: 400, time: "This Month", category: "Entertainment", priority: "High" },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
