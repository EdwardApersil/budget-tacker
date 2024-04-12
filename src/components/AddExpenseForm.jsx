export const AddExpenseForm = () => {
  return (
    <>
      
      <form action="" className="form">
        <h3>Add New Expense</h3>
        <div className="add-expense">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" placeholder="Enter Name..." required />
          <label htmlFor="cost">Const</label>
          <input type="text" className="form-control"  name="" id="" placeholder="Enter Cost" required />
          
        </div>
        <button type="submit" className="btn">Add Expense</button>
      </form>
    </>
  );
};
