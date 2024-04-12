import "./App.css";
import Budget from "./assets/Components/Budget";
import ExpenseList from "./assets/Components/ExpenseList";
import Remaining from "./assets/Components/Remaining";
import Spent from "./assets/Components/Spent";

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
        <ExpenseList/>
      </div>
    </>
  );
}

export default App;
