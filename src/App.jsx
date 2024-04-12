import "./App.css";
import { Budget } from "./components/Budget";
import { Remaining } from "./components/Remaining";
import { Spent } from "./components/Spent";
import { ExpenseList } from "./components/ExpenseList";
import { AddExpenseForm } from "./components/AddExpenseForm";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Budget Tracker</h1>
        </div>

        <div className="summary-container">
          <Budget />
          <Remaining />
          <Spent />
        </div>

        <h3 className="title">Expenses</h3>
        <ExpenseList />
        <AddExpenseForm />
      </div>

    </>
  );
}

export default App;
