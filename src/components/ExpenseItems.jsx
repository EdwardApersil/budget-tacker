/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { MdCancel } from "react-icons/md";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  function handleDeleteExpense() {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
    alert("deleted");
  }

  return (
    <>
      <div className="card">
        <div className="expense-card">
          <div className="expense-info">
            <div className="mb-10">
              <span className="expense-category">{props.category}</span>
            </div>
            <h3 className="expense-name">{props.name}</h3>
            <div className="expense-cost">
              <span className="money">${props.cost}</span>
            </div>

            <div className="bottom-tags">
              <span className="expense-time">{props.time}</span>
              <span className="expense-priority">{props.priorty}</span>
            </div>
          </div>
          <div className="delete-button" onClick={handleDeleteExpense}>
            <MdCancel size="1.5em" />
          </div>
        </div>
      </div>
    </>
  );
};

ExpenseItem.propTypes = {
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
};

export default ExpenseItem;
