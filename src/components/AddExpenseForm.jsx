import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import Form from "react-bootstrap/Form";
import uuid from "react-uuid";

export const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState(""); // Fixed typo here

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeCost = (e) => {
    setCost(e.target.value);
  };

  const handleChangeTime = (e) => { // Fixed typo here
    setTime(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangePriority = (e) => { // Fixed typo here
    setPriority(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const expense = {
      id: uuid(),
      name: name,
      time: time,
      category: category,
      priority: priority, // Fixed typo here
      cost: parseInt(cost),
    };

    console.log(expense);

    dispatch({
      type: "Add_expense",
      payload: expense,
    });

    // Reset form fields after submission
    setName("");
    setCost("");
    setTime("");
    setCategory("");
    setPriority("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Add New Expense</h3>
      <div className="add-expense">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={handleChangeName}
          placeholder="Enter Name..."
          required
        />
        <label htmlFor="cost">Cost</label>
        <input
          type="text"
          className="form-control"
          value={cost}
          onChange={handleChangeCost}
          placeholder="Enter Cost"
          required
        />
      </div>
      <div className="tags">
        <label htmlFor="time">Time</label> {/* Corrected label */}
        <Form.Select aria-label="Select time" onChange={handleChangeTime}> {/* Added onChange handler */}
          <option value="">Open this select menu</option>
          <option value="Today">Today</option>
          <option value="This Week">This Week</option>
          <option value="This Month">This month</option>
        </Form.Select>
      </div>

      <div className="tags">
        <label htmlFor="category">Category</label> {/* Corrected label */}
        <Form.Select aria-label="Select category" onChange={handleChangeCategory}> {/* Added onChange handler */}
          <option value="">Open this select menu</option>
          <option value="Travel">Travel</option>
          <option value="Education">Education</option>
          <option value="Entertainment">Entertainment</option>
        </Form.Select>
      </div>

      <div className="tags">
        <label htmlFor="priority">Priority</label> {/* Corrected label */}
        <Form.Select aria-label="Priority" onChange={handleChangePriority}> {/* Added onChange handler */}
          <option value="">Open this select menu</option>
          <option value="Urgent">Urgent</option>
          <option value="High Priority">High Priority</option>
          <option value="Low Priority">Low Priority</option>
        </Form.Select>
      </div>
      <button type="submit" className="btn">
        Add Expense
      </button>
    </form>
  );
};
