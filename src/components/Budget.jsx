import { AppContext } from "../context/AppContext";
import { useContext, useState } from "react";

export const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(budget);

  const openForm = () => {
    setOpen(true);
  };

  const closeForm = () => {
    setOpen(false);
  };

  const handleSave = (e) => {
    e.preventDefault();

    dispatch({
      type: "Set_budget",
      payload: value,
    });

    closeForm();
    
  };

  const handleEdit = () => {
    openForm();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  if (open) {
    return (
      <form className="budget" onSubmit={handleSave}>
        <div className="details">
          <h2>Budget:</h2>
          <div className="budget-amount">${budget}</div>
        </div>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Enter new budget"
        />
        <button type="submit">Save</button>
        <button type="button" onClick={closeForm}>
          Close
        </button>
      </form>
    );
  }

  return (
    <div className="budget">
      <div className="details">
        <h2>Budget:</h2>
        <div className="budget-amount">${budget}</div>
      </div>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};
