import "./App.css";
import { Budget } from "./components/Budget";
import { Remaining } from "./components/Remaining";
import { Spent } from "./components/Spent";
import { ExpenseList } from "./components/ExpenseList";
import { AddExpenseForm } from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";
// import { SearchExpense } from "./components/SearchExpense";

function App() {
  return (
    <>
      <AppProvider>
        <div className="container">
          <div className="header">
            <h1>Expenses Tracker</h1>
          </div>

          <div className="summary-container">
            <Budget />
            <Remaining />
            <Spent />
          </div>

          <h3 className="title">Expenses</h3>
          {/* <SearchExpense/> */}
          <ExpenseList />
          <AddExpenseForm />
        </div>
      </AppProvider>
    </>
  );
}

export default App;
